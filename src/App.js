import './App.css';
import {Header,Footer} from './components'
import {AllRoutes} from './routes/AllRoutes'

function App() {
  return (
    <div className="App"> 
    <Header></Header>
      <AllRoutes />
      <Footer></Footer>
    </div>
  );
}

export default App;
