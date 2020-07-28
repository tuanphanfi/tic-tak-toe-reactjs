import React, { useState } from 'react'

export default function Square ({onClick, value}) {
    // const [valueOfSquare, setValueOfSquare] = useState(null)

        return (

            <button className="square" onClick={() => this.onClick()}>
                {value}
            </button>

            // <div onClick={()=>alert("test")} className="text-danger border border-danger d-flex justify-content-center align-items-center abc ">
            //     {this.state.value}
            // </div>
        )
}
