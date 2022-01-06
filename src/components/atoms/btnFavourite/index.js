import React from 'react'

export default function ButtonFavourite() {
    const createDiv=()=> <div className={`container`}>'Im a new div</div>

    return (
        <div>
            <button onClick={createDiv}>Click me</button>
        </div>
    )
}