'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Welcome Back</h1>
                <p style={styles.subtitle}>Sign in to access your AgentOps dashboard</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email Address</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Sign In
                    </button>
                </form>

                <p style={styles.footerText}>
                    Don't have an account?{' '}
                    <Link href="/signup" style={styles.link}>
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        fontFamily: 'sans-serif',
    },
    card: {
        width: '100%',
        maxWidth: '400px',
        padding: '2.5rem',
        borderRadius: '12px',
        backgroundColor: '#1e293b',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    },
    title: {
        fontSize: '1.75rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: '0.875rem',
        color: '#94a3b8',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#cbd5e1',
    },
    input: {
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        border: '1px solid #334155',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        fontSize: '1rem',
        outline: 'none',
    },
    button: {
        marginTop: '0.5rem',
        padding: '0.75rem',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        fontWeight: '600',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    footerText: {
        marginTop: '1.5rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#94a3b8',
    },
    link: {
        color: '#38bdf8',
        textDecoration: 'none',
        fontWeight: '500',
    },
};
