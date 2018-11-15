import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourBots: [],
    currentBot: '',
    display: 'all',
    selectedBot: ''
  }

  getSelectedBot = (bot) => {
    this.setState({
      selectedBot: bot,
      display: 'bot'
    })
  }

  displayAllAgain = () => {
    this.setState({
      display: 'all'
    })
  }


  addBotToYourBots = (bot) => {
    if (!this.state.yourBots.includes(bot)) {
      this.setState({
        yourBots: [...this.state.yourBots, bot]
      })
    }
  }

  removeBotFromYourBots = (bot) => {

  this.setState({
    yourBots: this.state.yourBots.filter(
              botObj => botObj.id !== bot.id
            )})
}

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(json => this.setState({
      bots: json
    })).then(res => console.log(this.state.bots))
  }

  componentDidMount() {
    this.fetchBots()
  }

  render() {
    if (this.state.display === 'all') {
      return (
        <div>
        <YourBotArmy yourBots={this.state.yourBots} removeBotFromYourBots={this.removeBotFromYourBots} changeClicked={this.changeClicked}/>

        <BotCollection bots={this.state.bots} addBotToYourBots={this.addBotToYourBots} removeBotFromYourBots={this.removeBotFromYourBots}
        yourBots={this.state.yourBots} getSelectedBot={this.getSelectedBot}/>
        </div>
      )} else {
        return (
          <div>
          <YourBotArmy yourBots={this.state.yourBots} removeBotFromYourBots={this.removeBotFromYourBots} changeClicked={this.changeClicked}/>
            <BotSpecs bot={this.state.selectedBot} displayAllAgain={this.displayAllAgain} addBotToYourBots={this.addBotToYourBots}/>
          </div>
        )
      }
    }


}

export default BotsPage;
