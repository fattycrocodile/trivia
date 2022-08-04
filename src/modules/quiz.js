export const CALCULATE_REQUESTED = 'CALCULATED_REQUESTE'
export const CALCULATE = 'CALCULATE'
export const RESTART = 'RESTART'
export const BEGIN_QUIZ = 'BEGIN_QUIZ'
export const NEXT_QUIZ = 'NEXT_QUIZ'

const initialState = {
  quizes: Array(10),
  isCalculating: false,
  values: Array(10),
  cur: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_REQUESTED:
      return {
        ...state,
        isCalculating: true,
      }

    case RESTART:
      return {
        ...state,
        quizes: Array(10),
        values: Array(10),
        cur: 1,
      }

    case BEGIN_QUIZ:
      return {
        ...state,
        quizes: action.payload,
        cur: 1,
      }

    case NEXT_QUIZ:
      const values = state.values
      values[state.cur - 1] = action.payload
      return {
        ...state,
        values,
        cur: state.cur + 1,
      }

    default:
      return state
  }
}

export const next = (callback, page, value) => {
  return async (dispatch) => {
    dispatch({
      type: NEXT_QUIZ,
      payload: value,
    })

    if (page === 10) callback()
  }
}

export const begin = (callback) => {
  return async (dispatch) => {
    const data = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    ).then((response) => response.json())

    dispatch({
      type: BEGIN_QUIZ,
      payload: data.results,
    })

    callback()
  }
}
