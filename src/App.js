import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./components/Home"
import "./app.css";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />

       <Home/>
      </div>
    </>
  );
}

export default App;
