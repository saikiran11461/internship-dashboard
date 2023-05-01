
import { useContext } from "react";
import "./App.css"
import DashBoard from './Components/DashBoard';
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  let theme = useContext(ThemeContext);
  console.log(theme);
  let classApp = `App ${theme.isDark ? 'dark' :"" }`;
  let handleTheme =()=>{
    theme.toggleTheme()
  }
  return (
    <div className={classApp}>
      <button onClick={handleTheme}>{theme.isDark?"Light":"Dark"}</button>
       <DashBoard/>
    </div>
  );
}

export default App;
