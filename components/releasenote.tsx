import React from 'react';

type ChangeType = 'feature' | 'changed' | 'fixed' | 'update' | 'fix' | string;

/**
 * @param {Object} props
 * @param {'feature' | 'changed' | 'fixed' | 'update' | 'fix' | string} props.type - 변경 유형
 * @param {React.ReactNode} props.children - 변경 내용
 */

interface ChangeItemProps {
    type: ChangeType;
    children: React.ReactNode;
}

interface TypeConfig {
    text: string;
    bgColor: string;
    textColor: string;
}

interface TypeConfigMap {
    [key: string]: TypeConfig;
}

export const ChangeItem = ({ type, children }: ChangeItemProps) => {
    const typeConfig: TypeConfigMap = {
        feature: {
            text: 'Feature',
            bgColor: 'bg-[#0e845120]',
            textColor: 'text-[#0E8450]',
        },
        update: {
            text: 'Changed',
            bgColor: 'bg-[#203AA220]',
            textColor: 'text-[#203AA2]',
        },
        changed: {
            text: 'Changed',
            bgColor: 'bg-[#203AA220]',
            textColor: 'text-[#203AA2]',
        },
        fix: {
            text: 'Fixed',
            bgColor: 'bg-[#B75F1720]',
            textColor: 'text-[#B75F17]',
        },
        fixed: {
            text: 'Fixed',
            bgColor: 'bg-[#B75F1720]',
            textColor: 'text-[#B75F17]',
        },
    };

    const config = typeConfig[type?.toLowerCase()] || {
        text: type,
        bgColor: 'bg-gray-100 dark:bg-gray-800',
        textColor: 'text-gray-700 dark:text-gray-300',
    };

    return (
        <tr>
            <td className="cat w-[95px] align-top pr-2.5">
                <span
                    className={`inline-block w-20 font-mono font-medium text-[0.9rem] rounded-md px-1 py-0.5 text-center ${config.bgColor} ${config.textColor}`}
                >
                    {config.text}
                </span>
            </td>
            {/* 변경 내용 */}
            <td className="text-[0.92rem]">{children}</td>
        </tr>
    );
};

export const Separator = () => {
    return <tr className="h-0"><td colSpan={2}></td></tr>;
};

/**
 * @param {Object} props
 * @param {string} props.version - 버전 번호
 * @param {string} props.date - 릴리즈 날짜
 * @param {React.ReactNode} props.children - 해당 버전의 변경 사항들
 */

interface ReleaseNoteEntryProps {
    version: string;
    date: string;
    children: React.ReactNode;
}

export const ReleaseNoteEntry = ({ version, date, children }: ReleaseNoteEntryProps) => {
    return (
        <div className="release-entry mb-8">
            <h3 className="font-mono text-xl font-semibold mt-6 mb-1">{version}</h3>
            <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-3">{date}</p>
            <div className='border rounded-lg border-solid border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-800/50 px-3 py-1'>
                <table className="w-full border-separate border-spacing-y-2.5">
                    <tbody>{children}</tbody>
                </table>
            </div>
        </div>
    );
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - 릴리즈 노트 컨텐츠
 */

interface ReleaseNotesContainerProps {
    children: React.ReactNode;
}

export const ReleaseNotesContainer = ({ children }: ReleaseNotesContainerProps) => {
    return <div className="release-notes-container">{children}</div>;
}