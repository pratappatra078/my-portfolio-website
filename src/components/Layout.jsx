import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'
import ScrollProgress from './ScrollProgress'
import ScrollTop from './ScrollTop'

export default function Layout() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}