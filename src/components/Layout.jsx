import { Outlet, useLocation } from 'react-router-dom'
import Cursor from './Cursor'
import Footer from './Footer'
import Loader from './Loader'
import Navbar from './Navbar'
import Ripple from './Ripple'
import ScrollProgress from './ScrollProgress'
import ScrollTop from './ScrollTop'

export default function Layout() {
  const location = useLocation()

  return (
    <>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <Ripple />
      <Navbar />

      <main id="main-content" className="main-content">
        <div className="page-transition" key={location.pathname}>
          <Outlet />
        </div>
      </main>

      <Footer />
      <ScrollTop />
    </>
  )
}