import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { begin } from '../../modules/quiz'
const Home = (props) => {
  const handleBegin = () => {
    props.begin(() => props.history.push('/quiz'))
  }

  return (
    <div className="justify-center">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-dark-600 text-center mt-10">
        Welcome to Trivia Challenge!
      </h1>
      <p className="text-gray-700 text-base mb-4 text-2xl font-medium text-center mt-20">
        You will be presented with 10 True or False questions.
      </p>
      <p className="text-gray-700 text-base mb-4 text-2xl font-medium text-center mt-40">
        Can you score 100%?
      </p>
      <div className="flex justify-center">
        <button
          className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
          onClick={handleBegin}>
          BEGIN
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      begin,
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(Home)
