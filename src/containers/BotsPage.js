import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    theBots: [],
    selectedBot: [{}]
  }

  removeBot = (event) => {
    console.log(event)
  }

  botSelect = (selectedObj) => {
    // let leftOverBots = this.state.theBots.filter(botObj => {
    //   return botObj.id !== selectedObj.id
    // })
    // console.log(leftOverBots)

    let checkIfValid = this.state.selectedBot.find(botObj => {
      return botObj.id === selectedObj.id
    })
    if (!checkIfValid) {
      this.setState ({
        selectedBot: [...this.state.selectedBot, selectedObj]
      }, ()=> console.log(this.state.selectedBot))
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      this.setState({
        theBots: myJson
      });
    });
  }

  render() {
    return (
      <div>
        <YourBotArmy removeBot={this.removeBot} selectedBot={this.state.selectedBot}/>
        <BotCollection botSelect={this.botSelect} theBots={this.state.theBots}/>

      </div>
    );
  }

}

export default BotsPage;
