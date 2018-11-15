import React from "react";

const BotCard = props => {
  let botType;

  // switch (props.botObj.bot_class) {
  //   case "Assault":
  //     botType = <i className="icon military" />;
  //     break;
  //   case "Defender":
  //     botType = <i className="icon shield" />;
  //     break;
  //   case "Support":
  //     botType = <i className="icon ambulance" />;
  //     break;
  //   default:
  //     botType = <div />;
  // }

  return (
    <div className="ui column">
      <div
        className="ui card"
        onClick={() => props.botSelect(props.botObj)}
      >
        <div className="image">
          <img alt="oh no!" src={props.botObj.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.botObj.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.botObj.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.botObj.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.botObj.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.botObj.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
