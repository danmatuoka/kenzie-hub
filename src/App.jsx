import "./App.css";
import RoutesMain from "./routes";
import toast, { Toaster } from "react-hot-toast";
import Global from "./styles/global";
import UserProvider from "./contexts/UserContext";
import TechProvider from "./contexts/TechContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <TechProvider>
          <Toaster
            position="top-center"
            toastOptions={{ style: { fontFamily: "Inter", fontSize: 16 } }}
          />
          <Global />
          <RoutesMain />
        </TechProvider>
      </UserProvider>
    </div>
  );
}

export default App;
