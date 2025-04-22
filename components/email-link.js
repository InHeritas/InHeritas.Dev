import React from 'react';

export function CompactEmailLink({
    email,
    subject = "",
    body = "",
    label = "이메일 문의",
    className = "",
    ...props
}) {
    const mailtoLink = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}${body ? `${subject ? "&" : "?"}body=${encodeURIComponent(body)}` : ""
        }`;

    return (
        <a
            href={mailtoLink}
            className={`
                        inline-flex items-center gap-2
                        px-4 py-2 rounded-full
                        bg-white border border-gray-200
                        hover:bg-gray-50 hover:border-gray-300
                        hover:shadow-xs
                        transition-all duration-200
                        font-medium text-gray-700
                        ${className}
                    `}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
            {label}
        </a>
    );
}
