export function ArchivedBadge({ className = '' }: { className?: string }) {
    return (
        <span
            className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-solid border-neutral-300 bg-neutral-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-none tracking-wide text-neutral-500 ${className}`}
        >
            Archived
        </span>
    )
}
