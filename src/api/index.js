import ajax from './ajax'

const BASEURL = '/api'

// 获取单词列表
export const reqWords = sql => ajax(BASEURL + '/word', { sql })

// 获取所有书本的标签
export const reqBooksLists = () => ajax(BASEURL + '/bookLists')
