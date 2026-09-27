import { cn } from '@/lib/utils';
import { AgentRunStatus, DagNodeStatus } from '@/types/control-center';

export type BadgeVariant = AgentRunStatus | DagNodeStatus | 'ok' | 'warn' | 'crit' | 'neon';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant: BadgeVariant;
    label?: string;
}

/**
 * Reusable status badge primitive mapping operational states to design token color styles.
 */
export function Badge({ variant, label, className, children, ...props }: BadgeProps) {
    const variantStyles: Record<BadgeVariant, string> = {
        RUNNING: 'bg-[var(--color-neon)]/10 text-[var(--color-neon)] border-[var(--color-neon)]/30',
        neon: 'bg-[var(--color-neon)]/10 text-[var(--color-neon)] border-[var(--color-neon)]/30',
        COMPLETED: 'bg-[var(--color-ok)]/10 text-[var(--color-ok)] border-[var(--color-ok)]/30',
        ok: 'bg-[var(--color-ok)]/10 text-[var(--color-ok)] border-[var(--color-ok)]/30',
        active: 'bg-[var(--color-ok)]/10 text-[var(--color-ok)] border-[var(--color-ok)]/30',
        FAILED: 'bg-[var(--color-crit)]/10 text-[var(--color-crit)] border-[var(--color-crit)]/30',
        crit: 'bg-[var(--color-crit)]/10 text-[var(--color-crit)] border-[var(--color-crit)]/30',
        warn: 'bg-[var(--color-warn)]/10 text-[var(--color-warn)] border-[var(--color-warn)]/30',
        idle: 'bg-[var(--color-ink-faint)]/20 text-[var(--color-ink-dim)] border-[var(--color-edge)]',
    };

    const displayText = label || children || variant;

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide uppercase',
                variantStyles[variant] || variantStyles.idle,
                className
            )}
            {...props}
        >
            {displayText}
        </span>
    );
}
