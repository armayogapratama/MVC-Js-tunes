const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  // Tambahkan parameter sesuai kebutuhanmu
  static async show() {
    // release 1
    try {
      const playlists = await Model.findAll();
      View.show(playlists);
    } catch (err) {
      View.error(err);
    }
  }

  static async detail(id) {
    // release 2
    try {
      const songs = await Model.findOne(id);
      View.detail(songs);
    } catch (err) {
      View.error(err);
    }
  }

  static async showTrack() {
    // release 3
    try {
      const playlists = await Model.findAll();
      View.showTrack(playlists);
    } catch (err) {
      View.error(err);
    }
  }

  static async addToPlaylist(id, name, group, duration) {
    // release 4
    try {
      const newSong = await Model.addSongToPlaylist(id, name, group, duration);
      View.success(newSong);
    } catch (err) {
      View.error(err);
    }
  }

  // Tambahkan method lain sesuai kebutuhanmu
}

module.exports = Controller;
