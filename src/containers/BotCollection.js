import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from './YourBotArmy'

class BotCollection extends React.Component {
  //your code here
  constructor (props) {
    super(props)
  }

  getBots = () => {
    return this.props.bots.map((bot) => {
      return <BotCard bot={bot} key={bot.id} addBot={this.props.addBot}/>
    })
  }

 

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.getBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
