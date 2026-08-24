'use client'

import {
    Children,
    isValidElement,
    useState,
    type ReactElement,
    type ReactNode,
} from 'react'

type Language = 'ko' | 'en'

interface LanguageSwitcherProps {
    children: ReactNode
    defaultLanguage?: Language
}

type LanguageSection = ReactElement<{ lang?: string }>

const languages: { label: string; value: Language }[] = [
    { label: '한국어', value: 'ko' },
    { label: 'English', value: 'en' },
]

export function LanguageSwitcher({
    children,
    defaultLanguage = 'ko',
}: LanguageSwitcherProps) {
    const [language, setLanguage] = useState<Language>(defaultLanguage)
    const sections = Children.toArray(children).filter(
        (child): child is LanguageSection =>
            isValidElement<{ lang?: string }>(child) &&
            (child.props.lang === 'ko' || child.props.lang === 'en')
    )
    const activeSection = sections.find(
        (section) => section.props.lang === language
    )

    return (
        <div>
            <div
                aria-label="페이지 언어 / Page language"
                className="not-prose my-6 inline-flex rounded-lg border border-neutral-200 bg-neutral-100 p-1"
                role="group"
            >
                {languages.map(({ label, value }) => {
                    const isActive = language === value

                    return (
                        <button
                            key={value}
                            aria-pressed={isActive}
                            className={
                                isActive
                                    ? 'min-w-24 rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-neutral-900 shadow-sm'
                                    : 'min-w-24 rounded-md px-4 py-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500'
                            }
                            lang={value}
                            onClick={() => setLanguage(value)}
                            type="button"
                        >
                            {label}
                        </button>
                    )
                })}
            </div>

            {activeSection}
        </div>
    )
}
