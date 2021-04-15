import React from "react";

function Card(props)
{
    return(
        <>
    <div className="cards">
        <div className="card">
            <img src ={props.imgsrc} className="card_img"/>
            <div className= "Card_info">
                <span className="card_category" >{props.title}</span>
                <h3 className="card_title">Dark</h3>
                <a href= {props.link} target = "blank"><button>watch Now</button></a>
                
            </div>    
        </div>
    </div>
        </>
    );
}
export default Card;
