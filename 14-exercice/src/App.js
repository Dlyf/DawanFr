import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./router/Routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <Routes/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
