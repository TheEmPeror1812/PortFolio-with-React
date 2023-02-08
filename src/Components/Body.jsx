import React from "react";
import img2 from "../Assets/Finally.png"
import img3 from "../Assets/logo2.png"
import  Typewriter from "typewriter-effect";

function Body() {
    return (
        <section className="intro" id="home">
            <div id="fir">
                <div className="coding_img">
                    <img src={img3} alt=""></img>
                </div>

                <div className="intro-text">
                    <p id="hi">Hi, I am <a href="https://www.linkedin.com/in/rohan-kundara-74149817a/">Rohan Kundara</a></p>
                    <p id="full">
                        <Typewriter options={{
                            strings: ["A FullStack Developer", "UX / UI Designer"],
                            autoStart: true,
                            cursor : "",
                            loop: true,
                            wrapperClassName: "typeitempara"
                        }}
                        />
                    </p>
                </div>
            </div>

            <div className="profile-img">
                <img src={img2} alt="Rohan's"></img>
            </div>
        </section>
    )
}

export default Body;