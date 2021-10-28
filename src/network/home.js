import {
  request
} from './request';

export function getHomeAllData() {
  return request({
    url: '/api/index',
    // methods: 'get',
    // params: {

    // }
  })
}