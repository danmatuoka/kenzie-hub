import "./App.css";
import RoutesMain from "./routes";
import toast, { Toaster } from "react-hot-toast";
import Global from "./styles/global";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontFamily: "Inter", fontSize: 16 } }}
      />
      <Global />
      <RoutesMain />
    </div>
  );
}

export default App;
