import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  createBot = () => {
    return this.props.theBots.map(botObj => {
      return <BotCard botSelect={this.props.botSelect} key={botObj.id} botObj={botObj}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.createBot()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
