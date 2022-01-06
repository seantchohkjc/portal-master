import React, { Component } from 'react';

class ProductCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div class="col-md-4 col-6">
                <div class="card product-card box_shadow">
                        <figure class="product-thumbnails">
                            <img src={this.props.frontImage} class="card-img-top front-image" />
                            <img src={this.props.hoverImage} class="card-img-top back-image" />
                            <div class="button">Quick Shop</div>
                            <div class="collection">{this.props.collection}</div>
                        </figure>
                        
                        <div class="card-body">
                            <div class="product-info">    
                                <h5 class="brand">{this.props.brand}</h5>
                                <h6 class="product-name">{this.props.productName}</h6>
                            </div>
                            <div class="product-price">
                                <span class="sell">{this.props.sellPrice}</span>
                                <span class="discount">{this.props.originalPrice}</span>
                            </div>
                            <div class="color">
                                Color
                            </div>

                            { this.props.collection.length > 0 &&
                                <div class="product-tags">
                                    <span class="tag">Exclusive</span>
                                    <span class="tag">Pre-order</span>
                                </div>
                            }
                        </div>
                </div>
            </div>
        )
    }
}

class Front extends React.Component {
    render() {
        return (
            <div class="front">
                <h5>Product Card</h5>
                <label for="card1" class="button" onClick={()=>this.flip()}>Quick Shop</label>
            </div>
        )
    }
}

class Back extends React.Component {
    render() {
        return (
            <div className="back">
                <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
                <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
            </div>
        )
    }
}

/* Product Tags */
const ProductTag = ({ tagName }) => (
    <>
        <span class="badge rounded-pill bg-light text-dark">{ tagName }</span>
    </>
);


export default ProductCard;