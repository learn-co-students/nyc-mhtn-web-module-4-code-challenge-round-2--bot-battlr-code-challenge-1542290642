import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botSoldiers.map(bot => <BotCard key={bot.id} bot={bot} showBotSoldier={this.showBotSoldier}/>)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
