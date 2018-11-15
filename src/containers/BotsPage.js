import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super()
    this.state = {
      allBots: [],
      currentBotId: null
    }
  }

  componentDidMount() {
    this.getBots()
  }

  render() {
    return (
      <div>
        <BotCollection
          allBots={this.state.allBots}
          handleBotClick={this.handleBotClick}
          currentBotId= {this.state.currentBotId}/>
        <YourBotArmy
          allBots={this.state.allBots}
          handleBotClick={this.handleBotClick}
          currentBotId= {this.state.currentBotId}/>
      </div>
    );
  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        allBots: json
      }, () => console.log(this.state))
    })
  }

  handleBotClick = (event, id) => {
    console.log('in click handler')
    this.setState({
      currentBotId: id
    }, () => console.log(this.state.currentBotId))
  }

} // end of class

export default BotsPage;
