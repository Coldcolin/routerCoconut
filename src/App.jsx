import Hero1 from './components/Hero1.jsx'
import Hero2 from './components/Hero2.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

import { useState,useEffect } from 'react'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

export const App = () => {
  const [Page , setPage] = useState({ name: "Home", category: null })

    useEffect(() => {
    window.scrollTo(0, 0)
  }, [Page])

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <>
          <Hero1/> 
          <Hero2 setPage={setPage} />
          <Footer/>
        </>
    },
    {
      path: '/login',
      element: <Login/> 
    }
    ,
    {
      path: '/signup',
      element: <Signup />
    },

    {
      path: '/shop-now',
      element: <Navigation/>
    }

    
  ])

  return (

    <>
    {/* <div>
      {Page.name === "Home" && (
        <>
          <Hero1/> 
          <Hero2 setPage={setPage} />
          <Footer/>
        </>
      )}

      {Page.name === "Shop" && (
        <>
          <Navigation category={Page.category}/>
          
        </>
      )}
    </div> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App
