import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  constructor() {
    super()
    this.state = {
      yourBots: []
    }
  }

  makeBot = () => {
    // debugger
    if (this.props.allBots.length > 0 && this.state.yourBots.length > 0 && this.state.currentBotId){
      const botObj = this.findBot()
      return this.setYourBots(botObj)
      // this.yourBots.map(bot => {
      //   return <BotCard key={bot.id} bot={bot} handleBotClick={this.props.handleBotClick}/>
      // })
    } else {
      return null
    }
  }

  findBot = () => {
    // debugger
    return this.props.allBots.find(bot => this.props.currentBotId === bot.id)
  }

  setYourBots = (newBot) => {
    this.setState({
      yourBots: [...this.state.yourBots, newBot]
    }, () => {
      return this.state.yourBots.map(bot => {
      return <BotCard key={bot.id} bot={bot} handleBotClick={this.props.handleBotClick}/>
    })})
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.makeBot()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

}// end of class

export default YourBotArmy;
