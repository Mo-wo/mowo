import { BackToTop, Navbar } from 'components/Client/Clients';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from 'context/ThemeContext';

export const metadata = {
  title: "Mowo",
  description: "Mowo's Portfolio",
}

export default function RootLayout({ children }: {children: React.ReactNode}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
