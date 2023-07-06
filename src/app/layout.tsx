import { BackToTop, Navbar } from 'components/Client/Clients';
import './globals.css';

export const metadata = {
  title: "Mowo",
  description: "Mowo's Portfolio",
}

export default function RootLayout({ children, }: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
