import React from 'react';
import {Link} from 'react-router-dom';
import './bread_crumb.css';

function BreadCrumb(props) {
    let {navigators, separate='>'} = props;
  return (
    <div className="bread-crumb">
      {
          navigators.map((item,index)=>{
              if(item.link){
                  return <span key={index}>{ index ? separate : '' }<Link to={item.link}>{ item.name }</Link></span>
              }else{
                  return <span key={index}>{index ? separate : ''}{ item.name }</span>
              }
          })
      }
    </div>
  );
}

export default BreadCrumb;
