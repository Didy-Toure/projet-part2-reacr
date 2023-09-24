import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Meals from "./Components/Meals/Meals";
import Home from "./Components/Home/home";
import CategoryRecipes from "./Components/CategoryRecipes/CategoryRecipes"; // Importez CategoryRecipes
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FavorisList from "./FavorisList"
import Button from 'react-bootstrap/Button';


const queryClient = new QueryClient();

function App () {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Routes> {/* Declaration des routes selon la grille de correction */}
        <Route path="/categories/:categoryName" element={<CategoryRecipes />} />
        <Route path='/meals/:id' element={<Meals />} />
        <Route path='/' element={<Home />} />
        <Route path="/favoris" element={<FavorisList />} />
        
      </Routes>
    </QueryClientProvider>
  )
}

export default App;




/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
