import * as React from 'react'



const RangeSlider = () => {
    return (
        <div class="containter">
            <div class="multi-range">
                <input id="min" type="range" min="0" max="100" value="0" step="0.0001"/>
                <input id="max" type="range" min="0" max="100" value="100" step="0.0001"/>
            </div>
        </div>
    )
}
export default RangSlider