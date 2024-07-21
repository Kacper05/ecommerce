import CategorySelect from "./CategorySelect/CategorySelect"
import Hero from "./hero/Hero"
import SalesHomePage from "./SalesHomePage/SalesHomePage"

const HomePage = ()=>{
   return(
      <>
        <Hero/>
        <SalesHomePage/>
        <CategorySelect/>
      </>
   ) 
}
export default HomePage