const GOOGLE_API_KEY = "AIzaSyC1aV3qiIn2j-SQxAmy0xWgtRchs81qb9I";

export const LIVE_CHAT_COUNT=25

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
  export const SEARCHBAR_SEARCH_API1="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="
  export const SEARCHBAR_SEARCH_API2="&type=video&key=" + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="