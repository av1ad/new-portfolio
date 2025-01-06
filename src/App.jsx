import Navbar from './Components/navbar/navbar'
import Home from './pages/home'
import Overlay from './Components/overlay/overlay'

import './assets/css/app.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Overlay />
        <Home />
      </div>
    </>
  )
}

export default App