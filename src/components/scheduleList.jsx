import React from 'react';
import Schedule from './schedule';
import getSchedules from '../services/marketSchedule';
import getProduces from '../services/availableProduce';

export default function ScheduleList () {
  const schedules = getSchedules();
 

  return (

    <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Day</th>
        <th scope="col">Location</th>
        <th scope="col">Hours</th>
        <th scope="col">Booth</th>
      </tr>
    </thead>
    <tbody>
      {schedules.map((scheduleObject, index) =>    
        <Schedule key={index} schedule = {scheduleObject} />
      )}
    </tbody>
    </table>

  );
  
}