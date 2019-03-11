// action creator

export const SongList = (song) => {
    //action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};