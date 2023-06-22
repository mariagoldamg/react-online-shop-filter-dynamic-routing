import Clothes from "./Clothes";
import Buttons from "./Buttons";
import { useState } from "react";
import { data } from "./data";

function Shop(){
    const [outfits, setOutfits] = useState(data);
   

const chosenClothes=(searchTerm)=>{
   const newClothes = data.filter(element=> element.searchTerm === searchTerm);
   setOutfits(newClothes)
}

    return (
        <div>
            <div >
      <div className='cont'>
        <h2 className='back'> Free Standard Shipping</h2>
      </div>
      <Buttons filteredClothes = {chosenClothes}/>
    <Clothes shop = {outfits}/>
    </div>
        </div>
    )
}

export default Shop;