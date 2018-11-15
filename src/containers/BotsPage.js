import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botSoldiers: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then((bots) => {
        this.setState({
          bots: bots
        })
      })
    }

    showBotSoldier = (id) => {
      let findBot = this.state.bots.find((bot) => {
        return bot.id === id
      })
      const botSoldiersArr = [...this.state.botSoldiers] //copy

      if(this.state.botSoldiers.includes(findBot)) {
        let botIndex = this.state.botSoldiers.indexOf(findBot)
        let removedBot = botSoldiersArr.splice(botIndex, 1)
        this.setState({
          botSoldiers: botSoldiersArr
        })
      } else {
        botSoldiersArr.push(findBot)
        this.setState({
          botSoldiers: botSoldiersArr
        })
      }
      }//setState should only have the value that is meant to update

  render() {
    // console.log(this.state)
    return (
      <div>
        <YourBotArmy botSoldiers={this.state.botSoldiers} showBotSoldier={this.showBotSoldier}/>
        <BotCollection bots={this.state.bots} showBotSoldier={this.showBotSoldier}/>
      </div>
    );
  }

}

export default BotsPage;
