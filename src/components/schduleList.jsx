import React from 'react';
import Schedule from './schedule'
import getSchedules from '.././services/marketSchedule';
import getProduces from '.././services/availableProduce';

export default function ScheduleList () {
  const schedules = getSchedules();
  const produces = getProduces();

  return (

    <ul>
    {schedules.map((scheduleObject, index) =>    
      <Schedule key={index} schedule = {scheduleObject} />
    )}
    </ul>

  );
  
}