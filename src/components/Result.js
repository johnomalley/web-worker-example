import React, {PropTypes as T} from 'react'

const Result = ({pi}) => (
  <div className='result'>
    {`worker estimated \u03A0 to be ${pi}`}
  </div>
)

Result.propTypes = {
  pi: T.number.isRequired
}

export default Result
