import { createStore } from 'redux'
import ProductRed from './product/reducer'
import UserRed from './Users/reducer'


// const productStore = createStore(ProductRed)


const uSerStore = createStore(UserRed)


// export default productStore 
export default uSerStore