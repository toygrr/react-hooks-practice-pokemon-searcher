import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ image, hp, name }) {
  const [imageSource, setImageSource] = useState(image.front);
  function handleClick(e) {
    setImageSource(
      e.target.src !== image.back
        ? (e.target.src = image.back)
        : (e.target.src = image.front)
    );
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleClick} alt="oh no!" src={imageSource} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
