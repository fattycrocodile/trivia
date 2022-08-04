import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { begin } from '../../modules/quiz'

const Last = (props) => {
  const handleBegin = () => {
    props.begin(() => props.history.push('/quiz'))
  }

  const { values, quizes } = props

  let score = 0
  let result = []
  quizes.map((quiz, index) => {
    const correct_answer = quiz.correct_answer
    if (
      (correct_answer === 'True' && values[index]) ||
      (correct_answer === 'False' && !values[index])
    ) {
      score++
      result.push(1)
    } else result.push(0)
  })
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-dark-600 text-center mt-10">
        You scored
      </h1>
      <p className="text-gray-700 text-base mb-4 text-2xl font-medium text-center">
        {score}&nbsp;/&nbsp;{10}
      </p>
      {quizes.map((quiz, item) => {
        return (
          <div className="font-medium ml-2" key={item}>
            {result[item] ? '+' : '-'}
            &nbsp;
            {quiz.question}
          </div>
        )
      })}
      <div className="flex justify-center">
        <button
          className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
          onClick={handleBegin}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ quiz }) => ({
  quizes: quiz.quizes,
  values: quiz.values,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      begin,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Last)
