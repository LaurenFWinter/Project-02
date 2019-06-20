import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'
import Station from './Station'
import Home from './Home'
import Navbar from './Navbar'

class App extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <section className="section">
            <div className="container">
              <Navbar />

              <Switch>
                <Route path="/station/:code" component={Station} />
                <Route path="/" component={Home} />

              </Switch>

            </div>
          </section>
        </main>
      </Router>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
