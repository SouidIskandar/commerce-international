import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SimpleLayout } from './components/SimpleLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Commerce International',
  description: 'Your trusted partner in international commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SimpleLayout>
          {children}
        </SimpleLayout>
      </body>
    </html>
  );
}