import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="app">
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
)
}

export default Layout