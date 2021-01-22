import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="cards">
        <Articles />
      </div>
      <Footer />
    </div>
  );
}

export default App;
