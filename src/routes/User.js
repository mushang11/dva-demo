/**
 * Created by Watcher on 04/08/2017.
 */
import React,{Component,PropTypes} from "react";
import {connect} from 'dva';
import {WingBlank,WhiteSpace} from "antd-mobile";
import UserList from "../components/Users/UserList"
import UserSearch from "../components/Users/UserSearch"
import UserModal from "../components/Users/UserModal"

import style from "./User.css";

function Users({location,dispatch,users}) {
  const {loading,list,total,current,currentItem,modalVisible,modalType} =users;

  const userSearchProps = {};
  const userListProps = {
    total,
    current,
    loading,
    dataSource:list
  };
  const userModalProps = {};


  return(
  <div className={style.normal}>

    <div className={style.box}>
      <UserSearch {...userSearchProps}/>
    </div>
    {/*<WhiteSpace/>*/}
    <UserList {...userListProps}/>
    <UserModal {...userModalProps}/>
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
