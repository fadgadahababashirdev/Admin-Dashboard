import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import First from '../FirstDiv/First';
import Second from '../Second/Second';
import Third from '../Third/Third';
import Fourth from '../Foutrh/Fourth';
import Inittial from '../Categories/Inittial';
import InitialSupply from '../Categories/InitialSupply';
import Balance from '../Categories/Balance';
import Management from '../Categories/Management';

const All = () => {
  return (
    <div className="flex w-screen ">
      <Sidebar />
      <div className="overflow-y-auto">
        <First />
        <Second />
        <Third />
        <Fourth />
        <Inittial />
        <InitialSupply />
        <Balance />
        <Management />
      </div>
    </div>
  );
};

export default All;
