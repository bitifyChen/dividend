import request from '@/api/useSheetApi.js'

export const getUser = () => request('get', 'user')

export const postUser = (params) => request('post', 'user', params)
