import ProjectSection from "./components/ProjectsSection/ProjectSection";
import Title from "./components/Title/Title";

const App = () =>{

    return(
      <div className="app">
        <div className="content_wrapper">
            <Title />
            <ProjectSection />
        </div>
      </div>
    )

} 

export default App;