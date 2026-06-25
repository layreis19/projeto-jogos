import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TabButton from './components/TabButton'
import Homepage from './Pages/HomePage'
import ErrorPage from './Pages/ErrorPage'
import RootLayout from './components/RootLayout'
import PlayGamesPage from './Pages/PlayGamesPage'
import JogosPage from './Pages/JogosPage'
import DetalhesPage from './Pages/DetalhesPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/',          element: <Homepage /> },
      { path: '/jogos',     element: <JogosPage /> },
      { path: '/jogo/:id',  element: <DetalhesPage /> },
      { path: '/playgames', element: <PlayGamesPage /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App