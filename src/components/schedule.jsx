import React from 'react';
import PropTypes from "prop-types";

export default function Schedule (props) {
  
  return (
      <tr>
        <td>{props.schedule.day}</td>
        <td>{props.schedule.location}</td>
        <td>{props.schedule.hours}</td>
        <td>{props.schedule.booth}</td>
      </tr>
  );
}

Schedule.propTypes = {
  schedule: PropTypes.object.isRequired
};