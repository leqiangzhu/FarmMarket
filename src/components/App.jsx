import React from 'react';
//import PropTypes from 'prop-types';

import ScheduleList from './scheduleList';
import ProduceList from './produceList'

function App(){


  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      FarmerMarketCircuit

      <div>
        <ScheduleList/>
      </div>
      <div>
        <ProduceList/>
      </div>

    </div>
  );
}


//App.propTypes = {
//};

export default App;
