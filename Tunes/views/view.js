class View {
  // Tambahkan parameter sesuai kebutuhanmu
  static show(playlists) {
    // release 1
    console.log(playlists);
  }

  static detail(songs) {
    // release 2
    console.table(
      songs.map((song) => {
        return {
          song: song.song,
          group: song.group,
          duration: song.duration,
        };
      })
    );
  }

  static showTrack(playlists) {
    // release 3
    console.log(playlists);
    // lakukan logic disini untuk mengatur isi data yang akan ditampilkan
    // console.table()
  }

  static error(err) {
    console.log(err);
    // console.log(`
    //   =======
    //   ERROR
    //   =======
    // `);
  }

  static success(newSong) {
    // release 4
    console.log(`
      =======
      SUCCESS
      =======
    `);
    console.log(
      `Successfully adding new song to playlist type ${newSong.type}, and remaining available slot for song on playlist: ${newSong}`
    );
  }
}

module.exports = View;
