function Footer() {
  return (
    <>
      <footer className="mt-auto bg-sky-950 h-20">
        <div className="h-full w-full flex  items-center justify-center gap-3 text-white text-sm p-5">
          <p className="text-green-100/80">
            © {new Date().getFullYear()} Todo App · Stay focused
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
