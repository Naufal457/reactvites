import './App.css';
import Home from "./pages/Home/Home";



import {BrowserRouter, Routes, Route} from "react-router-dom"
import Notes from './pages/Notes/Notes';

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/notes" element={<Notes/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App

