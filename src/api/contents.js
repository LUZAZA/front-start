import axios from "@/utils/request"
import qs from "qs"
/**
 *
 * @param {object} options 读取文章列表参数
 */
const getList = (options) => {
  return axios.get("public/list?" + qs.stringify(options))
}

const getTips = () => {
  return axios.get("public/tips")
}

const getLinks = () => {
  return axios.get("public/links")
}

const getTop = () => {
  return axios.get("public/topWeek")
}
export {
  getList,
  getTips,
  getLinks,
  getTop
}
