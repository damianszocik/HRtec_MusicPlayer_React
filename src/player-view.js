import React from "react";
import ReactDOM from "react-dom";
import * as songs from "./songs.js";
import ButtonBackground from "./shared-components.js";


//buttons with just image
function ButtonImg({id, styleName, imgSrc}) {
  return (
    <a id={id} className={styleName} href="#">
    <img src={imgSrc} />
  </a>
  );
}
//play-pause button
class PlayPauseButton extends React.Component {
  constructor() {
    super();
    this.state = {additionalClass: ""};
  }
  render() {
    return (
      <div className="play-pause-button" onClick={this.clickHandler.bind(this)}>
        <div className="play-pause-button__border"></div>
        <div className="play-pause-button__bar"></div>
        <div className={`play-pause-button__button ${this.state.additionalClass}`}></div>
      </div>
    )
  }
    clickHandler() {
      if (this.state.additionalClass == "") {
        this.setState({
        additionalClass: "play-pause-button__button--active"
      });
      } else {
        this.setState({
          additionalClass: ""
        });
      }
    }
}

function UpperControls() {
  return (
    <div className="cover-art cover-art__upper-controls">
      <ButtonImg styleName="cover-art cover-art__upper-controls cover-art__upper-controls__button" imgSrc="assets/refresh2.svg" />
      <ButtonImg styleName="cover-art cover-art__upper-controls cover-art__upper-controls__button cover-art__upper-controls__button--center" imgSrc="assets/shuffle.svg" />
      <ButtonImg styleName="cover-art cover-art__upper-controls cover-art__upper-controls__button" imgSrc="assets/refresh.svg" />
      <ButtonImg id="hamburger" styleName="cover-art cover-art__upper-controls cover-art__upper-controls__hamburger" imgSrc="assets/menu.svg" />
    </div>
  );
}

function CoverArtInfo() {
  return (
    <div className="cover-art cover-art__info">
        <h4 className="cover-art cover-art__info cover-art__info__text cover-art__info__text--artist">Icona Pop</h4>
        <h5 id="player-title" className="cover-art cover-art__info cover-art__info__text">Still Don’t Know</h5>
      </div>
  );
}

function CoverArt() {
  return(
    <div className="cover-art">
    <UpperControls />
    <CoverArtInfo />
    </div>
  );
}


class PlayerControls extends React.Component {
  constructor() {
    super();
    this.state = {background: "linear-gradient(to right, white 0%, white $slider-position, #ed5e74 $slider-position, $color-pink 100%)"};
  }
  render() {
    return (
      <div className="player-controls">
      <input style={this.state} autoComplete="off" type="range" min={1} max={100} defaultValue={75} className="slider" onInput={this.colorUpdate.bind(this)}/>
      <ButtonBackground styleName="button button__share" />
      <ButtonBackground styleName="button button__previous" />
      <PlayPauseButton />
      <ButtonBackground styleName="button button__next" />
      <ButtonBackground styleName="button button__favourite" />
    </div>
    );
  }
  colorUpdate(event) {
    const colorLeft = "white";
    const colorRight = "#ed5e74";
    this.setState({
      background: `linear-gradient(to right, ${colorLeft} 0%, ${colorLeft} ${event.target.value}%, ${colorRight} ${event.target.value}%, ${colorRight} 100%)`
    });
  }
}

function Player() {
  return (
    <React.Fragment>
      <CoverArt />
      <PlayerControls />
    </React.Fragment>
  );
}

ReactDOM.render(<Player />, document.querySelector(".player"));

songs.select();
songs.shift();
