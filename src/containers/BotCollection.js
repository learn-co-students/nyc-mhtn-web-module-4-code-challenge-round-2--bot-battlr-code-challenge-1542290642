import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  makeBot = () => {
    return this.props.allBots.map(bot => {
      return <BotCard key={bot.id} bot={bot} handleBotClick={this.props.handleBotClick}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.makeBot()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
