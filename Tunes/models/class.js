class Playlist {
  #limit;
  constructor(id, name, type, songs = [], limit) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.songs = songs;
    this.#limit = limit;
  }

  trackLength() {}

  get limit() {
    return this.#limit;
  }

  set limit(value) {
    this.#limit = value;
  }
}

class Mythic extends Playlist {
  constructor(id, name, songs) {
    super(id, name, "Mythic", songs, 10);
  }
}

class Legend extends Playlist {
  constructor(id, name, songs) {
    super(id, name, "Legend", songs, 6);
  }
}

class Epic extends Playlist {
  constructor(id, name, songs) {
    super(id, name, "Epic", songs, 4);
  }
}

class Song {
  constructor(name, group, duration) {
    this.name = name;
    this.group = group;
    this.duration = duration;
  }

  durationInMinute() {
    const menit = Math.floor(this.duration / 60);
    const detik = this.duration % 60;
    if (this.duration % 60 === 0) {
      const detikToFixed = detik.toString() + `0`;
      return (this.duration = `${menit}:${detikToFixed}`);
    }
    return (this.duration = `${menit}:${detik}`);
  }
}

class PlaylistFactory {
  static createPlaylist(id, name, type, songs, limit) {
    const instanceSongs = this.createBulkSong(songs);
    if (type === "Mythic") {
      return new Mythic(id, name, instanceSongs);
    }
    if (type === "Legend") {
      return new Legend(id, name, instanceSongs);
    }
    if (type === "Epic") {
      return new Epic(id, name, instanceSongs);
    }
  }

  static createBulkPlaylist(playlists) {
    return playlists.map((playlist) => {
      const { id, name, type, songs, limit } = playlist;
      return this.createPlaylist(id, name, type, songs, limit);
    });
  }

  static createSong(name, group, duration) {
    return new Song(name, group, duration);
  }

  static createBulkSong(songs) {
    return songs.map((song) => {
      const { name, group, duration } = song;
      return this.createSong(name, group, duration);
    });
  }
}

module.exports = PlaylistFactory;
