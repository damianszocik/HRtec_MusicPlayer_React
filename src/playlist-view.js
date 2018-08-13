import React from "react";
import ReactDOM from "react-dom";
import ButtonBackground from "./shared-components.js";
import * as songs from "./songs.js";
import * as scrollbar from "./scrollbar.js";

function PlaylistContentItem({artist, title, time}) {
  return (
    <React.Fragment>
    <div className="playlist playlist__content playlist__content__item">
      <div className="playlist playlist__content playlist__content__item playlist__content playlist__content__item__song-details">
        <h6 className="playlist playlist__content playlist__content__item playlist__content__item__song-details playlist__content__item__song-details__artist">{time} | {artist}</h6>
        <h4 className="playlist playlist__content playlist__content__item playlist__content__item__song-details playlist__content__item__song-details__title">{title}</h4>
      </div>
      <a className="playlist playlist__content playlist__content__button playlist__content__button--share" href="#"><img src="https://svgshare.com/i/7mW.svg" /></a>
      <a className="playlist playlist__content playlist__content__button playlist__content__button--favourite" href="#"><img src="https://svgshare.com/i/7nh.svg" /></a>
    </div>
    <hr className="playlist playlist__content playlist__content__divider" />
    </React.Fragment>
  )
}

function PlaylistContent({arr}) {
  return (
    <div className="playlist playlist__content">
      {arr.map((song, index) => (
        <PlaylistContentItem artist={song.artist} title={song.title} time={song.duration} key={song.title} />
      ))}
    </div>
  );
}

function PlaylistHeader() {
  return (
    <div className="playlist playlist__header">
      <ButtonBackground id="back-button" styleName="button button__back" />
      <h4 className="playlist playlist__header__title">Playlist</h4>
    </div>
  );
}

function PlaylistFooter() {
  return (
    <div className="playlist playlist__footer" />
  );
}

function Playlist() {
  return (
    <React.Fragment>
      <PlaylistContent arr={songs.songsList} />
      <PlaylistHeader />
      <PlaylistFooter />
    </React.Fragment>
  );
}

ReactDOM.render(<Playlist />, document.querySelector(".playlist"));
//init scrollbar after rendering playlist
scrollbar.init();