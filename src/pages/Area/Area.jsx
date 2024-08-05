import React, {useState} from 'react';
import Talas from "./years/2022/2022talas";
import Osh from "./years/2022/2022osh";
import Chuy from "./years/2022/2022chuy";
import Naryn from "./years/2022/2022naryn";
import IssykKul from "./years/2022/2022issykkul";
import DjalalAbad from "./years/2022/2022jalalabad";
import Batken from "./years/2022/2022batken";
import Years from "./years/2023";

const Area = ({oblast}) => {
    const[change, setChange] = useState(2023)

    const onChange = ( e ) => {
        setChange(parseInt(e.target.value, 10))
    }

    return (
        <section className="opdx">
            <div className="container">
                <select onChange={onChange} className="year__select">
                    <option value="2023" className="year__option">2023</option>
                    <option value="2022" className="year__option">2022</option>
                </select>
                {
                    change === 2022 ? (
                        oblast === "Chuy" ? (<Chuy />) :
                            oblast === "Talas" ? (<Talas />) :
                                oblast === "Naryn" ? (<Naryn />) :
                                    oblast === "Osh" ? (<Osh />) :
                                        oblast === "IssykKul" ? (<IssykKul />) :
                                            oblast === "DjalalAbad" ? (<DjalalAbad />) :
                                                oblast === "Batken" ? (<Batken />) : null
                    ) : <Years year={change} place={oblast}/>
                }
            </div>
        </section>
    );
};

export default Area;