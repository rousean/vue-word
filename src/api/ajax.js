import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function(resolve, reject) {
    let promise
    // 发送get请求
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // 返回premise
    promise
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}
