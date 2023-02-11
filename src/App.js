import "./App.css";
import Groups from "./components/Groups";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import Websites from "./components/Websites";

function App() {
  return (
    <section className="flex flex-col justify-center items-center">
        <Navbar />
      <div className="w-screen xl:w-[1440px]">
        <Websites />
        <Pages />
        <Groups />
      </div>
    </section>
  );
}

export default App;
