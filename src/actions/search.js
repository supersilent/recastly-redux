import searchYouTube from "../lib/searchYouTube.js";
import changeVideoList from "./videoList.js";
import changeVideo from "./currentVideo.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
import exampleVideoData from "../data/exampleVideoData.js";

var handleVideoSearch = q => {
  //TODO:  Write an asynchronous action to handle a video search!

  return dispatch => {
    // let func = (data) =>{console.log(data); };
    // console.log({ key: YOUTUBE_API_KEY, query: q, max: 5 });
    // searchYouTube( { key: YOUTUBE_API_KEY, query: q }, fusnc);

    // let result = $.get("https://www.googleapis.com/youtube/v3/search", {
    //   part: "snippet",
    //   key: 'AIzaSyA1L5Q2wfAy2Fn_LHonUwmOQDei4HNxgyw',
    //   query: q,
    //   type: "video",
    // }).done(function(data){console.log(data)});

    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, data => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;
