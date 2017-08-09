/**
 * Created by Watcher on 04/08/2017.
 */
import {query} from "../services/user";
export  default {
  namespace:'users',
  state:{
    list:[],
    total:null,
    loading:false,
    current:null,
    currentItem:{},
    modalVisible:false,
    modalType:'create',
  },
  subscriptions:{
    setup({dispatch,history}){
      history.listen(location=>{
        if(location.pathname === '/users'){
          dispatch({
            type:'querySuccess',
            payload:{}
          })
        }
      })
    }
  },
  effects:{
    *query({payload},{select,call,put}){
      yield put({type:'showLoading'});
      const {data} =yield  call(query);
      if(data){
        yield put({
          type:'querySuccess',
          payload:{
            list:data.data,
            total:data.page.total,
            current:data.page.current
          }
        })
      }

    },
    *create(){},
    *'delete'(){},
    *update(){}
  },
  reducers:{
    showLoading(){},
    showModal(){},
    hideModal(){},
    querySuccess(state){
      const mock = {
        total:3,
        current:1,
        loading:false,
        list:[
          {
            id: 1,
            name: '张三',
            age: 23,
            address: '成都',
          },
          {
            id: 2,
            name: '李四',
            age: 24,
            address: '杭州',
          },
          {
            id: 3,
            name: '王五',
            age: 25,
            address: '上海',
          },
        ],
      }
      return {...state,...mock,loading:false}
    },
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){}
  }
}
