import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouteContainer from "./routes/index.routes";

function App(): ReactElement {
  return (
    <div className="App">
      <ToastContainer limit={1} />
      <RouteContainer />
    </div>
  );
}

export default App;
