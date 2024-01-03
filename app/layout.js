import './globals.scss'
import Loading_screen from '../components/Loading_screen'


export const metadata = {
  title: 'SHEC',
  description: 'Devloped by GetMax',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head />
      <body className={' font-popins'}>
        {children}
        </body>
    </html>
  )
}
