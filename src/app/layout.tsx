import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'OyeYar | Something is taking shape',
  description: 'Exploring ideas, building meaningful products and creating what comes next.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
