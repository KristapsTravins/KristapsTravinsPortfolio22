import Card from "./components/ProjectCard/Card";
import Section from "./components/ProjectsSection/Section";

import Title from "./components/Title/Title";

const App = () =>{

    return(
      <div className="app">
        <div className="content_wrapper">
            <Title />
            <Section name={"projects"} >
              <Card />
              <Card />
            </Section> 
              
      
            <Section name={"contacts"} />
        </div>
      </div>
    )

} 

export default App;



   {/* <ProjectCard name={"studio-sn.eu"} />
        <ProjectCard name={"antaview.com"} /> */}