import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-primary text-white h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
