import { request } from '@/utils/request'

export function historyOther(params?: any, data?: any) {
  return request({ url: '/video/historyOther', method: 'get', params, data })
}

export function historyVideo(params?: any, data?: any) {
  return request({ url: '/video/history', method: 'get', params, data })
}

export function recommendedPost(params?: any, data?: any) {
  return request({ url: '/recommend', method: 'get', params, data })
}

export function recommendedLongVideo(params?: any, data?: any) {
  return request({ url: '/video/long/recommended/', method: 'get', params, data })
}

export function myPost(params?: any, data?: any) {
  // 动态构建 URL
  // const url = `users/${userId}`;
  const url = `/users/60685235913/posts`
  return request({ url, method: 'get', params, data })
}

export function privateVideo(params?: any, data?: any) {
  const url = `/users/60685235913/private`
  return request({ url: url, method: 'get', params, data })
}

export function likePost(params?: any, data?: any) {
  const url = `users/60685235913/digg`
  return request({ url, method: 'get', params, data })
}


// 评论相关的请求
export function postComments(params?: any, data?: any) {
  // 动态构建 URL
  const url = `/posts/${params.aweme_id}/comments`

  return request({ url, method: 'get', params, data })
}

export function commentReplies(params?: any, data?: any) {
  // 动态构建 URL
  const url = `/comments/${params.id}/replies`

  return request({ url, method: 'get', params, data })
}

// 话题相关的请求
export function hashtagPosts(params?: any, data?: any) {
  // 动态构建 URL
  const url = `/hashtag/${params.id}/posts`

  return request({ url, method: 'get', params, data })
}


export function hashtagRelated(params?: any, data?: any) {
  // 动态构建 URL
  const url = `hashtag/${params.id}/related`
  return request({ url, method: 'get', params, data })
}

export function hashtagInfo(params?: any, data?: any) {
  // 动态构建 URL
  const url = `hashtag/${params.id}`
  return request({ url, method: 'get', params, data })
}


// --四个search相关的get请求
export function searchUsers(params?: any, data?: any) {
  const url = `/search/users`
  return request({ url, method: 'get', params, data })
}


export function searchVideos(params?: any, data?: any) {
  const url = `/search/videos`
  return request({ url, method: 'get', params, data })
}

export function searchAlbums(params?: any, data?: any) {
  const url = `/search/albums`
  return request({ url, method: 'get', params, data })
}

export function searchHashtags(params?: any, data?: any) {
  const url = `/search/hashtags`
  return request({ url, method: 'get', params, data })
}


export function searchGeneral(params?: any, data?: any) {
  const url = `/search/general`
  return request({ url, method: 'get', params, data })
}


// 登录、注册相关的post请求
export function passwordLogin(params?: any, data?: any) {
  // 动态构建 URL
  const url = `/login`
  return request({ url, method: 'post', params, data })
}
