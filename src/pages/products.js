import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/_common/layout"
import Seo from "../components/_common/seo"

//
import ProductCard from "../components/product-card"


//
///import ProductData from "../mock/products.yaml"

const ProductListingPage = () => {

    return (
        <Layout>
            <Seo title="Product Listing" />
            <div class="container">
                <p>SPACER</p>
            </div>
            <div class="container-xxl">
                <div class="row g-4">
                    <div class="col-3 d-none d-xxl-block d-xl-block d-lg-block">
                        <div class="p-3 border bg-light">Filtering</div>
                    </div>
                    <div class="col-lg-9 col-12">
                        <div class="row g-xxl-5 g-xl-5 g-lg-4 g-xs-3">
                            
                            <div class="col-4">
                                <ProductCard product="HELLOs" />
                            </div>
                            <div class="col-4">
                                <div class="test-container">
                                    <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />

                                    <div class="button"><a href="#"> BUTTON </a></div>
                                </div>
                            </div>
                            <div class="col-4">
                                COL 3
                            </div>
                            <div class="col-4">
                                <div class="test-container-1">
                                    <img src="https://media.lanecrawford.com/B/R/L/BRL896_in_xl.jpg" class="front-image" />
                                    <img src="https://media.lanecrawford.com/B/R/L/BRL896_ro_xl.jpg" class="back-image" />
                                    <div class="button"><a href="#"> BUTTON </a></div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="combine-container">
                                    Combine
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="combine-container">
                                    <div class="product-thumbnails">
                                        <img src="https://media.lanecrawford.com/B/R/L/BRL896_in_xl.jpg" class="front-image" />
                                        <img src="https://media.lanecrawford.com/B/R/L/BRL896_ro_xl.jpg" class="back-image" />
                                        <div class="quickshop-overlay">
                                            <label>QUICK SHOP</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>

            
        </Layout>
    )
}

export default ProductListingPage