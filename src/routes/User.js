/**
 * Created by Watcher on 04/08/2017.
 */
import React,{Component,PropTypes} from "react";
import {connect} from 'dva';
import {WingBlank,WhiteSpace} from "antd-mobile";

import style from "./User.css";

function Users({location,dispatch,users}) {
  const {loading,list,total,current,currentItem,modalVisible,modalType} =users;

  return(
  <div className={style.normal}>

    <div className={style.box}>
    </div>
    <WhiteSpace/>
  </div>
  );
}


Users.propTypes={
  users:PropTypes.object
}

function mapStateToProps({users}) {
  return {users};
}

export default connect(mapStateToProps)(Users);
