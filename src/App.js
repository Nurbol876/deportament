import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import './i18n'
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Pop from "./pages/POP/POP";
import Pou from "./pages/POU/POU";
import Opdx from "./pages/OPDX/OPDX";
import Oad from "./pages/OAD/OAD";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/AdminOfDep/Admin";
import Fifth from "./components/Fifth/Fifth";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {CustomContext} from "./Context";

const App = () => {

    const {user} = useContext(CustomContext)

    return (
        <>
            <Navbar/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                {user && user.name === "Admin" && user.email === "nurbolsagynbekov876@gmail.com" && user.password === "KGdeportament" && (
                    <Route path='/admin' element={<Admin />} />
                )}
                <Route path='/map' element={<Fifth/>}/>
                <Route path='/world' element={<Pop/>}/>
                <Route path='/makers' element={<Pou/>}/>
                <Route path='/organic' element={<Opdx/>}/>
                <Route path='/depor' element={<Oad/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reg' element={<Register/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;