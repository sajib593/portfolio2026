import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="border-b sticky top-0 bg-white z-50">
      <Container>
        <div className="flex justify-between items-center py-4">

          <h1 className="font-bold text-lg">Sajib</h1>

          <div className="flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </Container>
    </nav>
  );
};

export default Navbar;