import axios from './http';

const getAllDevice = () => {
  return axios.get(`/devices`);
}
// 查询设备
const getDevice = deviceName => {
  return axios.get(`/mqtt/v1/devices/${deviceName}`);
}
// 注册设备POST /mqtt/v1/devices/reg
const regDevice = params => {
  return axios.post('/mqtt/v1/devices/reg', params);
}
// 删除设备 DELETE /mqtt/v1/devices/{device_id}
const deleteDevice = deviceId => {
  return axios.delete(`/devices/${deviceId}`);
}
// 更新设备key PUT /mqtt/v1/devices/{device_id}/key?force_offline=true
const updateDevice = deviceId => {
  return axios.put(`/devices/${deviceId}/key?force_offline=true`);
}
// 设备命令 POST /v1/synccmds?device_id=524092364&timeout=30
const setDevice = params => {
  // return axios.post('/v1/synccmds?device_id=628579624&timeout=10', params);
  return axios.post(`/v1/synccmds?device_id=${params.id}&timeout=10`, params.data)
}
// 查询设备镜像 GET /mqtt/v1/devices/{device_id}/image

// 更新设备镜像 PUT /mqtt/v1/devices/{device_id}/image/properties

// 查询设备数据点 GET /devices/{device_id}/datapoints?datastream_id=ds&start=2017-01-01T00:00:00&limit=100
const getDeviceData = params => {
  return axios.get(
    `/devices/${params.deviceId}/datapoints?datastream_id=${params.dataId}&
    start=2021-01-01T00:00:00&limit=${params.limit}`
  );
}

export { getDevice, getDeviceData, setDevice, getAllDevice }
