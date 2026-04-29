import Container from "../layout/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="section">
        
      <Container>
        <div className="flex flex-col gap-6 max-w-2xl">

          <h1 className="heading-xl">
            Hi, I'm Sajib Hossain
          </h1>

          <h2 className="heading-lg text-blue-600">
            Frontend / MERN Stack Developer
          </h2>

          <p className="text-base">
            I build responsive, scalable web applications using modern technologies like React, Node.js, and MongoDB.
          </p>

          <div className="flex gap-4 mt-4">
            <Button>View Projects</Button>
            <Button>Contact Me</Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;