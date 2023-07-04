import "./App.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container content">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
