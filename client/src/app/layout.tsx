import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';

const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-sans',
});
export const metadata: Metadata = {
    title: 'Learnly',
    description:
        'Build a modern, enterprise-grade LMS with Next.js, Node.js, and AWS. Features include scalable architecture, seamless authentication with Better Auth, and hosting on Vercel. Ideal for creating modular, feature-rich learning platforms.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${dmSans.className}`}>{children}</body>
        </html>
    );
}
