import Navbar from './Components/navbar/navbar'
import Home from './pages/home'
import Overlay from './Components/overlay/overlay'
import UserInformation from './Components/user/userinformation'

import './assets/css/app.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Overlay />
        <UserInformation />
        <Home />
      </div>
    </>
  )
}

export default App