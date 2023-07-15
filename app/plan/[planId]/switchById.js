import {smallBusiness, middleBusiness, corporate} from "../../../data/Plans"

const switchById = (planId)=>{
let oldPrice, newPrice, includes, products,text, title

    switch(planId){
        case "smallBusiness": {
          oldPrice = smallBusiness.oldPrice
          newPrice = smallBusiness.newPrice
          includes = smallBusiness.includes
          products = smallBusiness.products
          text = "Малък Бизнес"
          title = "малки бизнеси"
          break
        }
        case "middleBusiness": {
          oldPrice = middleBusiness.oldPrice
          newPrice = middleBusiness.newPrice
          includes = middleBusiness.includes
          products = middleBusiness.products
          text = "Среден Бизнес"
          title = "средни бизнеси"
    
          break
        }
        case "corporate": {
          oldPrice = corporate.oldPrice
          newPrice = corporate.newPrice
          includes = corporate.includes
          products = corporate.products 
          text = "Голям Бизнес"
          title = "големи бизнеси"
    
          break
        }
        default: {
          price = 0
          includes = []
          break
        }
      }
      return {oldPrice, newPrice, includes, products, text, title}
}
export default switchById