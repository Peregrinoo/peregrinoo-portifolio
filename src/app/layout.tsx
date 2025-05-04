import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import {Navbar} from "@/modules/Landing-page/components/navbar";
import {TranslationProvider} from "@/hook/useTranslation";

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Portfólio - Gabriel Chaves',
    description: 'Meu lindo portfólio :)',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt">
        <head>
            <ColorSchemeScript />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TranslationProvider>
            <MantineProvider>
                <Navbar/>
                {children}
            </MantineProvider>
        </TranslationProvider>
        </body>
        </html>
    );
}
