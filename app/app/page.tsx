'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        // Store user account credentials locally for authentication
        const userAccount = { email, password };
        localStorage.setItem('registered_user', JSON.stringify(userAccount));

        setRegistered(true);
        setTimeout(() => {
            window.location.href = '/login';
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
                <h1 className="text-2xl font-bold mb-2 text-white">Create Account</h1>
                <p className="text-slate-400 text-sm mb-6">
                    Set up your credentials to access the telemetry dashboard.
                </p>

                {registered && (
                    <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-lg">
                        Account created successfully! Redirecting to login...
                    </div>
                )}

                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-blue-500 transition"
                            placeholder="user@agentops.io"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Create Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-blue-500 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition text-sm mt-2 cursor-pointer"
                    >
                        Create Account
                    </button>
                </form>

                <p className="mt-6 text-center text-xs text-slate-400">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-400 hover:underline">
                        Log in here
                    </Link>
                </p>
            </div>
        </div>
    );
}
