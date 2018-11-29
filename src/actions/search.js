import searchYouTube from "../lib/searchYouTube.js";
import changeVideoList from "./videoList.js";
import changeVideo from "./currentVideo.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
import exampleVideoData from "../data/exampleVideoData.js";

var handleVideoSearch = q => {
  //TODO:  Write an asynchronous action to handle a video search!

  return () => {
    // let func = items => {
    //   dispatch(changeVideo(items[0]));
    //   dispatch(changeVideoList(items));
    // };
    // let func = (data) =>{data.items};
    // console.log({ key: YOUTUBE_API_KEY, query: q, max: 5 });
    // searchYouTube({ key: YOUTUBE_API_KEY, query: q }, func);

    // let result = $.get("https://www.googleapis.com/youtube/v3/search", {
    //   part: "snippet",
    //   key: 'AIzaSyCD9P2J_dbes15HGhCaxxEBThIsZnj4fE0',
    //   q: 'test',
    //   type: "video",
    // }).done(function(data){console.log(data)});

    // console.log(result);
    // debugger;
    //
    // searchYouTube({key: YOUTUBE_API_KEY, query: q}, func);
  };
};

export default handleVideoSearch;
