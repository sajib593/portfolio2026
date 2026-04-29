import { projects } from "../../data/ProjectsData";
import Card from "../ui/Card";


const Projects = () => {
    return (
        <section>
      <h2>My Projects</h2>

      <div>
        {projects.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </div>
    </section>
    );
};

export default Projects;