import React from 'react';
//import PropTypes from 'prop-types';

import ScheduleList from './scheduleList';
import ProduceList from './produceList';

function App(){

  return (
    <div>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>

      <div className="jumbotron">
        <h1>David's Farmers Market</h1>
      </div>

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
