import { useParams } from 'react-router-dom';
import { useAPI } from '../../context/context'
import { useState } from 'react';
const ProductView = ()=>{
    const {id: productId} = useParams();
    const { products } = useAPI();
    const open_product = products.find((product) => product.id == productId)
    const [value,setValue] = useState(0);
    const IncreaseQuantity = ()=>{
        setValue(value+1)
    }
    const DecreaseQuantity =()=>{
        if(value > 0){
            setValue(value-1)
        }
    }
    const DisplaySizeSelect = ()=>{
        return(
            <div className='size-selector' style={{display:"flex", gap:"1em"}}>
                <div className='size'>XS</div>
                <div className='size'>S</div>
                <div className='size'>M</div>
                <div className='size'>L</div>
                <div className='size'>XL</div>
            </div>
        )
    }
    return(
        (open_product)?<div className='product-view' style={{display:"flex"}}>
            <div className='product-view-gallery'>
                <div className='product-view-gallery-select'>

                </div>
                <div className='product-view-gallery-main-image'>
                        <img src={open_product.image} alt=''/>
            </div>
            <div className='product-view-content'>
                <div className='product-view-content-desc'>
                    <div className='product-name'>{open_product.title}</div>
                    <div className='product-rating'>{open_product.rating.rate}</div>
                    <div className='product-price'>${open_product.price}</div>
                    <div className='product-description'>{open_product.description}</div>
                </div>
                < div className='product-view-controls'>
                        {
                            (open_product.category == "men's clothing") ? (
                                <DisplaySizeSelect/>
                            ):null
                        }
                    <div className='product-view-controls-purchase' style={{display:'flex'}}>
                        <div className='quantity-selector' style={{display:'flex'}}>
                            <div className='descrese-button'><button onClick={DecreaseQuantity}>-</button></div>
                            <div className='value'>{value}</div>
                            <div className='increase-button'><button onClick={IncreaseQuantity}>+</button></div>
                        </div>
                        <div className='purchase-button'><button>Buy Now</button></div>
                        <div className='add-to-wishlist'></div>
                    </div>
                </div>
            </div>
            </div>            
        </div>:<>Product Not Found</>
    )
}
export default ProductView