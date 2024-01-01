import React from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Navigation from "./Navigation"
function App(){
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/contact" Component={Contact}/>
            </Routes>
        </Router>
    )
}
function Home(){
    return <h1>Home</h1>
}
function About() {
    return <h1>About</h1>
}
    
function Contact() {
    return <h1>Contact</h1>
}
export default App