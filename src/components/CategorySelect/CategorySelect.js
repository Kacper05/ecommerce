import './CategorySelect.css'
import camera from './category_camera.png'
import cellphone from './category_cellphone.png'
import computer from './category_computer.png'
import gamepad from './category_gamepad.png'
import headphone from './category_headphone.png'
import smartwatch from './category_smartwatch.png'
const CategoryProduct = (props)=>{
    return(
    <div className="category-select-gallery-item">
        <div className='category-select-gallery-item-content'>
            <div className='category-select-gallery-item-image'><img src={props.image} alt=""/></div>
            <div className='category-select-gallery-item-name'>{props.name}</div>
        </div>
    </div> 
    )
}
const CategorySelect = ()=>{
    return(
        <div className="category-select">
            <div className="category-select-title-box">
                <div className='category-select-title-box-top'>
                        <div className='box'></div>
                        <div className='category-select-title-box-title-second'>Categories</div>
                </div>
                <div className='category-select-title-box-title'>Browse By Category</div>
            </div>
            <div className="category-select-title-gallery">
                <CategoryProduct image={cellphone} name={'Phone'}/>
                <CategoryProduct image={computer} name={'Computers'}/>
                <CategoryProduct image={smartwatch} name={'SmartWatch'}/>
                <CategoryProduct image={camera} name={'Camera'}/>
                <CategoryProduct image={headphone} name={'HeadPhones'}/>
                <CategoryProduct image={gamepad} name={'GamePad'}/>
            </div>
        </div>
    )
}
export default CategorySelect;