import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Quiz from '../quiz'
import Last from '../last'
import '../../index.css'
const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/last" component={Last} />
    </main>
  </div>
)

export default App
