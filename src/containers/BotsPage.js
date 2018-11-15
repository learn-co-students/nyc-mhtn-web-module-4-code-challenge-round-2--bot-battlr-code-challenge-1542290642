import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super()
    this.state = {
      bots: [],
      myBots: []
    }
  }

  addMyBots = (bot) => {
    if (!this.state.myBots.includes(bot)) {
      const myNewBots = this.state.myBots.concat(bot)
      this.setState({
        myBots: myNewBots
      }, () => {
        console.log(this.state.myBots);
      })
    }
  }

  removeBot = (bot) => {
    const botsToKeep = this.state.myBots.filter(myBot => {
      return myBot.id !== bot.id
    })
    console.log(bot, botsToKeep);
    this.setState({
      myBots: botsToKeep
    })
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        bots: json
      }, () => {
        console.log(this.state.bots);
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots}
        removeBot={this.removeBot}/>
        <BotCollection bots={this.state.bots}
        addMyBots={this.addMyBots}/>
      </div>
    );
  }

}

export default BotsPage;
