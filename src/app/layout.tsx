import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Asad Farooq - Research Scientist & Full-Stack Developer",
  description: "Published researcher specializing in AI/ML, medical imaging, and natural language processing. We provide comprehensive academic, technical, and content services.",
  keywords: ["AI", "Machine Learning", "Research", "Full-Stack Development", "Academic Writing", "Data Science", "Medical Imaging", "NLP"],
  authors: [{ name: "Asad Farooq" }],
  creator: "Asad Farooq",
  publisher: "Asad Farooq",
  icons: {
    icon: [
      { url: '/images/ProfilePicture.webp', sizes: 'any' },
      { url: '/images/ProfilePicture.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/images/ProfilePicture.webp', sizes: '16x16', type: 'image/webp' },
    ],
    apple: [
      { url: '/images/ProfilePicture.webp', sizes: '180x180', type: 'image/webp' },
    ],
    shortcut: [{ url: '/images/ProfilePicture.webp' }],
  },
  openGraph: {
    title: "Asad Farooq - Research Scientist & Full-Stack Developer",
    description: "Published researcher specializing in AI/ML, medical imaging, and natural language processing. We provide comprehensive academic, technical, and content services.",
    type: "website",
    locale: "en_US",
    siteName: "Asad Farooq Portfolio",
    images: [
      {
        url: '/images/ProfilePicture.webp',
        width: 400,
        height: 400,
        alt: 'Asad Farooq Profile',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asad Farooq - Research Scientist & Full-Stack Developer",
    description: "Published researcher specializing in AI/ML, medical imaging, and natural language processing.",
    images: ['/images/ProfilePicture.webp'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/ProfilePicture.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/ProfilePicture.webp" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
