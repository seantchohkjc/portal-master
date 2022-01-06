import React, { Component } from 'react';
import Icon from "../_common/icon";
import iconSet from "../../styles/portal_icons.json";
import { iconList } from "icomoon-react"; 
import { useScrollRestoration } from 'gatsby';



class ProductFilters extends Component {

    render() {
        return (
            <>
                <div class="accordion product-filter" id="accordion-product-filters">

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Category
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body"> 
                                <RadioButtonParent />

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 
                            class="accordion-header" 
                            id="filter-header-brands"
                        >
                            <button 
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#filter-panel-brands"
                                aria-expanded="false"
                                aria-controls="filter-panel-brands"
                            >
                                Brands
                            </button>
                        </h2>
                        <div 
                            id="filter-panel-brands"
                            class="accordion-collapse collapse" 
                            aria-labelledby="filter-header-brands">
                            <div class="accordion-body"> 
                                <CheckboxGroup />
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h2 
                            class="accordion-header" 
                            id="filter-header-color"
                        >
                            <button 
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#filter-panel-color"
                                aria-expanded="false"
                                aria-controls="filter-panel-color"
                            >
                                Colors
                            </button>
                        </h2>
                        <div 
                            id="filter-panel-color"
                            class="accordion-collapse collapse" 
                            aria-labelledby="filter-header-color">
                            <div class="accordion-body"> 
                                <ColorOption color="red" name="Red" product_count="100" />
                            </div>
                        </div>
                    </div>

                    
                    <ProductFilter
                        filterName="Material" />
                    <ProductFilter
                        filterName="Size" />
                    <ProductFilter
                        filterName="Occasion" />

                    <div class="accordion-item">
                        <h2 
                            class="accordion-header" 
                            id="filter-header-price"
                        >
                            <button 
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#filter-panel-price"
                                aria-expanded="false"
                                aria-controls="filter-panel-price"
                            >
                                Price
                            </button>
                        </h2>
                        <div 
                            id="filter-panel-price"
                            class="accordion-collapse collapse" 
                            aria-labelledby="filter-header-price">
                            <div class="accordion-body"> 
                                <div class="price-range-slider">
                                    <p class="range-value">
                                        <input type="text" id="amount" readonly />
                                    </p>
                                    <div id="slider-range" class="range-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

class ProductFilter extends Component {
    render() {
        return (
            <div class="accordion-item">
                <h2 
                    class="accordion-header" 
                    id={ "filter-header-" + this.props.filterName }
                >
                    <button 
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={ "#filter-panel-" + this.props.filterName }
                        aria-expanded="false"
                        aria-controls={ "filter-panel-" + this.props.filterName }
                    >
                        { this.props.filterName}
                    </button>
                </h2>
                <div 
                    id={ "filter-panel-" + this.props.filterName }
                    class="accordion-collapse collapse" 
                    aria-labelledby={ "filter-header-" + this.props.filterName }>
                    <div class="accordion-body"> 
                        
                    </div>
                </div>
            </div>
            
        )
    }
}

class CheckboxGroup extends React.Component {
    render() {
        return (
            <div>
                <label className="form-input checkbox">
                    LEVADE&nbsp;&nbsp;•&nbsp;&nbsp;500
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                <label className="form-input checkbox">
                    Hemres&nbsp;&nbsp;•&nbsp;&nbsp;500
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
            </div>
        )
    }
}

class RadioButtonParent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="radio-parent">
                <RadioButtonChild name="All" product_count="1,000" />

                <div className="radio-children">
                    <RadioButtonChild name="Ladies" product_count="200" />
                    
                    <div className="radio-grand-children">
                        <RadioButtonChild name="Clothing" product_count="120" />
                        
                        <div className="radio-great-grand-children">
                            <RadioButtonChild name="Tops" product_count="40" />
                            <RadioButtonChild name="Jackets" product_count="40" />
                            <RadioButtonChild name="Others" product_count="40" />
                        </div>

                        <RadioButtonChild name="Accessories" product_count="60" />

                        <RadioButtonChild name="Bags & Leather Goods" product_count="20" />

                    </div>
                </div>

                <RadioButtonChild name="Gentlemen" product_count="200" />

                <RadioButtonChild name="Children" product_count="100" />

                <RadioButtonChild name="Accessories" product_count="100" />

                <RadioButtonChild name="Lifestyle Décor" product_count="100" />

                <RadioButtonChild name="Memorabilia" product_count="50" />

                <RadioButtonChild name="Travel & Sports" product_count="50" />

                <RadioButtonChild name="Gift Ideas" product_count="200" />

            </div>

        )
    }
}

class RadioButtonChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label class="form-input radiogroup">
                {this.props.name}&nbsp;&nbsp;•&nbsp;&nbsp;{this.props.product_count}
                <input type="radio" name="category" />
                <span class="radiomark" />
            </label>
        )
    }
}

class RadioButtonGrandChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Grand Child</div>
        )
    }
}

class PriceRangeSlider extends React.Component {
    render() {
        return (
            <></>
        )
    }
}

class ColorOption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label class="form-input radiogroup">
                {this.props.name}&nbsp;&nbsp;•&nbsp;&nbsp;{this.props.product_count}
                <input type="radio" name="color" id={this.props.color} />
                <span class={ this.props.color + " colorradiomark"} />
            </label>
        )
    }
}


export default ProductFilters