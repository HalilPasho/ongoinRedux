// action creator

export const SelectSong = song => {
  //action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
