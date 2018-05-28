/**
 * Created by qiankun on 2018/5/27.
 */

const getServiceDate = () => {
  return fetch('//api.mall.autohome.com.cn/time/getTime?_appid=mall')
}

module.exports = {
  getServiceDate
}