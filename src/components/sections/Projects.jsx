import Container from "../layout/Container";
import Card from "../ui/Card";
import { projects } from "../../data/ProjectsData";

const Projects = () => {
  return (
    <section className="section">
      <Container>

        <h2 className="heading-lg mb-10">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Projects;