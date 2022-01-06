import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/_common/layout"


const ProductDetailPage = () => {
    return (
        <Layout>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        Product Thumbnail Gallery
                    </div>
                    <div class="col-6">
                        Product Information Detail
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetailPage
