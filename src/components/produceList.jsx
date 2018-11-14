import React from 'react';
import Produce from './produce';
import getProduces from '.././services/availableProduce';


export default function ProduceList(){
  const produces = getProduces();
  return(
  

    <ul>
      {produces.map((produceObject, index) =>    
        <Produce key={index} produce = {produceObject} />
      )}
    </ul>
  );
}
