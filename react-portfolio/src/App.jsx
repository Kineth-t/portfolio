import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import NavBar from './components/NavBar'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'contact',
          element: <ContactPage />,
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
