import { Outlet } from "react-router";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <section className="max-w-[100rem] mx-auto">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App;
