
import * as Ecommerce from "./Ecommerce"
import * as Maintance from "./Maintance"


const getData = ({type, isFullData, plan })=>{

    let small, middle, corp, planData

    switch(type){
        case "ecommerce":
            if(isFullData){
                small = Ecommerce.smallFull
                middle = Ecommerce.middleFull
                corp = Ecommerce.corporateFull
            }else{  
                small = Ecommerce.small
                middle = Ecommerce.middle
                corp = Ecommerce.corp
                
            }
            break
            case "maintance":
            if(isFullData){
                small = Maintance.smallFull
                middle = Maintance.middleFull
                corp = Maintance.corporateFull
            }else{  
                small = Maintance.small
                middle = Maintance.middle
                corp = Maintance.corp
                
            }
            break
    }
    switch(plan){
        case "smallBusiness":
            planData = small
            break
            case "middleBusiness":
  
            planData = middle
            break
            case "corporate":
                planData = corp
                break
                default:
                    planData = null
                    break
    }
    if(planData){
        return planData
    }
    return {small, middle, corp}
}

export default getData

// middleBusiness.includes.concat(SMALL.business)