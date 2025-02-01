import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Standing from './Standings/Standing'


function App() {
  

  return (
   <>
   <BrowserRouter>
   
   

   <Routes>
 
   <Route path='/' element={  <Home/>}></Route>
<Route path='/standings' element={<Standing/>}></Route>


   </Routes>

   </BrowserRouter>
   </>
  )
}

export default App
