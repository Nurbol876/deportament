import React, {useState} from 'react';
import Year2022 from "./years/2022";
import Year2023 from "./years/2023";


const Opdx = () => {

    const[change, setChange] = useState(2023)

    const onChange = ( e ) => {
        setChange(e.target.value)
    }

    return (
        <section className="opdx">
            <select onChange={onChange} className="year__select">
                <option value="2023" className="year__option">2023</option>
                <option value="2022" className="year__option">2022</option>
            </select>
            {
                change == 2022 ? (<Year2022 />) : (<Year2023 year={change}/>)
            }
        </section>
    );
};

export default Opdx;