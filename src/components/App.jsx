import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ScheduleList from './scheduleList';
import ProduceList from './produceList';
import Header from './Header'

function App(){

  return (
    <div>
    <Header/>
    <Switch>
  
    {/* <Route exact path='/' component={Header} /> */}
    <Route exact path='/schedule' component={ScheduleList} />
    <Route exact path='/produce' component={ProduceList} />
 
    </Switch>
  </div>
    // <div>
    //   <style jsx>{`
    //     font-family: Helvetica;
    //   `}</style>

    //   <div className="jumbotron">
    //     <h1>David's Farmers Market</h1>
    //   </div>

    //   <div>
    //     <ScheduleList/>
    //   </div>
    //   <div>
    //     <ProduceList/>
    //   </div>

    // </div>
  );
}


//App.propTypes = {
//};

export default App;
