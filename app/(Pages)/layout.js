import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
export default function Layout({ children }) {
  return (<>
    <main className=" h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  </>)
}

