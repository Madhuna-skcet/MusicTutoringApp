import React from "react";
import SignUp from './Components/Home/SignUp'
import Login from './Components/Home/Login'
import Home from './Components/Home/Home';
import Contacts from './Components/Details.js/Contacts';
import About from './Components/Home/About';
import Piano from './Components/Instruments/Piano';
import PianoInf from './Components/InstruInfo/PianoInf';
import Guitar from './Components/Instruments/Guitar';
import Violin from './Components/Instruments/Violin';
import ViolinInfo from './Components/InstruInfo/ViolinInfo';
import Guitinfo from './Components/InstruInfo/Guitinfo';
import Flute from './Components/Instruments/Flute';
import Fluteinfo from './Components/InstruInfo/Fluteinfo';
import Veena from './Components/Instruments/Veena';
import VeInfo from './Components/InstruInfo/VeInfo';
import Drums from './Components/Instruments/Drums';
import DrInfo from './Components/InstruInfo/DrInfo';
import Ac from './Components/InstruInfo/Ac';
import Service from './Components/Service';
import Marimba from './Components/Instruments/Marimba';
import Accordian from './Components/Instruments/Accordian';
import Minfo from './Components/InstruInfo/Minfo';
import Exp from './Components/Infomation.js/Expe';
import Stu from './Components/Infomation.js/Student';
import Time from './Components/Infomation.js/Time';
import Ag from './Components/Infomation.js/Ag';
import {BrowserRouter,Routes,Route}from "react-router-dom";
const Navigate=()=>{
    return(
        <div className="b">
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>}/>
               <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/piano" element={<Piano/>}/>
                <Route path="/pianoInfo" element={<PianoInf/>}/>
                <Route path="/guitar" element={<Guitar/>}/>
                <Route path="/violin" element={<Violin/>}/>
                <Route path="/vinfo" element={<ViolinInfo/>}/>
                <Route path="/Ginfo" element={<Guitinfo/>}/>
                <Route path="/flute" element={<Flute/>}/>
                <Route path="/finfo" element={<Fluteinfo/>}/>
                <Route path="/veena" element={<Veena/>}/>
                <Route path="/veinfo" element={<VeInfo/>}/>
                <Route path="/drums" element={<Drums/>}/>
                <Route path="/drInfo" element={<DrInfo/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/marimba" element={<Marimba/>}/>
                <Route path="/minfo" element={<Minfo/>}/>
                <Route path="/acinfo" element={<Ac/>}/>
                <Route path="/ac" element={<Accordian/>}/>
                <Route path="/exp" element={<Exp/>}/>
                <Route path="/exp1" element={<Stu/>}/>
                
                <Route path="/time" element={<Time/>}/>
                <Route path="/ag" element={<Ag/>}/>
                
            </Routes>
        </BrowserRouter>
        </div>
    );
}
export default Navigate;