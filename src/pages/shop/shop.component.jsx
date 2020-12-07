import React from "react"

import SHOP_DATA from "./shop.data"
import CollectioPreview from "../../component/preview-collection/collection-preview.component"

class ShopPage extends React.Component {
    constructor(){
        super()
        
        this.state={
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state
        console.log(collections)
        return (
            <div className="shop">
                {collections.map(({id, ...otherCollectionProps}) =>(
                    <CollectioPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>)
    }
}

export default ShopPage