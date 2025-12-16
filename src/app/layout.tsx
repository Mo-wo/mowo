import { BackToTop, Navbar } from 'components/lv3/Client/Clients';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from 'components/lv1/ThemeSwitcher';
import { Footer } from 'components/lv1/Footer';

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
          <BackToTop />
          <ThemeSwitcher />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
