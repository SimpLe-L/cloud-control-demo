import { getDeviceData, getAllDevice } from '../api/api';
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
    item.data.forEach((item) => {
      item.datastreams.forEach((item) => {
        let valArr = item.datapoints;

        temp.push(
          {
            id: item.id,
            value: item.datapoints
          }
        )
      })
    })
  })
}

//设置模式
function setMode() {
  let cur = store.state.curMode;

  switch (cur) {
    case 0:
      //自动模式
      break;
    case 1:
      //轮廓强化

      break;
    case 2:
      //主动诱导
      break;
    case 3:
      //自动模式
      break;
    case 4:
      //自动模式
      break;
    default:
      break;
  }
}


export {
  timeFormat,
  getInfos,
  getDevice,
  setMode
}