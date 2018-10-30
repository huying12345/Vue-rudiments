import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5', // QQ音乐数据来源
    uin: 0, // qq音乐账户，未登录默认是0
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDescList () {
  const url = '/api/getDescList'
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    platform: 'yqqm',
    needNewCode: 0,
    data: '{"comm":{"ct":24},"playlist":{"method":"get_playlist_by_category","param":{"id":3313,"curPage":1,"size":40,"order":5,"titleid":3313},"module":"playlist.PlayListPlazaServer"}}'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
