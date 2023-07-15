import React from 'react';
import Ecommerce from "../../../components/pages/Ecommerce"
import Website from "../../../components/pages/Website"
import Maintance from "../../../components/pages/Maintance"
import Optimization from "../../../components/pages/Optimization"



const Page = ({params}) => {
    const {type} = params
    return (
        <div>
                {type == "ecommerce" && <Ecommerce/>}
                {type == "website" && <Website/>}
                {type == "maintance" && <Maintance/>}
                {type == "optimization" && <Optimization/>}


        </div>
    );
}

export default Page;
