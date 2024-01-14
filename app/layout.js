import './globals.scss'


export const metadata = {
  title: 'SHEC',
  description: 'Devloped by GetMax',
  icons:{
    icon:'/images/favicon.png',
  },
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
      </head>
      <body className={' font-popins'}>
        {children}
        </body>
    </html>
  )
}
