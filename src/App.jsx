import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/sign-in.component'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={< Navigation />}>
          <Route index element={< Home />} />
          <Route path='/shop' element='shop' />
          <Route path='/sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
