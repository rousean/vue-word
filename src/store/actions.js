import { reqWords, reqBooksLists } from '../api/'
import { RECEIVE_WORDS, RECEIVE_BOOKSLISTS } from './mutation-types'

export default {
  async getWords({ commit }) {
    const result = await reqWords('select * from r_books_info')
    if (result.code === 0) {
      commit(RECEIVE_WORDS, { words: result.data })
    }
  },
  async getBooksLists({ commit }) {
    const result = await reqBooksLists()
    if (result.code === 0) {
      commit(RECEIVE_BOOKSLISTS, {
        booksLists: result.data
      })
    }
  }
}
