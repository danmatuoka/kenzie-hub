import "./App.css";
import RoutesMain from "./routes";
import toast, { Toaster } from "react-hot-toast";
import Global from "./styles/global";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Toaster
          position="top-center"
          toastOptions={{ style: { fontFamily: "Inter", fontSize: 16 } }}
        />
        <Global />
        <RoutesMain />
      </UserProvider>
    </div>
  );
}

export default App;
