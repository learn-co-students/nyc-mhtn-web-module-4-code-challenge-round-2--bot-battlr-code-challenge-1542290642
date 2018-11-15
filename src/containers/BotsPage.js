import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      userBots: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(jsonResp => this.setState({
      bots: jsonResp
    }))
  }


getBotsId = () => {
  return this.state.userBots.map((bot) => {
    return bot.id;
  })
}
  addBot = (currentBot) => {

    if (this.getBotsId().includes(currentBot.id)) {
      return null
    } else {
      this.setState({
        userBots: [...this.state.userBots, currentBot]
      })
    }
  }

  render() {

    return (
      <div>
       <BotCollection bots={this.state.bots} addBot={this.addBot}/>
       <YourBotArmy userBots={this.state.userBots}/>

      </div>
    );
  }

}

export default BotsPage;
