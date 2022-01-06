import * as React from "react"

import Layout from "../../../components/_common/layout"

import ProductCard from "../../../components/product-card"
import ProductFilters from "../../../components/product-filters"



const ProductListingPage = () => {



    return (
        <Layout>
            <div class="plp-header">
                <div class="container">
                    <h1 class="text-center">FOR HER</h1>
                    <ul class="quick-picks">
                        <li>
                            <CategoryQuickPick
                                url="/levade/categories"
                                categoryName="Category Name"
                                imgSrc="https://www.net-a-porter.com/content/images/cms/ycm/resource/blob/716516/c69d9d8e43551c32d2bd58cedec3e710/desktop-duo-promo-1346x1010-data.jpg/w1500_q80.jpg"
                            />
                        </li>
                        <li>
                            <CategoryQuickPick
                                url="/levade/categories"
                                categoryName="Category Name"
                                imgSrc="https://www.net-a-porter.com/content/images/cms/ycm/resource/blob/716516/c69d9d8e43551c32d2bd58cedec3e710/desktop-duo-promo-1346x1010-data.jpg/w1500_q80.jpg"
                            />
                        </li>
                        <li>
                            <CategoryQuickPick
                                url="/levade/categories"
                                categoryName="Category Name"
                                imgSrc="https://www.net-a-porter.com/content/images/cms/ycm/resource/blob/716516/c69d9d8e43551c32d2bd58cedec3e710/desktop-duo-promo-1346x1010-data.jpg/w1500_q80.jpg"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        Filters | 1,000 results
                    </div>
                    <div class="col">
                        Sorted  
                    </div>
                </div>
            </div>

            <div class="plp-fix-header">
                <div class="container">
                    <div class="row">
                        <div class="col">FITLER</div>
                        <div class="col">FOR HER</div>
                        <div class="col">SORTED</div>
                    </div> 
                </div>
            </div>
            
            <div class="container">
                <div class="row g-5">
                    
                    <div class="col-lg-3 d-none d-lg-block sticky">
                        <ProductFilters />    
                    </div>

                    <div class="col-md-12 col-lg-9">
                        <div class="row g-xl-5 g-lg-4 g-xs-3">

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <div class="col-md-8 col-12">
                                <div class="p-3 border bg-light">Curated Content Card</div>
                            </div>

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />

                            <ProductCard 
                                collection="Patchwork Collection"
                                brand="Brand Name"
                                productName="Product Name"
                                sellPrice="1,000"
                                originalPrice="2,000"
                                frontImage="https://www.net-a-porter.com/variants/images/18706561955814119/ou/w358_q60.jpg"
                                hoverImage="https://www.net-a-porter.com/variants/images/29419655932170614/ou/w358_q60.jpg"
                            />
                           
                        </div>
                    </div>

                </div>

                <section id="products">
                    
                    
                </section>
                
            </div>
        </Layout>
    )
}

class CategoryQuickPick extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.url}>
                <img src={this.props.imgSrc} />
                <span>{this.props.categoryName}</span>
            </a>
        )
    }
}


export default ProductListingPage