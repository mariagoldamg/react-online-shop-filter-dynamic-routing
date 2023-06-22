import { Link } from "react-router-dom";
function Clothes({shop}){

    return(
        <div className="products">
{shop.map((item=>{
    const{ id, name, searchTerm, price, image} = item;
    return(
        <div key={id} className="product-card">
            <Link to={`/about/${item.title}`}>
           <img src={image} width="300px" height="450px" alt='pic'/>
           </Link>
           <div className="product-info">
<h3>{name}</h3>
<h4>$ {price}</h4>
<h4> {searchTerm} </h4>
           </div>
        </div>
    )
}))}
        </div>
    )
}

export default Clothes;