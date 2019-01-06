import wepy from 'wepy'
import { HOST } from './config'

const wxRequest = async ({ params = {}, url }) => {
  let data = params.query || {}
  const result = wepy.request({
    url: `${HOST}/api/${url}`,
    method: params.method || 'GET',
    data,
    header: { 'Content-Type': 'application/json' }
  })
  return result
}

export default wxRequest
