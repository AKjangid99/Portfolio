import { NavBar } from "./Component/NavBar";

function App() {


  return (
    <>
      <div>

        <header> 
        <NavBar/>
        </header>

        <h1> I am Ankur </h1>
        <br />



        <h1> Summery </h1>


        
        <div>
          <p>
            Full Stack Developer skilled in building scalable web applications
            across the front-end and back-end using technologies like React.js,
            Node.js, MongoDB, PostgreSQL. Proficient in designing RESTful APIs, managing
            databases. Passionate about writing clean, maintainable code,
            optimizing performance, and delivering seamless user experiences.
            Strong problem-solving skills with a proven ability to collaborate
            across cross-functional teams to deliver high-quality, full-stack
            solutions on time.
          </p>
        </div>

        <div>
          <br />

          <h1>SKILL</h1>

          <h2>Front End :- Html, css, Javascript, React.js, Vite, Node.js, Tailwind CSS, </h2>
          <h2>Back End:-  Express.js, Golang, Nodejs, TypeScript, PostgreSQL, MongoDB </h2>
          <h2>C++, C#, Unity</h2>
        </div>

        <br />

        <div>
          <h1>Projects</h1>
          <div>
            <img src=" " alt="img"></img>
            <h1>Job Portal</h1>
            <h2>technologies </h2>
            <p>React, Tailwind, Express.js, MongoDB</p>
          </div>

          <div>
            <img src=" " alt="img"></img>
            <h1>Shootiing Game</h1>
            <h2>technologies </h2>
            <p>C#, Unity 3D, Grahpics</p>
          </div>

          <div>
            <img src=" " alt="img"></img>
            <h1>Flappy Bird</h1>
            <h2>technologies </h2>
            <p>C#, Unity,</p>
          </div>

          <div>
            <img src=" " alt="img"></img>
            <h1>Wetaher App</h1>
            <h2>technologies </h2>
            <p>React, Tailwind</p>
          </div>

          <div>
            <img src=" " alt="img"></img>
            <h1> UNO Game</h1>
            <h2>technologies </h2>
            <p>HTML, Css, Javascript</p>
          </div>

          <br />

          <div>
            <h1>Experience</h1>
            <div>
              <h2> Trilasoft | Software Engineer Intern </h2>
              <h2> Working Projects </h2>
              <h2>RedSky Mobility | Angular, Ionic, TypeScript</h2>
              <h2>key Features </h2>
              <p>
                {" "}
                Enhanced the RedSky Mobility platform with new UI components
                .Implemented Ionic for cross-platform mobile compatibility.
              </p>

              <h2> Shift Krado | ReactJS, TypeScript</h2>
              <h2>key Features</h2>
              <p>
                Updated and optimized UI components for Shift Krado, improving
                user engagement and ensuring consistency across the web and
                mobile interfaces. Utilized React and modern frontend frameworks
                to enhance responsiveness and streamline user interactions
              </p>
            </div>

            <div>
              <h2> INFOTACT SOLUTION| Full Stack Intern </h2>
              <h2> Working Projects </h2>
              <h2> Job Portel</h2>
              <p>
                Developing and maintaining full-stack applications using
                MongoDB, Express.js, React.js, and Node.js. Building interactive
                UI components with React.js and Redux. Designing and
                implementing RESTful APIs and third-party integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
