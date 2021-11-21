import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "04:12" },
        { title: "Macarena", duration: "02:18" },
        { title: "All Start", duration: "03:19" },
        { title: "I Want It That Way", duration: "03:18" }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    //reducer should not change the original data, it should return a new data
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});