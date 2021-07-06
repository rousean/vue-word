import { RECEIVE_WORDS, RECEIVE_BOOKSLISTS } from './mutation-types'

export default {
  [RECEIVE_WORDS](state, { words }) {
    state.words = words
  },
  [RECEIVE_BOOKSLISTS](state, { booksLists }) {
    state.booksLists = booksLists
  }
}
