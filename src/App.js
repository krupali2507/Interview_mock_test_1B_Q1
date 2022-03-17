import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import WordCount from './components/WordCount'
import './App.css'

// Replace your code here

class App extends Component {
  state = {
    userInput: '',
    wordsList: [],
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput !== '') {
      const newWord = {
        id: uuidv4(),
        word: userInput,
        length: userInput.length,
      }
      this.setState(prevState => ({
        wordsList: [...prevState.wordsList, newWord],
        userInput: '',
      }))
    }
  }

  renderCharacterCountView = () => {
    const {wordsList} = this.state
    const isListEmpty = wordsList.length === 0

    return (
      <div className="character-count-display-container">
        <div className="heading-container">
          <h1>Count the characters like a Boss..</h1>
        </div>
        <div className="words-list-container">
          {isListEmpty ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-words-image"
            />
          ) : (
            <ul>
              {wordsList.map(eachWord => (
                <WordCount wordDetail={eachWord} key={eachWord.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  renderCharacterInputView = () => {
    const {userInput} = this.state

    return (
      <div className="character-user-input-container">
        <h1 className="input-counter-heading">Character Counter</h1>
        <form onSubmit={this.onAddUserInput}>
          <input
            type="text"
            className="input-control"
            placeholder="Enter the Characters here"
            value={userInput}
            onChange={this.onChangeUserInput}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {wordsList} = this.state
    console.log(wordsList)

    return (
      <div className="bg-container">
        <div className="main-card-container">
          {this.renderCharacterCountView()}
          {this.renderCharacterInputView()}
        </div>
      </div>
    )
  }
}

export default App
