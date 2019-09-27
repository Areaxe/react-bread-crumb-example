import React from 'react';
import BraddCrumb from '../breadCrumb/bread_crumb';
import './layout.css';

function Layout(props) {
    let {navigators=[], separate='>'} = props;
  return (
    <div className="App">
      <header className="App-header">
        <div>面包屑测试</div>
      </header>
      {
        navigators && navigators.length?<BraddCrumb navigators={navigators} separate={separate}/>: null
      }
      <div className="layout-main">{props.children}</div>
    </div>
  );
}

export default Layout;
