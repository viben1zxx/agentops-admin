'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Cpu, Database, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface Node {
    id: string;
    name: string;
    type: 'orchestrator' | 'agent' | 'vectordb' | 'guardrail';
    status: 'active' | 'idle' | 'warning';
    latency: string;
}

const nodes: Node[] = [
    { id: 'n1', name: 'Orchestrator Core', type: 'orchestrator', status: 'active', latency: '12ms' },
    { id: 'n2', name: 'Guardrail Llama-Guard', type: 'guardrail', status: 'active', latency: '45ms' },
    { id: 'n3', name: 'SecurityConstellation Agent', type: 'agent', status: 'active', latency: '180ms' },
    { id: 'n4', name: 'Pinecone Vector Memory', type: 'vectordb', status: 'idle', latency: '28ms' },
];

export function AgentTopology() {
    const [selectedNode, setSelectedNode] = useState<Node>(nodes[0]);

    return (
        <Card className="flex flex-col gap-6 relative overflow-hidden bg-slate-950/80 backdrop-blur-xl border-slate-800">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <h3 className="text-lg font-semibold text-slate-100">Live Agent Pipeline Topology</h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Real-time DAG node graph & inter-agent payload routing.</p>
                </div>
                <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                    DAG Active
                </span>
            </div>

            {/* Visual Topology Canvas */}
            <div className="relative min-h-[220px] rounded-lg bg-slate-900/50 border border-slate-800/80 p-6 flex items-center justify-between gap-4 overflow-x-auto">
                {/* Animated Connecting Line SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-700/50" strokeWidth="2">
                    <line x1="20%" y1="50%" x2="45%" y2="50%" strokeDasharray="4 4" className="animate-pulse" />
                    <line x1="45%" y1="50%" x2="70%" y2="50%" strokeDasharray="4 4" className="animate-pulse" />
                    <line x1="70%" y1="50%" x2="90%" y2="50%" strokeDasharray="4 4" />
                </svg>

                {nodes.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    return (
                        <button
                            key={node.id}
                            onClick={() => setSelectedNode(node)}
                            className={`relative z-10 flex flex-col items-center gap-2 p-3.5 rounded-xl transition-all duration-300 ${isSelected
                                    ? 'bg-slate-800 border-cyan-500/80 shadow-[0_0_20px_rgba(34,211,238,0.25)] scale-105'
                                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                                } border`}
                        >
                            <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                                {node.type === 'orchestrator' && <Cpu className="w-5 h-5" />}
                                {node.type === 'guardrail' && <ShieldCheck className="w-5 h-5" />}
                                {node.type === 'agent' && <Zap className="w-5 h-5" />}
                                {node.type === 'vectordb' && <Database className="w-5 h-5" />}
                            </div>
                            <span className="text-xs font-medium text-slate-200">{node.name}</span>
                            <span className="text-[10px] text-slate-500 font-mono">{node.latency}</span>
                        </button>
                    );
                })}
            </div>

            {/* Node Detail Inspector Strip */}
            <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2">
                    <span className="text-slate-400">Selected Node:</span>
                    <span className="font-semibold text-cyan-400">{selectedNode.name}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                    <span>Latency: <strong className="text-slate-200">{selectedNode.latency}</strong></span>
                    <span>Status: <strong className="text-emerald-400 uppercase">{selectedNode.status}</strong></span>
                </div>
            </div>
        </Card>
    );
}
