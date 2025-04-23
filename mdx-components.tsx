
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { ReleaseNoteEntry, ChangeItem, Separator, ReleaseNotesContainer } from './components/releasenote';
import { CompactEmailLink } from './components/email-link';
import ExternalLink from './components/external-link';

const docsComponents = getDocsMDXComponents()

export const useMDXComponents: typeof getDocsMDXComponents = components => ({
    ...docsComponents,
    ...components,

    // Custom components
    ReleaseNoteEntry,
    ChangeItem,
    Separator,
    ReleaseNotesContainer,
    CompactEmailLink,
    ExternalLink
})