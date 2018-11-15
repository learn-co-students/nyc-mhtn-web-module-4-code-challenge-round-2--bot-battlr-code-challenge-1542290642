import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div id="your-army" className="row bot-army-row">
            {
              this.props.yourBots.map(
                botObj => <BotCard key={botObj.id} bot={botObj} clickFunction={this.props.removeBotFromYourBots}
                  yourBots={this.props.yourBots} />
              )
            }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
