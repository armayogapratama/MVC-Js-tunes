const fs = require("fs");
const Controller = require("../controllers/controller");
const Class = require("./class");
const PlaylistFactory = require("./class");

class Model {
  // Tambahkan parameter sesuai kebutuhanmu
  static async findAll() {
    // Release 1 & Release 3
    const playlists = await fs.promises.readFile("./data.json", "utf-8");
    const parsedPlaylists = JSON.parse(playlists);
    const newPlaylists = PlaylistFactory.createBulkPlaylist(parsedPlaylists);
    return newPlaylists;
  }

  static async findOne(id) {
    // Release 2
    const playlists = await this.findAll();
    const indexPlaylist = playlists.findIndex((playlist) => playlist.id === id);
    const playlist = playlists[indexPlaylist].songs.map((song) => {
      return {
        song: song.name,
        group: song.group,
        duration: song.durationInMinute(),
      };
    });
    return playlist;
  }

  static async addSongToPlaylist(id, name, group, duration) {
    // Release 4
    const playlists = await this.findAll();
    const indexPlaylist = playlists.findIndex((playlist) => playlist.id === id);
    if (indexPlaylist === -1) {
      throw new Error(`Invalid playlist ID`);
    }
    const newSong = PlaylistFactory.createSong(name, group, duration);
    if (
      playlists[indexPlaylist].songs.length === playlists[indexPlaylist].limit
    ) {
      throw new Error(`Songs of playlist are maximum total`);
    }
    playlists[indexPlaylist].songs.push(newSong);
    this.writeData(playlists);
    return playlists[indexPlaylist];
  }

  static async writeData(playlists) {
    // Release 4
    const newPlaylists = playlists.map((playlist) => {
      return {
        id: playlist.id,
        name: playlist.name,
        type: playlist.type,
        songs: playlist.songs,
        limit: playlist.limit,
      };
    });
    const stringifyPlaylists = JSON.stringify(newPlaylists, null, 2);
    await fs.promises.writeFile("./data.json", stringifyPlaylists);
  }

  // Tambahkan method lain sesuai kebutuhanmu
  // static async trackLenght() {
  //   const playlists = await this.findAll();
  //   return playlists;
  // }
}

module.exports = Model;
