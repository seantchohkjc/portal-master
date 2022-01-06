import * as React from "react"

import Layout from "../components/_common/layout"

import ProductCard from "../components/product-card"
import ProductFilters from "../components/product-filters"



import Icon from "../components/_common/icon";

const PrototypesPage = () => {
    return (
        <Layout>
            <div class="container">
                <h1>Ladies</h1>
                <Icon icon="pencil" size={20} color="orange" />
            </div>
            
            <div class="container-xxl">
                
                <div class="row g-5">
                    
                    <div class="col-lg-3">
                        <ProductFilters />    
                    </div>

                    <div class="col-lg-9">
                        <div class="row">
                            <ul class="css-products">
                                <li class="product">Product 1</li>
                                <li class="product">Product 2</li>
                                <li class="product">Product 3</li>
                                <li class="product">Product 4</li>
                                <li class="product">Product 5</li>
                                <li class="product">Product 6</li>
                                <li class="product">Product 7</li>
                                <li class="product">Product 8</li>
                                <li class="product">Product 9</li>

                            </ul>
                        </div>
                    </div>

                </div>

                <section id="products">
                    
                    
                </section>
                
            </div>
        </Layout>
    )
}

export default PrototypesPage

