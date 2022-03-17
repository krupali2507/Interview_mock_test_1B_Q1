import './index.css'

const WordCount = props => {
  const {wordDetail} = props
  const {word, length} = wordDetail

  return (
    <li>
      <p>
        {word} : {length}
      </p>
    </li>
  )
}

export default WordCount
