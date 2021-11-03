import React from 'react' 
import FormProducto from './components/FormProducto' 
import ListaProductos from './components/ListaProductos';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/ModificarProducto/" component={FormProducto} />
          <Route path="/" component={ListaProductos} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

