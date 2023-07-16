import * as Ecommerce from "./Ecommerce";
import * as Maintance from "./Maintance";
import * as Website from "./Website";

const getData = ({ type, isFullData, plan }) => {
  let small, middle, corp, planData, services;

  switch (type) {
    case "ecommerce":
      if (isFullData) {
        small = Ecommerce.smallFull;
        middle = Ecommerce.middleFull;
        corp = Ecommerce.corporateFull;
      } else {
        small = Ecommerce.small;
        middle = Ecommerce.middle;
        corp = Ecommerce.corp;
      }
      services = Ecommerce.services;
      break;
    case "maintance":
      if (isFullData) {
        small = Maintance.smallFull;
        middle = Maintance.middleFull;
        corp = Maintance.corporateFull;
      } else {
        small = Maintance.small;
        middle = Maintance.middle;
        corp = Maintance.corp;
      }
      services = Maintance.services;

      break;
    case "website":
      if (isFullData) {
        small = Website.smallFull;
        middle = Website.middleFull;
        corp = Website.corporateFull;
      } else {
        small = Website.small;
        middle = Website.middle;
        corp = Website.corp;
      }
      services = Website.services;

      break;
  }
  switch (plan) {
    case "smallBusiness":
      planData = small;
      break;
    case "middleBusiness":
      planData = middle;
      break;
    case "corporate":
      planData = corp;
      break;
    default:
      planData = null;
      break;
  }
  if (planData) {
    planData.services = services;
    return planData;
  }
  return { small, middle, corp, services };
};

export default getData;

// middleBusiness.includes.concat(SMALL.business)
