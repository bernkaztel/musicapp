let initialState = {
  playlists: {
    one: {
      owner: "",
      urlimg:
        "https://www.pexels.com/photo/close-up-photography-of-yellow-flowers-1018048/",
      songs: {
        Westcoast: {
          artist: "Lana",
          album: "Who",
          title: "Cares"
        }
      }
    }
  }
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_NEW_LIST":
      let name = action.payload[0];
      return { playlists: { ...state.playlists, [name]: action.payload[1] } };
    case "SAVE_NEW_SONG":
      let copySelectedPlaylist = state.playlists[action.payload[0]];
      let songObject = action.payload[1];
      let copyPlaylistWithSongObject = copySelectedPlaylist.songs;
      copyPlaylistWithSongObject[songObject.title] = songObject;
      return { ...state, [action.payload[0]]: copyPlaylistWithSongObject };
      return state;
    case "REMOVE_SONG":
      return state;
    default:
      return state;
  }
}
