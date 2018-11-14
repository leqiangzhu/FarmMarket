import React from 'react';
import PropTypes from "prop-types";

export default function Produce(props){

  const selections = props.produce.selection
  return(
    <div className="card"style={{width: "300px", float:"left", margin:"25px 10px"}} >
      <img className="card-img-top" src="https://picsum.photos/300" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Month:</h5>
        <p className="card-text"> {props.produce.month}</p>
      </div>
      <ul className="list-group list-group-flush" style={{listStyleType:"none"}}>
        {selections.map((selected, index )=> 
          <li style={{marginLeft:" 25px"}} key={index}>{selected}</li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  produce: PropTypes.object.isRequired
};
