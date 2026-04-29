import Container from "./Container";

const Navbar = ({ dark, setDark }) => {
  return (
    <nav className="border-b sticky top-0 bg-white dark:bg-gray-900 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">

          <h1 className="font-bold text-lg text-gray-900 dark:text-white">Sajib</h1>

          <div className="flex gap-6 text-sm text-gray-900 dark:text-white">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <button
              onClick={() => setDark(!dark)}
              className="ml-4 px-3 py-1 border rounded"
            >
              {dark ? "Light" : "Dark"}
            </button>

          </div>

        </div>
      </Container>
    </nav>
  );
};

export default Navbar;