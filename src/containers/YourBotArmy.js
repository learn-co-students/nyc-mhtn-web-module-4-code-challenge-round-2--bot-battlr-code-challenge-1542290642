import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  mapThroughMyBots = () => {
    console.log(this.props);
    return this.props.myBots.map(myBot => {
      return <BotCard bot={myBot} key={myBot.id}
      removeBot={this.props.removeBot}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.mapThroughMyBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
