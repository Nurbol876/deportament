import React, {useState} from 'react';
import Year2022 from "./Year2022";
import {useTranslation} from "react-i18next";
import Year from "./Year";

const Pop = () => {

    const[change, setChange] = useState(2023)

    const onChange = ( e ) => {
        setChange(e.target.value)
    }


    return (
        <section className="pop">
            <select onChange={onChange} className="year__select">
                <option value="2023" className="year__option">2023</option>
                <option value="2022" className="year__option">2022</option>
            </select>
            <div className="container">

                {
                    change == 2022 ? (<Year2022 />) : (<Year year={change}/>)
                }
            </div>
        </section>
);
};

export default Pop;