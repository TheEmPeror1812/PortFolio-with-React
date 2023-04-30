import React from "react";

function Projects() {
  return (
    <div className="project" id="pro">
      <div className="heading">Projects</div>

      <div className="main-block">
        <div className="box pr-1">
          <h1>StackOverflow Clone</h1>
          <p>
            This is a clone website of official Stackoverflow website made with
            help of Mongoose, Express, React.Js, Node.Js (MERN Stack) project.
            You can signup and login in this website. You can also post your
            answer vote for a particular question and can do much more like
            official Stackoverflow website.
          </p>
          <a href="https://stackoverflow-clone-rohan.netlify.app/">
            Click Here To Visit App !!
          </a>
        </div>
        <div className="box pr-2">
          <h1>Social Media App</h1>
          <p>
            This is a single page social media application made with the help of
            MongoDB, Express, React.Js, Node.Js (MERN Stack) project. You can
            signup here, post your photographs, follow other users, edit your
            profile and also upload your own avatar like all other social media
            applications available in the market.
          </p>
          <a href="https://social-media-community-40th.onrender.com/">
            Click Here To Visit App !!
          </a>
        </div>
        <div className="box pr-3">
          <h1>Crypto Info</h1>
          <p>
            This is a single page application made with the help of react.js. It
            show the exchange rate of different Crypto currency and there
            performance in last 24 hours to 1 year, supply of the different
            crypto currency and many more related to particular crypto currency.
            It also tells about trending crypto currency at that time. It also
            has a toggler switch which gives you and option to switch dark/light
            mode
          </p>
          <a href="https://crypto-app-umber-psi.vercel.app/">
            Click Here To Visit App !!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
