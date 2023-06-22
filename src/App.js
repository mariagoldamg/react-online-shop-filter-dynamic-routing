//import { data } from './data';
//import { useState } from 'react';
import './App.css';
//import Clothes from './Clothes';
import AboutUs from './AboutUs';
import Shop from './Shop';
import Contact from './ContactUs';
import AboutProduct from './AboutProduct';
//import Buttons from './Buttons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
//const [outfits, setOutfits] = useState(data);

//const chosenClothes=(searchTerm)=>{
 //  const newClothes = data.filter(element=> element.searchTerm === searchTerm);
  // setOutfits(newClothes)
//}

  return (<div>
    <Router>
<nav>
<Link className='link' to = '/'>Shop</Link>
  <Link  className='link' to = '/aboutUs'>About Us</Link>
  <Link className='link' to = '/contact'>Contact</Link>

</nav>

<Routes>
  <Route path='/aboutUs' element={<AboutUs/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/' element={<Shop/>}/>
  <Route path='/about/:title' element={<AboutProduct/>}/>

</Routes>
</Router>
   {/* <div >
    //  <div className='cont'>
        <h2 className='back'> Free Standard Shipping</h2>
      </div>
      <Buttons filteredClothes = {chosenClothes}/>
    <Clothes shop = {outfits}/>
    </div>
  */}
    </div>  );
}

export default App;
