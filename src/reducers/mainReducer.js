let initialState={
  playlists: {
    one:{
      urlimg: "https://www.pexels.com/photo/close-up-photography-of-yellow-flowers-1018048/"
    }
  },
}


export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_NEW_LIST":
    console.log(action)
    let parts = action.payload.split("_");
    let name = parts[0];
    let urlimg = parts[1];
    let newPlaylist = {urlimg: {urlimg}}
    return {playlists: {...state.playlists, [name] : newPlaylist }}
    case "SAVE_NEW_SONG":
      return state;
    case "REMOVE_SONG":
      return state;
    default:
      return state;
  }
}
