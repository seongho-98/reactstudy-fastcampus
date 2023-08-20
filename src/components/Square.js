import React from "react";
import "./Square.css";

// const Square = (props) =>{
//     return(
//         <button className="square" 
//             onClick={() => {this.props.onClick()}}>
//             {this.props.valueM}
//         </button>
//     )
// }
const Square = ({onClick, valueM}) =>{
    return(
        <button className="square" 
            onClick={() => {onClick}}>
            {valueM}
        </button>
    )
}

export default Square;