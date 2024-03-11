import logo from './logo.svg';
import './App.css';
import { NextUIProvider} from "@nextui-org/react"

import {Button} from "@nextui-org/button";
import {NavBar, Landing} from "./components"
import {ScrollShadow} from "@nextui-org/react";


function App() {
  return (
    <NextUIProvider>
              
      <main className="dark text-foreground bg-background fill-screen">
        <NavBar></NavBar>
        
        <Landing/>
    
      </main>

    </NextUIProvider>
  );
}

export default App;
