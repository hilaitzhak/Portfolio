import AppNavbar from "./components/NavBar/navbar";
import AppFooter from "./components/Footer/footer";
import AppContent from "./components/content/content";
import './App.scss';

function App() {
  return (
    <div className="app-warpper">
      <AppNavbar/>
        <AppContent/>
      <AppFooter/>
    </div>
  );
}

export default App;
