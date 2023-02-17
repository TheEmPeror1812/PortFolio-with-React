import React, { useState } from 'react';
import img1 from "../Assets/Profile_second2.png";

const data1 = [{
    inspan: "Frontend Development",
    inanchor: "HTML, CSS, JavaScript, Bootstrap, React Basics, React Advance"
},
{
    inspan: "Backend Development",
    inanchor: "Node.js & Express.js"
},
{
    inspan: "Databases Knowledge",
    inanchor: "MySQL & MongoDB"
},

]

const data2 = [{
    inspan: "2015",
    inanchor: "10th from Rajindra Public School (C.B.S.E Board)"
},
{
    inspan: "2017",
    inanchor: "12th from GRM Senior Secondary Public School (C.B.S.E Board)"
},
{
    inspan: "2017-2021",
    inanchor: "B.Tech from Delhi Technological University"
}
]

const data3 = [{
    inspan: "Certified By IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/7U275YR9XNAR",
    inanchor: "Introduction to Web Development with HTML, CSS, JavaScript."
},
{
    inspan: "Certified By Meta",
    link: "https://www.coursera.org/account/accomplishments/verify/ST6X7F4PNPKN",
    inanchor: "React Basics By Meta"
},
{
    inspan: "Certified By Meta",
    link: "https://www.coursera.org/account/accomplishments/verify/Z3MVHNE73Q24",
    inanchor: "Advance React By Meta"
},
{
    inspan: "Certified By The Hong Kong University of Science and Technology",
    link: "https://www.coursera.org/account/accomplishments/verify/3CGCFTBX5V5D",
    inanchor: "Server-side Development with Node.js, Express.js and MongoDB"
},
{
    inspan: "Certified By Meta",
    link: "https://www.coursera.org/account/accomplishments/verify/D2J2Q4PBFLXN",
    inanchor: "Principles of UX/UI Design"
}
]


function List1({ inspan, inanchor }) {
    return (<li><span>{inspan}</span><br></br>{inanchor}</li>)
}

function List2({ inspan, link, inanchor }) {
    return (<li><span>{inspan}</span><br></br><a href={link}>{inanchor}</a></li>)
}

function AboutMe() {

    const [count, setCount] = useState(0);
    const [edu_class, setedu_class] = useState("tab-links");
    const [Skill_class, setSkill_class] = useState("tab-links active-link");
    const [certi_class, setcerti_class] = useState("tab-links");

    function edu_clickHandler() {
        setCount(1)
        setedu_class("tab-links active-link")
        setSkill_class("tab-links")
        setcerti_class("tab-links")
    }

    function skill_clickHandler() {
        setCount(0)
        setedu_class("tab-links")
        setSkill_class("tab-links active-link")
        setcerti_class("tab-links")
    }

    function certi_clickHandler() {
        setCount(2)
        setedu_class("tab-links")
        setSkill_class("tab-links")
        setcerti_class("tab-links active-link")
    }

    return (
        <div className="About-Me" id="about">
            <div className="profile-img-2">
                <img src={img1} alt=""></img>
            </div>

            <div className="About_me_text">
                <h2>About Me</h2>
                <p>Graduate from Delhi Technological University formerly (DCE). I am a passionate Full Stack Developer and UX UI Designer with
                    skills like HTML, CSS, JavaScript, Bootstrap, Figma, React.js. I also possess skills like Node.js, Express.js among other
                    skills in backend development. I also have knowledge of different databases like MongoDB and MySQL and I
                    have worked on several projects related to Frontend and Backend Development. I have knowledge of Data
                    Structures and Algorithms, C++ and Object Oriented Programming. Excellent Client relationship building
                    and interpersonal skills. Seeking a position where I can utilize my coding skills, abilities, personal
                    skills while being resourceful, innovative and flexible that offers professional growth along with the
                    organization and to have a growth oriented and challenging career. In addition to this also enhance my
                    experience through continuous learning and teamwork.</p>

                <div className="tab-titles">
                    <p className={Skill_class} onClick={skill_clickHandler}>Skills</p>
                    <p className={edu_class} onClick={edu_clickHandler}>Education</p>
                    <p className={certi_class} onClick={certi_clickHandler}>Certifications</p>
                </div>

                <div className="tab-contents active-tab" id="skills">
                    <ul>
                        {
                            count === 0 ?
                                data1.map((i, index) => (
                                    <List1 inspan={i.inspan} inanchor={i.inanchor} key={index} />
                                )) :
                                count === 1 ?
                                    data2.map((i, index) => (
                                        <List1 inspan={i.inspan} inanchor={i.inanchor} key={index} />
                                    )) :
                                    data3.map((i, index) => (
                                        <List2 inspan={i.inspan} link={i.link} inanchor={i.inanchor} key={index} />
                                    ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default AboutMe;