import {Component} from 'react'
import Greeting from './components/Greeting'
import Image from './components/Image'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    imgId: languageGreetingsList[0].id,
  }

  gettingResult = id => {
    this.setState({imgId: id})
  }

  gettingImg = () => {
    const {imgId} = this.state
    const filteredImg = languageGreetingsList.filter(item => item.id === imgId)

    return filteredImg
  }

  render() {
    const {imgId} = this.state
    const filteredImg = this.gettingImg()

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="list">
            {languageGreetingsList.map(item => (
              <Greeting
                key={item.id}
                item={item}
                result={this.gettingResult}
                isActive={imgId === item.id}
              />
            ))}
          </ul>
          <Image details={filteredImg[0]} />
        </div>
      </div>
    )
  }
}

export default App
