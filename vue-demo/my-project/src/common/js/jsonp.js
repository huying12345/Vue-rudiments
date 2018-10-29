import originJSONP from 'jsonp'

//封装一个 jsonp 请求方法

export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
      originJSONP(url, option, (err, data) => {
        if(!err) {
          resolve(data) //数据请求成功
        }else{
          reject(err) //请求失败
        }
      })
  })
}

function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k} = ${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
