import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    </>
  );
}

export default App;
