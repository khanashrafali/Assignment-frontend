import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import { useState } from "react";
import ViewForm from "./components/ViewForm";

function App() {
  const [currentRoute, setCurrentRoute] = useState("/");
  const [singleData, setSingleData] = useState(null);
  const handleSingleData = (data) => {
    setSingleData(data);
  };
  const renderComponent = () => {
    switch (currentRoute) {
      case "/":
        return <Home setCurrentRoute={setCurrentRoute} handleSingleData={handleSingleData} />;
      case "/create-form":
        return <CreateForm setCurrentRoute={setCurrentRoute} />;
      case "/view-form":
        return <ViewForm setCurrentRoute={setCurrentRoute} singleData={singleData} />;
      default:
        return <Home />;
    }
  };
  return renderComponent();
}

export default App;
