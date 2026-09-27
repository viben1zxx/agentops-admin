import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5 text-[var(--foreground)] shadow-sm transition-all',
                className
            )}
            {...props}
        />
    );
}
