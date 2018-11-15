import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botCollection:[],
    botArmy:[]
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(botData => this.setState({botCollection:botData}))
  }

  addToArmy = (botId) => {
    if (this.state.botArmy.includes(botId)) {
      console.log('Already in your Army')
    } else {
    this.setState({botArmy:[...this.state.botArmy, botId]})
    }
  }

  removeFromArmy = (botId) => {
    let newArmy = this.state.botArmy.filter(id => id !==botId)
    this.setState({botArmy:newArmy})
  }


  render() {
    return (
      <div>
        <YourBotArmy
          botArmy = {this.state.botArmy}
          botCollection={this.state.botCollection}
          removeFromArmy={this.removeFromArmy}/>
        <BotCollection
          botCollection={this.state.botCollection}
          addToArmy={this.addToArmy}/>

      </div>
    );
  }

}

export default BotsPage;
