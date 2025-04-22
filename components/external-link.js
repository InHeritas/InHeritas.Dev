import React from 'react';

/**
 * @param {Object} props
 * @param {string} props.href - 링크 URL
 * @param {string} props.title - 링크 제목
 * @param {string} props.description - 링크 설명
 * @param {React.ReactNode} props.icon - 커스텀 아이콘 (선택사항)
 * @param {string} props.imageSrc - 이미지 경로 (선택사항)
 * @param {string} props.imageAlt - 이미지 대체 텍스트 (선택사항)
 * @param {string} props.bgColor - 배경 색상 클래스 (선택사항)
 * @param {string} props.borderColor - 테두리 색상 클래스 (선택사항)
 * @param {string} props.textColor - 텍스트 색상 클래스 (선택사항)
 * @param {string} props.hoverBgColor - 호버 시 배경 색상 클래스 (선택사항)
 * @param {string} props.hoverBorderColor - 호버 시 테두리 색상 클래스 (선택사항)
 * @param {string} props.className - 추가 CSS 클래스 (선택사항)
 */
export default function ExternalLink({
    href,
    title,
    description,
    icon,
    imageSrc,
    imageAlt = "",
    bgColor = 'bg-white',
    borderColor = 'border-gray-200',
    textColor = 'text-gray-800',
    hoverBgColor = 'hover:bg-gray-50',
    hoverBorderColor = 'hover:border-gray-300',
    className = '',
    ...props
}) {
    const containerClasses = `
    block w-full p-4 mb-4 mt-2
    rounded-lg 
    border ${borderColor} ${hoverBorderColor}
    ${bgColor} ${hoverBgColor}
    hover:shadow-xs 
    transition-all duration-200
    ${className}
  `;

    const externalLinkIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
        </svg>
    );

    return (
        <a
            href={href}
            className={containerClasses}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            <div className="flex items-center gap-4">
                {/* 이미지가 있으면 이미지 표시, 없으면 아이콘 표시 */}
                {imageSrc ? (
                    <div className="flex-shrink-0">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                    </div>
                ) : (
                    icon && <div className="flex-shrink-0">{icon}</div>
                )}

                <div className="flex-grow">
                    <h3 className={`font-medium text-base ${textColor}`}>{title}</h3>
                    {description && <p className="text-gray-500 text-sm">{description}</p>}
                </div>
                <div className="flex-shrink-0">{externalLinkIcon}</div>
            </div>
        </a>
    );
}