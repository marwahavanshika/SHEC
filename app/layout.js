import './globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
  title: 'SHEC',
  description: 'Devloped by GetMax - Keshav Arora',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head />
      <body className={' font-popins'}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
