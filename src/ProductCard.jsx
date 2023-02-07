 import {Rate } from "antd"

 const ProductCard = ({
    image, rating, title, description, price}) => {
return(
<div>
<h1>Card</h1>
<div classname="card">

      <img src={image} alt="" style={{width: '100px'}}/>
      <div classname="card-body">
        <h3>${price}</h3>
        <div>
            <Rate value={rating}/>
        </div>
        <h5 classname="card-title">{title}</h5>
        <p classname="card-text">{description}</p>
      </div>
    </div>
</div>


)

    }

    export default ProductCard