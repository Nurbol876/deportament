import React from "react";
import First from "../../components/First/First";
import Second from "../../components/Second/Second";
import Third from "../../components/Third/Third";
import Files from "../../components/Files/Files";
import Director from "../../components/Director/Director";
import Fifth from "../../components/Fifth/Fifth";

const Home = () => {
    return (
        <main>
            <First/>
            <Second/>
            <Third/>
            <Files/>
            <Director/>
            <Fifth/>
        </main>
    );
};

export default Home;