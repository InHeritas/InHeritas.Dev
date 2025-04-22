import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { ReleaseNoteEntry, ChangeItem, Separator, ReleaseNotesContainer } from './components/releasenote';
import { CompactEmailLink } from './components/email-link';
import ExternalLink from './components/external-link';

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
    return {
        ...themeComponents,
        ...components,

        // Custom components
        ReleaseNoteEntry,
        ChangeItem,
        Separator,
        ReleaseNotesContainer,
        CompactEmailLink,
        ExternalLink
    }
}