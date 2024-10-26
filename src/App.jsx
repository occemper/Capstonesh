import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={< Navigation />}>
          <Route index element={< Home />} />
          <Route path='/shop' element='shop' />
        </Route>
      </Routes>
    </div>
  )
}

export default App
