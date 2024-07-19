function Product(props){
    return(
        <div className="product">
            <div className="product-image-box">
                <img src={props.image} alt=""/>
            </div>
            <div className="product-details">
                <div className="product-name">{props.name}</div>
                <div className="product-price">{props.price}</div>
                <div className="poduct-rating">{props.rating}</div>
            </div>
        </div>
    )
}
export default Product