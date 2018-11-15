import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let armyBots = this.props.botArmy.map(botId => (
      this.props.botCollection.find(bot => {
        return bot.id === botId
      })
    ))
    let armyBot = armyBots.map(bot =>(
      <BotCard
        key={bot.id}
        bot={bot}
        handleClick={this.props.removeFromArmy}
        />
    ))
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {armyBot}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
