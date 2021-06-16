import React from 'react';

// styles here:
// src\stylesheets\pages\_guiding.sass

export default function Guiding(){

    const guides = [
        {
            name: "Dan Young",
            certs: "",
            exp: "",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Josh Janes",
            certs: "",
            exp: "",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Travis O'Neil (aka T2)",
            certs: "AMGA SPI, WFR",
            exp: "8+ years, 3 guiding",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        },
        {
            name: "Adam Happensack",
            certs: "",
            exp: "",
            bio1: "",
            bio2: "",
            bio3: "",
            pic: "",
            ig: "",
            active: true
        }
    ];

    // these use short circuit evaluation inline
    // like {i.bio2 !== "" && <p>i.bio2</p>}
    // they work because if both evaluate to true, the second thing is returned
    // if false, it is ignored
    const guideList = guides.map((i) => {
        if(i.active){
            return (
                <div key={i.name} className="twoflex-container">
                    <div>
                        <img className="splash-img" src='https://via.placeholder.com/500x400' alt={i.name} />
                    </div>
                    <div>
                        <h3>{i.name} {i.ig !== "" && <a href={i.ig}>IG</a>}</h3>
                        {i.certs !== "" && <p>{i.certs}</p>}
                        {i.exp !== "" && <p>{i.exp}</p>}
                        <p>{i.bio1}</p>
                        {i.bio2 !== "" && <p>i.bio2</p>}
                        {i.bio3 !== "" && <p>i.bio3</p>}
                    </div>
                </div>
            );
        }
    });

    return (
        <div>
            {guideList}
        </div>
    );
}