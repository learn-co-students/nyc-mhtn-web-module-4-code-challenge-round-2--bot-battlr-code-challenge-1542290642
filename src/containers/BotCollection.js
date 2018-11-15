import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  mapThroughBots = () => {
    console.log(this.props.bots);
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} key={bot.id}
      addMyBots={this.props.addMyBots}
      toggleExpand={this.props.toggleExpand}/>
    })
  }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.mapThroughBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
