import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  yourArmy = () => {
    return this.props.selectedBot.map(botObj => {
      return <BotCard botSelect ={this.props.removeBot}
         key={botObj.id} botObj={botObj}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.yourArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
