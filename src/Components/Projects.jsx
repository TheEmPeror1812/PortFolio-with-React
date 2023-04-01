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
          <h1>Todo List App</h1>
          <p>
            This website offers users a very good user experience with creating
            their own ToDo - Lists. It also offers users with various other
            options like deleting and updating the list created by them. It uses
            the concept of local storage for saving the ToDo- list. This helps
            the user to revive his/her data in case the system shuts down or the
            user mistakenly closes the website.
          </p>
          <a href="https://todo-list-sooty-chi-75.vercel.app/">
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
