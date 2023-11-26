import React from 'react';
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
import News from "./pages/News/News";
import AddNews from "./pages/addNews/addNews";

const App = () => {

    return (
        <>
            <Navbar/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/world' element={<Pop/>}/>
                <Route path='/makers' element={<Pou/>}/>
                <Route path='/organic' element={<Opdx/>}/>
                <Route path='/depor' element={<Oad/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;