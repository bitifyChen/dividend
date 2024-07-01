import axios from 'axios'
/* KEY */
const apiKey = 'AIzaSyD0UJfhTh_0FMMImukpctcIEnfOyo7IDXM' // 替换为你的 API 密钥
const spreadsheetId = '1XU70vqHL1cDLFU3NBhGSJUYrRNM7lgqKpgU3sUvask4' // 替换为你的 Spreadsheet ID
// create an axios instance
const instance = axios.create({
  withCredentials: false,
  timeout: 10000
})
instance.interceptors.response.use((res) => {
  const convertToObjects = (data) => {
    const keys = data[0] // 第一行作为键
    return data.slice(1).map((row) => {
      return keys.reduce((obj, key, index) => {
        obj[key] = row[index] !== undefined ? row[index] : null
        return obj
      }, {})
    })
  }
  if (res?.status === 200) {
    return convertToObjects(res?.data?.values)
  }
})

const request = async (method, page, data, queryParams) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await instance({
      method,
      url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${page}?key=${apiKey}`,
      data,
      params: queryParams
    })
    return response
  } catch (error) {
    throw error
  }
}

export default request
