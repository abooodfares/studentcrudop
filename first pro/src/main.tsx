import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.tsx'
import Editstudent from './editstudent.tsx';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit/:id",
    element: <Editstudent />,
  },
  {
    path: "*",
    element: <App />, // fallback for unknown routes
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
