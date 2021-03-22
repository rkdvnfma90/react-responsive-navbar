import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Design from './components/pages/Design'
import ContactUs from './components/pages/ContactUs'
import Signup from './components/pages/Signup'
import Marketing from './components/pages/Marketing'
import Consulting from './components/pages/Consulting'
import Development from './components/pages/Development'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/design' component={Design} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/development' component={Development} />
      </Switch>
    </Router>
  )
}

export default App
