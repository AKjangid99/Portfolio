import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Hero } from '../Component/Hero'
import Card from '../Component/Card'

const Home = () => {
  return (
    <>
      <div>

        <header> 
        <NavBar/>
        </header>


        {/* <h1> I am Ankur </h1> */}
        
        <Hero/>


        <h1> Summery </h1>
        {/* <div>
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
        </div> */}

        <div>
          <br />

          <h1>SKILL</h1>
          <h2>Front End :- Html, css, Javascript, React.js, Vite, Node.js, Tailwind CSS, </h2>
          <h2>Back End:-  Express.js, Golang, Nodejs, TypeScript, PostgreSQL, MongoDB </h2>
          <h2>C++, C#, Unity</h2>
        </div>

        <br />

          <h1 className='bg-black'>card here </h1>
        <Card 
        liveLink="https://your-live-link.com"
        githubLink="https://github.com/yourusername/weather-app"
        image="https://via.placeholder.com/300x200"
        title="Portfolio Website"
        tech={['React', 'TailwindCSS', 'Vite']}
        description="A responsive personal portfolio showcasing projects and skills using modern frontend technologies."
        />

        <div>


          <h1>Projects</h1>
       

         

         

   

       

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
  )
}

export default Home