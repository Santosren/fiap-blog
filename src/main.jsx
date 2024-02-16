import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} /> {/* Defina a rota para a página de posts */}
      </Switch>
    </Router>
  </React.StrictMode>,
);
