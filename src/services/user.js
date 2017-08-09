/**
 * Created by Watcher on 04/08/2017.
 */
import request from "../utils/request";
import qs from 'qs';

export async function query(params) {
  return request(`/api/users?${qs.stringify(params)}`);
}
