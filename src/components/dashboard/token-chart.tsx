'use client';

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { mockTokenMetrics } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';

export function TokenChart() {
return (
<Card className="flex flex-col gap-4">
    <div>
        <h3 className="text-lg font-semibold">Token Telemetry</h3>
        <p className="text-sm text-slate-400">Real-time input vs. output token consumption across model runs.</p>
    </div>
    <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockTokenMetrics} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="time" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#111827' , borderColor: '#1f2937' , borderRadius: '8px' }} />
                <Area type="monotone" dataKey="inputTokens" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.2}
                    name="Input Tokens" />
                <Area type="monotone" dataKey="outputTokens" stroke="#34d399" fill="#34d399" fillOpacity={0.2}
                    name="Output Tokens" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
</Card>
);
}