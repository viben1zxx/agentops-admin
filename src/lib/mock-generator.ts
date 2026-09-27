// Seeded pseudo-random generator (LCG) eliminating runtime Math.random()
export function createDeterministicGenerator(seed: number = 42) {
    let state = seed;
    return function next(): number {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };
}

export function generateSeededTelemetry(step: number) {
    const rng = createDeterministicGenerator(step + 100);
    return {
        tokensPerSecond: Math.floor(rng() * 1200) + 300,
        latencyMs: Math.floor(rng() * 150) + 20,
        activeNodes: Math.floor(rng() * 12) + 1,
    };
}
