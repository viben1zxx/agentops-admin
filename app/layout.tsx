import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'AgentOps Admin — AI & Security Control Panel',
  description: 'Enterprise AI Agent monitoring and security telemetry dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
