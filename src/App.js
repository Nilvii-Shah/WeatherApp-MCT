import Main from "./components/Main";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.isTheme.isTrue);

  return (
    <div className={theme ? "light" : "dark"} id="app">
      <Main />
    </div>
  );
}

export default App;
