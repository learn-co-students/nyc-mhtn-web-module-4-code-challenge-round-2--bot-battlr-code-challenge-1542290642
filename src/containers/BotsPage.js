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

  addExpandToBot = () => {
    const allBots = this.state.bots.map(bot => {
      return {...bot, expanded: false}
    })
    this.setState({
      bots: allBots
    }, () => {
      console.log(this.state.bots);
    })
  }

  toggleExpand = (theBot) => {
    //all state in undefined here, so this function doesn't work. WIP.
    const allTheBots = this.state.bots.map(bot => {
      if (theBot.id === bot.id) {
        return {...bot, expanded: true}
      }
    })
    debugger
    this.setState({
      bots: allTheBots
    }, () => {
      console.log(this.state.bots);
    })
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
        this.addExpandToBot()
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots}
        removeBot={this.removeBot}/>
        <BotCollection bots={this.state.bots}
        addMyBots={this.addMyBots}
        toggleExpand={this.toggleExpand.bind(this)}/>
      </div>
    );
  }

}

export default BotsPage;
