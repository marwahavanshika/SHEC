import './globals.scss'
import Navbar from '../components/Navbar'


export const metadata = {
  title: 'blogs',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head />
      <body className={' font-popins'}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
