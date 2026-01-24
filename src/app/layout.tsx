import { BackToTop, Navbar } from 'components/lv3/Client/Clients';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from 'components/lv1/ThemeSwitcher';
import { Footer } from 'components/lv1/Footer';
import { Analytics } from "@vercel/analytics/next";
import { SanityLive } from "sanity/live";

export const metadata = {
  title: "Mowo",
  description: "Cross-platform Frontend Developer",
}

export default function RootLayout({ children }: {children: React.ReactNode}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme='dark'>
          <Navbar />
          {children}
          <Analytics />
          <BackToTop />
          <ThemeSwitcher />
          <Footer />
          <SanityLive />
        </ThemeProvider>
      </body>
    </html>
  )
}
