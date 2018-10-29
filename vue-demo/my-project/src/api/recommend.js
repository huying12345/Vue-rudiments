import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({},commonParams,{
    platform: 'h5',//QQ音乐数据来源
    uin: 0,//qq音乐账户，未登录默认是0
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
