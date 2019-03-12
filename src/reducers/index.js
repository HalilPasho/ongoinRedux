import { combineReducers } from "redux";

const SongReducer = () => {
  return [
    { title: "Macarena", duration: "3.45" },
    { title: "8 Miles run", duration: "3.12" },
    { title: "Dream on", duration: "2.45" },
    { title: "Whatever", duration: "4.31" },
    { title: "Sing for the moment", duration: "5.12" }
  ];
};

const SongReducerSelector = (songSelected = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return songSelected;
};

export default combineReducers({
  songs: SongReducer,
  selectedSong: SongReducerSelector
});
