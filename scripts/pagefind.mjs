import { readdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import * as pagefind from 'pagefind'

const serverDir = '.next/server'
const outputPath = 'public/_pagefind'

// Next.js writes prerendered pages to `server/app`, but when a build adapter
// is set (as on Vercel, via NEXT_ADAPTER_PATH) it writes them to
// `server/route-cache/APP_PAGE/<hash>/$/` instead.
async function findPageRoots() {
    const roots = [path.join(serverDir, 'app')]
    const routeCacheDir = path.join(serverDir, 'route-cache', 'APP_PAGE')
    if (existsSync(routeCacheDir)) {
        for (const hash of await readdir(routeCacheDir)) {
            roots.push(path.join(routeCacheDir, hash, '$'))
        }
    }
    return roots.filter((root) => existsSync(root))
}

async function findHtmlFiles(dir) {
    const entries = await readdir(dir, { recursive: true, withFileTypes: true })
    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
        .map((entry) => path.join(entry.parentPath, entry.name))
}

// Same URLs the pagefind CLI produced for `--site .next/server/app`.
function toUrl(root, file) {
    const relative = path.relative(root, file).split(path.sep).join('/')
    return '/' + relative.replace(/(^|\/)index\.html$/, '$1')
}

const { index } = await pagefind.createIndex()
const seen = new Set()

for (const root of await findPageRoots()) {
    for (const file of await findHtmlFiles(root)) {
        const url = toUrl(root, file)
        if (seen.has(url)) continue
        seen.add(url)
        const { errors } = await index.addHTMLFile({ url, content: await readFile(file, 'utf8') })
        if (errors.length) throw new Error(`Pagefind failed on ${file}: ${errors.join(', ')}`)
    }
}

if (seen.size === 0) {
    throw new Error(`Pagefind found no prerendered HTML under ${serverDir}`)
}

const { errors } = await index.writeFiles({ outputPath })
if (errors.length) throw new Error(`Pagefind failed to write index: ${errors.join(', ')}`)

await pagefind.close()
console.log(`Pagefind indexed ${seen.size} HTML files into ${outputPath}`)
