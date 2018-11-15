import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourBots: []
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
    return (
      <div>
      <YourBotArmy yourBots={this.state.yourBots} removeBotFromYourBots={this.removeBotFromYourBots} changeClicked={this.changeClicked}/>

      <BotCollection bots={this.state.bots} addBotToYourBots={this.addBotToYourBots} removeBotFromYourBots={this.removeBotFromYourBots}
      yourBots={this.state.yourBots}/>
      </div>
    );
  }

}

export default BotsPage;
