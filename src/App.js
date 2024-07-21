import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage";
import { APIContextProvider } from "./context/context";
import ProductView from "./components/ProductView/ProductView";
function App() {
  return (
    <div>
      <APIContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="product/:id" element={<ProductView/>}/>
          </Routes>
        </BrowserRouter>
      </APIContextProvider>
    </div>
  );
}

export default App;
