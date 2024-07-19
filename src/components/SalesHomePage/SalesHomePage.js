import { useEffect, useState } from 'react';
import './SalesHomePage.css';
import { useAPI } from '../../context/context'
import Product from './Product';

const Timer = ({duration}) =>{
    const [time,setTime] = useState(duration)
    useEffect(()=>{
        setTimeout(()=>{
            setTime(time- 1000);
        },1000)
    },[time])

    const FormattedTime = (milliseconds)=>{
        let total_seconds = parseInt(Math.floor(milliseconds/1000))
        let total_minutes = parseInt(Math.floor(total_seconds/60))
        let total_hours = parseInt(Math.floor(total_minutes/60))
        let days = parseInt(Math.floor(total_hours/24))
        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60)
        let hours = parseInt(total_hours % 24)
        return `${days}: ${hours}: ${minutes}: ${seconds}`
    }
    return <div>{FormattedTime(time)}</div>
}

const SalesHomePage = ()=>{
        const {products} = useAPI()
        return(
            <div className="sales-home-page">
                    <div className="sales-home-page-header">
                        <div className="sales-home-page-header-top">
                            <div className="box"></div>
                            <div className="sales-home-page-header-top-content">
                                Today's
                            </div>
                        </div>
                        <div className="sales-home-page-header-bottom">
                                <div className='sales-home-page-header-bottom-title'>Flash Sales</div>
                                <div className='sales-home-page-header-bottom-countdown'>
                                    <div className='sales-home-page-header-bottom-countdown-top'>
                                        <div className='time-format'>Days</div>
                                        <div className='time-format'>Hours </div>
                                        <div className='time-format'>Minutes</div>
                                        <div className='time-format'>Seconds</div>
                                    </div>
                                    <div className='sales-home-page-header-bottom-countdown-bottom'>
                                            <Timer duration={345600000}/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='sales-home-page-products-gallery'>

                                                {
                                (Object.keys(products).length > 0) ? (products.map((product)=> {
                                    if(product.id < 5){
                                        return(
                                            <Product name={product.title} image={product.image} price={product.price}/>  
                                        )
                                    }
                                })): null
                            }
                    </div>
            </div>
        )
}
export default SalesHomePage