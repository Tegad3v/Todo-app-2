import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Landing from "./routes/home/Landing";
import About from "./routes/about/About";
import Task from "./routes/task/Task";
function App() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <NavBar />

        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path={"/task"} element={<Task />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
