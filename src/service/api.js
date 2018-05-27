/**
 * Created by qiankun on 2018/5/27.
 */

const getV2exList = () => {
  return fetch('https://www.v2ex.com/api/topics/hot.json')
}

module.exports = {
  getV2exList
}