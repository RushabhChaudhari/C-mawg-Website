import React from 'react'
import {Route} from 'react-router-dom'
import Navbar from './Navbars/Navbar'
import Home from './Navbars/Home'
import About from './Navbars/About'
import Contact from './Navbars/Contact'
import Login from './Navbars/Login'
import Signup from './Navbars/Signup'
import Mainsection from './Main_section/Mainsection'
import Webdev from './Main_section/Webdev'
import Machinelearning from './Main_section/Machinelearning'
import Compatitiveprogramming from './Main_section/Compatitiveprogramming'
import Androiddev from './Main_section/Androiddev'
import Graphicdesign from './Main_section/Graphicdesign'

const App = () => {
  return (
    <div style={{position:'relative'}}>

      <Navbar />
      <br />
      <Route exact path="/">
      <Home />
      <Mainsection></Mainsection>
      </Route>
      <Route exact path="/about">
      <About />
      </Route>
      <Route exact path="/contact">
      <Contact />
      </Route>
      <Route exact path="/login">
      <Login />
      </Route>
      <Route exact path="/signup">
      <Signup />
      </Route>
      
      <Route exact path="/webdev">
        <Webdev></Webdev>
      </Route>
      <Route exact path="/ml">
        <Machinelearning></Machinelearning>
      </Route>
      <Route exact path="/compi">
      <Compatitiveprogramming></Compatitiveprogramming>
      </Route>
      <Route exact path="/appde">
      <Androiddev></Androiddev>
      </Route>
      <Route exact path="/graphic">
      <Graphicdesign></Graphicdesign>
      </Route>
      
    </div>
  )
}

export default App
