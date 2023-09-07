/* Links dos componentes */
import AppList from "./components/AppList/AppList";
import Header from "./components/Header/Header";
/* Links do bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  return (
    <>
      <Header/>
      <AppList/>
    </>
  )
}

export default App;
