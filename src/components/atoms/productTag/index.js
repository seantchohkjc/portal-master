import * as React from "react"
import { Link } from "gatsby"

import "./style.scss"

const ProductTag = ({ tagName }) => (
    <>
        <span class="badge rounded-pill bg-light text-dark">{ tagName }</span>
    </>
);

export default ProductTag