import { getDeviceData, getAllDevice, setDevice } from '../api/api';
import store from '../store';

//时间格式化
function timeFormat() {
  let yy = new Date().getFullYear();
  var mm =
    new Date().getMonth() < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  var dd =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  let hh = new Date().getHours();
  let mf =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  let ss =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();
  // _this.gettime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
  return `${yy}年${mm}月${dd}日 ${hh}:${mf}:${ss}`
}

//获取设备信息
function getInfos(id) {
  let params = {
    deviceId: id,
    dataId: "mode,level,latitude,blink,longitude,voltage",
    limit: 1,
  };
  let res = getDeviceData(params);
  return res;
}

//获取所有设备
function getDevice() {
  let data = getAllDevice();
  return data;
}
//数组扁平化
function flat(arr) {
  let temp = []; 
  arr.forEach((item) => {
    item.data.datastreams.forEach((item, index) => {
      let str = `{"${item.id}":"${item.datapoints[0].value}"}`;

      // temp.push(`{"${item.id}":"${item.datapoints[0].value}"}`)
      temp.push(JSON.parse(str));
    })
  })
  let splitArr = (len, arr) => {
    let res = [],
        index;
    for (index = 0; index < arr.length;) {
      res.push(arr.slice(index, index += len)); 
    }
    return res;
  }
  let final = splitArr(6, temp);
  let test = final.map((item)=>{
    return Object.assign({},...item)
  })
  return test;
}
//合并数据
function merge(arr, arr2){
  let mergeObj = arr.map((item, index) => {
    return {...item, ...arr2[index]};
  })
  return mergeObj;
}
//模式设置
function setMode({id, id_control}){
  let curMode = store.state.curMode;
  if (curMode == 5) {
    curMode = 3;
  }
  let modeParams = {
    // id: 669681003,
    id: id,
    data: {
      "cmd":1000,
      // "id": 1190967555,
      "id": id_control,
      "buff":{
        "mode": curMode
      }
    }
  }
  // console.log(modeParams);
  try {
    setDevice(setMode).then(res => {
      console.log('模式成功',res);
     
    })
  } catch (error) {
    console.log(error);
  }

}

//设置参数
function setParam(params){

  try {
    setDevice(params).then(res => {
      console.log('参数成功',res);
     
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  timeFormat,
  getInfos,
  getDevice,
  flat,
  merge,
  setMode,
  setParam
}