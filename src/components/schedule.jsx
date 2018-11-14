import React from 'react';

export default function Schedule (props) {
  
  return (
    <div className="card">
    <style jsx>{`
      .card {
        background-color: #ccc;
        padding: 10px;
        border: 2px solid lightgreen;
      }
    `}</style>
    <p >{props.schedule.day}</p>
    <p >{props.schedule.location}</p>
    <p >{props.schedule.hours}</p>
    <p >{props.schedule.booth}</p>
    </div>
  );
}