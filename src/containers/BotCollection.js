import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
    const mapCollection = this.props.botCollection.map(bot =>(
      <BotCard
        key={bot.id}
        id={bot.id}
        bot={bot}
        handleClick={this.props.addToArmy}/>
    ))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {mapCollection}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
