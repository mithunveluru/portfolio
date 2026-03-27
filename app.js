const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Now />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
      <Terminal />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
