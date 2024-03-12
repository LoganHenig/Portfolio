
import './App.css';
import { NextUIProvider} from "@nextui-org/react"
import {Landing, Animation} from "./components"
import {BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Animation/>} />
        <Route path="/portfolio" element={<Landing/>} />
      </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
