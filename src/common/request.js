import wepy from 'wepy';

const request = async ({ params = {}, url }) => {
  let data = params.query || {};
  const result = wepy.request({
    url,
    method: params.method || 'GET',
    data,
    header: { 'Content-Type': 'application/json' }
  });
  return result;
};

export default request;
