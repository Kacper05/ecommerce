import { useState } from "react"
import { Link } from "react-router-dom"

function Product(props){
    const [display,setDisplay] = useState('none')
    const ShowButton = ()=>{
        setDisplay('contents')
    }
    const HideButton =()=>{
        setDisplay('none')
    }
    return(
        <Link to={`product/${props.id}`} style={{textDecoration: 'none', color:'black'}}>
        <div className="product" onMouseOver={ShowButton} onMouseOut={HideButton}>
            <div className="product-image-box">
                <img src={props.image} alt=""/>
                <div className="product-image-box-button" style={{display:display, width:'100%'}}>
                    <button style={{width:'100%'}}>Add To Cart</button>
                </div>
            </div>
            <div className="product-details">
                <div className="product-name">{props.name}</div>
                <div className="product-price">${props.price}</div>
                <div className="poduct-rating">{props.rating}</div>
            </div>
        </div>
        </Link>
    )
}
export default Product