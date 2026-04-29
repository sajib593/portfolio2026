import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t mt-20">
      <Container>
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sajib Hossain. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;