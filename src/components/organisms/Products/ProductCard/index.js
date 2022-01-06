import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./style.scss"

//Components
import ProductTag from "../../../atoms/productTag"
//import ProductImage from "../../../../images/product01_01.jpg"

class ProductCard extends React.Component {
    hoverThis() {
        console.log("JavaScript function call OK!!!")
    }

    return() {
        <div>
            HELLO PRODUCT CARD HERE
            <button itemText="Click" onClick={() => this.hoverThis()} />
        </div>
    }
}

export default ProductCard;