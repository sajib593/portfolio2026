import Container from "../layout/Container";

const About = () => {
  return (
    <section className="section">
      <Container>
        <div className="max-w-3xl">

          <h2 className="heading-lg mb-6">
            About Me
          </h2>

          <p className="text-base mb-4">
            I am a passionate Frontend Developer with hands-on experience building modern and responsive web applications.
          </p>

          <p className="text-base">
            I specialize in React, Tailwind CSS, and full-stack development using Node.js and MongoDB. I enjoy solving real-world problems and continuously improving my skills.
          </p>

        </div>
      </Container>
    </section>
  );
};

export default About;