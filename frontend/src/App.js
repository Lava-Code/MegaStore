import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import CartView from './views/CartView';
import ProductView from './views/ProductView';
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/Sidedrawer';
import {useState} from 'react'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <Sidedrawer show={sideToggle} click ={()=>setSideToggle(false)}/>
      <Backdrop show={sideToggle} click ={()=>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path='/' component={HomeView}/>
          <Route exact path='/cart' component={CartView}/>
          <Route exact path='/product/:id' component={ProductView}/>
        </Switch>

      </main>
    </Router>
  );
}

export default App;
