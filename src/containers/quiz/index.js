import React, { useRef } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { next } from '../../modules/quiz'

const Quiz = (props) => {
  const { quizes, cur } = props
  const quiz = quizes[cur - 1]
  const inputElement = useRef()

  const handleNext = () => {
    props.next(
      () => props.history.push('/last'),
      cur,
      inputElement.current.checked
    )
  }

  return (
    <div className="justify-center">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-dark-600 text-center mt-10">
        {quiz.category}
      </h1>
      <p
        className="text-gray-700 text-base mb-4 text-2xl font-medium text-center mt-20"
        dangerouslySetInnerHTML={{ __html: quiz.question }}></p>
      <div className="text-gray-700 text-base mb-4 text-2xl font-medium text-center mt-40">
        {cur} &nbsp; of &nbsp; 10
      </div>
      <div className="flex justify-around align-center">
        <div className="form-check">
          <input
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            ref={inputElement}
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault">
            True of False
          </label>
        </div>
      </div>
      <div className="flex justify-around align-center">
        <button
          className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
          onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ quiz }) => ({
  cur: quiz.cur,
  quizes: quiz.quizes,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      next,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
