import React from 'react';
import { Tabs } from 'antd';

import './Tab.css';

// const { TabPane } = Tabs;

const Tab = ({ getRate, searchMovie, search }) => {
  const onChange = (key) => {
    if (key === '1') {
      searchMovie(search);
    }
    if (key === '2') {
      getRate();
    }
  };

  return (
    <div className='tab'>
      <Tabs defaultActiveKey='1' onChange={onChange}>
        <Tabs.TabPane tab='Search' key='1'>
          <></>
        </Tabs.TabPane>
        <Tabs.TabPane tab='Rated' key='2'>
          <></>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Tab;
