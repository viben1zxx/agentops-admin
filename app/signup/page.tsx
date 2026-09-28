'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Initialize the router
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signing up with:', { name, email, password });

        // Redirect the user to the login page
        router.push('/login');
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Create an Account</h1>
                <p style={styles.subtitle}>Join AgentOps to get started</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="name" style={styles.label}>Full Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jane Doe"
                            style={styles.input}
                        />
                    </div>

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
                        Sign Up
                    </button>
                </form>

                <p style={styles.footerText}>
                    Already have an account?{' '}
                    <Link href="/login" style={styles.link}>
                        Log in here
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
        backgroundColor: '#10b981',
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
