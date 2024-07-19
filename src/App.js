import Header from "./components/header/Header";
import HomePage from "./components/HomePage";
import { APIContextProvider } from "./context/context";
function App() {
  return (
    <div>
      <APIContextProvider>
        <Header/>
        <HomePage/>
      </APIContextProvider>
    </div>
  );
}

export default App;
