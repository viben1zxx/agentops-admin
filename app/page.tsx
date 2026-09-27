import { PageHeader } from '@/components/control-center/page-header';
import { PipelineTopology } from '@/components/control-center/pipeline-topology';
import { TokenTelemetry } from '@/components/control-center/token-telemetry';
import { ExecutionFeed } from '@/components/control-center/execution-feed';

/**
 * AgentOps Control Center Server Page Layout.
 * Strictly layout composition — delegates interactivity to small client primitives.
 */
export default function ControlCenterPage() {
  return (
    <main className="min-h-screen bg-[var(--color-abyss)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader />

        {/* Desktop xl+: 2-column layout. Left = Telemetry + Topology (2/3). Right = Feed (1/3) */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <TokenTelemetry />
            <PipelineTopology />
          </div>

          <div className="xl:col-span-1">
            <ExecutionFeed />
          </div>
        </div>
      </div>
    </main>
  );
}
