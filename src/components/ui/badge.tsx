import { cn } from '@/lib/utils';
import { AgentStatus } from '@/types';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    status: AgentStatus | 'healthy' | 'degraded' | 'down';
}

export function Badge({ status, className, ...props }: BadgeProps) {
    const styles: Record<string, string> = {
        running: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        healthy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        failed: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
        down: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
        degraded: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        paused: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider',
                styles[status] || styles.paused,
                className
            )}
            {...props}
        >
            {status}
        </span>
    );
}
