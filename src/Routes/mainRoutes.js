import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './../Pages/Home'
import About from './../Pages/About'
import Profile from './../Pages/Profile'
import ErrorPage from './../Pages/404'

export default function MainRoutes(){
    return <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile"> 
                <Route path=":id" element={<Profile/>}/>
            </Route>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    
}