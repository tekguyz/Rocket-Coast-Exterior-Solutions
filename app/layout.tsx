import type {Metadata} from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://rocket-coast.vercel.app/'),
  title: 'Rocket Coast Exterior Solutions | Premium Space Coast Pressure Washing',
  description: 'Professional residential and commercial soft washing, driveway cleaning, hard water stain removal, and paver sealing across Brevard County. Request a free estimate today.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.png' }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Rocket Coast Exterior Solutions',
    description: 'Professional residential and commercial soft washing, driveway cleaning, hard water stain removal, and paver sealing across Brevard County.',
    type: 'website',
    locale: 'en_US',
    url: 'https://rocketcoastexteriorsolutions.com',
    siteName: 'Rocket Coast Exterior Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket Coast Exterior Solutions',
    description: 'Professional residential and commercial soft washing across Brevard County.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <body className="bg-cloud text-ink font-sans antialiased selection:bg-ignition-red selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
