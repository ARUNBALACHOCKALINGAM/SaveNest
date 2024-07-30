import { BrowserRouter } from "react-router-dom";
import './App.css'
import Sidebar from './components/layout/Sidebar/Sidebar'
import Router from './pages/router';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="w-full lg:w-9/12 lg:ml-80  lg:mt-10">
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
