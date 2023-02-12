import { Routes, Route, Navigate, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { NavBar } from "./NavBar"


export const MainApp = () => {
  return (
    <>
    {/* <h1>Main App</h1> */}
    <NavBar />
    <hr />


    <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="about" element={ <AboutPage /> }/>
        <Route path="login" element={ <LoginPage /> }/>

        {/* <Routes path="/*" element= {<LoginPage/>} /> */}
        <Route path="/*" element={ <Navigate to= "/about"/> }/>

    </Routes>
    </>
  )
}