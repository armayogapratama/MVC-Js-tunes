const Controller = require("./controllers/controller");

// di bebaskan mau pakai condtional switch case atau if else
/*
const input;

switch (input) {
  case "show":
  case "detail":
  case "trackLength":
  case "addToPlaylist":
  default:
}
*/

const [cmd, ...params] = process.argv.slice(2);

switch (cmd) {
  case "show": {
    Controller.show();
    break;
  }
  case "detail": {
    const [id] = params;
    Controller.detail(+id);
    break;
  }
  case "trackLength": {
    Controller.showTrack();
    break;
  }
  case "addToPlaylist": {
    const [id, name, group, duration] = params;
    Controller.addToPlaylist(+id, name, group, +duration);
    break;
  }
}
