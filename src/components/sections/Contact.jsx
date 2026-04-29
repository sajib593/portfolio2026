import Container from "../layout/Container";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <Container>

        <div className="max-w-xl">

          <h2 className="heading-lg mb-4">Contact Me</h2>

          <p className="text-base mb-6">
            I’m currently open to new opportunities. Feel free to reach out if you have any questions or just want to connect.
          </p>

          <div className="flex flex-col gap-3">

            <a
              href="mailto:sajib.hoossain11@gmail.com"
              className="text-blue-600 font-medium"
            >
              sajib.hoossain11@gmail.com
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              className="text-gray-700"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="text-gray-700"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Contact;