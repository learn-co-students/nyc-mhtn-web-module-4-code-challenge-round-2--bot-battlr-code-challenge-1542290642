import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super()
    this.state = {
      allBots: [],
      yourBots: [],
      currentBotId: null,
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
          currentBotId= {this.state.currentBotId}
          />
        <YourBotArmy
          allBots={this.state.allBots}
          handleBotClick={this.handleBotClick}
          currentBotId= {this.state.currentBotId}
          yourBots={this.state.yourBots}/>
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
    if (this.state.currentBotId !== id) {
      const foundBot =  this.findBot(id)
      console.log('in click handler')
      this.setState({
        currentBotId: id,
        yourBots: [...this.state.yourBots, foundBot]
      }, () =>  console.log(this.state))
    }
  }

  findBot = (id) => {
    // debugger
    return this.state.allBots.find(bot => id === bot.id)
  }

  removeBot = () => {

  }



} // end of class

export default BotsPage;
