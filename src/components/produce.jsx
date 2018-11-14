import React from 'react';
import PropTypes from "prop-types";

export default function Produce(props){

  const selections = props.produce.selection
  return(
    <div className="card">
      <style jsx>{`
      .card {
        background-color: #ccc;
        padding: 10px;
        border: 2px solid lightblue;
       
        
      }
      .selection{
        list-style-type: none;
      }
    `
    }</style>    
      <p >{props.produce.month}</p>
      <ul className="selection">
        
        {selections.map((selected, index )=> 
        <li key={index}>{selected}</li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  produce: PropTypes.object.isRequired
};
