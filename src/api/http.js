import axios from 'axios';
import router from '../router';
import store from '../store/index';
import axiosRetry from 'axios-retry';

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      localStorage.removeItem('token');
      store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000)
      break;
    // 404请求不存在
    case 404:
      break;
    default:
      console.log(other);
  }
}

// 创建axios实例
// const instance = axios.create({ timeout: 1000 * 12 })

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  // instance.defaults.baseURL = '/devices'
} else if (process.env.NODE_ENV === 'debug') {
  // 测试环境
  // instance.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  // 生产环境
  // instance.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
}
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
axios.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    // const token = window.sessionStorage.getItem('token')
    // token && (config.headers.Authorization = token)
    const token = 'version=2018-10-31&res=products%2F371437&et=1631676076&method=md5&sign=IRyHqdl87kxFYKh3A0FvBg%3D%3D';
    // const token = 'version=2018-10-31&res=products%2F371437&et=1893427200&method=sha1&sign=dugb0TqlaiHnhlNbPJbnJa3%2BhOM%3D';
    config.headers.Authorization = token;
    // config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    return config;
  },
  error => Promise.error(error)
)

// 响应拦截器
axios.interceptors.response.use(
  // 请求成功
  res => (res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res)),
  // 请求失败
  error => {
    // const { response } = error
    // if (response) {
    //   // 请求已发出，但是不在2xx的范围
    //   errorHandle(response.status, response.data.message)
    //   return Promise.reject(response)
    // }
    // 处理断网的情况
    // eg:请求超时或断网时，更新state的network状态
    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    if (!window.navigator.onLine) {
      store.commit('changeNetwork', false);
    } else {
      return Promise.reject(error);
    }
  }
)


axiosRetry(axios, {
  retries   : 3, // number of retries
  retryDelay: (retryCount) => {
     return retryCount * 1000; // time interval between retries
  },
  // retryCondition: (error) => {
  //       // if retry condition is not specified, by default idempotent requests are retried
  //       return error.response.errno === 15;
  // },
  
//  retryCondition: (error) => {
//   //true为打开自动发送请求，false为关闭自动发送请求
//   if (error.message.includes("timeout")) {
//     return true;
//   } else {
//     return false;
//   };
// }
});

export default axios;
// Authorization:
// version=2020-9-20&
// res=products%373904&
// et=1537255523&
// method=sha1&
// sign=ZjA1NzZlMmMxYzIOTg3MjBzNjYTI2MjA4Yw%3D