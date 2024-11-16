import { request } from '@/utils/request'

export function userinfo(params?: any, data?: any) {
  return request({ url: '/user/userinfo', method: 'get', params, data })
}

export function userVideoList(params?: any, data?: any) {
  // 动态构建 URL
  const url = `users/${params.id}/posts`
  return request({ url, method: 'get', params, data })
}

export function panel(params?: any, data?: any) {
  return request({ url: '/users/60685235913', method: 'get', params, data })
}

export function friends(params?: any, data?: any) {
  return request({ url: '/user/friends', method: 'get', params, data })
}

export function userCollect(params?: any, data?: any) {
  return request({ url: '/user/collect', method: 'get', params, data })
}

export function recommendedPost(params?: any, data?: any) {
  return request({ url: '/post/recommended', method: 'get', params, data })
}

export function recommendedShop(params?: any, data?: any) {
  return request({ url: '/shop/recommended', method: 'get', params, data })
}

export function userLogin(params?: any, data?: any) {
  const url = `/token/pair`
  return request({ url, method: 'post', params, data })
}