import './globals.css'

import './modal/modal.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next DAPP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
