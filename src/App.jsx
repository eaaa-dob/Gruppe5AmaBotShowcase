import { Outlet } from "react-router";
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>AMAbot Showcase</nav>
      </header>

      
      <main>
        <Outlet />
      </main>

      <footer>
        
        <p></p>
      </footer>
    </>
  )
}

export default App