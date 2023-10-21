// routes.js
const express = require('express');
const { getPlaylist } = require('./youtube');

const router = express.Router();

// Existing endpoint to get playlist by ID
router.get('/playlist/:playlistId', async (req, res) => {
  try {
    const { playlistId } = req.params;
    const items = await getPlaylist(playlistId);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// New endpoint to get a predefined lofi playlist
router.get('/lofi', async (req, res) => {
  try {
    const playlistId = 'PL6fhs6TSspZv0F0YgsG-p7Mn189CU2XKS';
    const items = await getPlaylist(playlistId);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
