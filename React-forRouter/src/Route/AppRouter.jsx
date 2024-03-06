import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About';
import Contact from '../Components/Contact';
import Nuer from '../Components/nuer';
import NavigationBar from '../Components/NavigationBar';

function AppRouter() {
    return (
        <BrowserRouter>
         <NavigationBar />
         <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={ <About />} />
            <Route path='/contact'  element={ <Contact />} />
            <Route path='/nuer' element={ <Nuer />} />
            <Route path='*' element={ <h1>Page Not Found</h1> } />
         </Routes>
        </BrowserRouter>

    )
}

export default AppRouter;