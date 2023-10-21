const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.YOUTUBE_API_KEY;

async function getPlaylist(playlistId) {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistId}&key=${apiKey}`
    );
    return data.items;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while retrieving the playlist.');
  }
}

module.exports = {
  getPlaylist,
};
