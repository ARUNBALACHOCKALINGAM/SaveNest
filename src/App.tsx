import { BrowserRouter } from "react-router-dom";
import './App.css'
import Sidebar from './components/layout/Sidebar/Sidebar'
import Router from './pages/router';
import store from "./data/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar />
        <div className="w-full lg:w-9/12 lg:ml-80 lg:mt-8">
          <Router />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
