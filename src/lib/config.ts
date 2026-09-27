export const siteConfig = {
    appName: process.env.NEXT_PUBLIC_APP_NAME || 'AgentOps Admin',
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1',
    isDev: process.env.NODE_ENV === 'development',
};
