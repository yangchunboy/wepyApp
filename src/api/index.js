/**
 * @author chuck
 * @date 2019/01/01
 */
import wxRequest from '../common/request';

const getIp = (params) => wxRequest(params, 'getIp');

export default {
  getIp,
};
