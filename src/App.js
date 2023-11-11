// Import the styles
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './utils/appStore';
import {Provider} from "react-redux"


function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <ToastContainer/>
        <Header/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
