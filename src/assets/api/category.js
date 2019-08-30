import axios from 'axios'
import { SUCC_CODE, TIMEOUT } from './config'
// id WQ1980
export const getCategoryContent = (id) => {
  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      return res.data.content
    }
    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    console.log(err)
  })
}
