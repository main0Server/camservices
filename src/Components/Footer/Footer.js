function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; {fullYear}
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
