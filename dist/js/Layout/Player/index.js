'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TrackInfo = require("./TrackInfo");

var _TrackInfo2 = _interopRequireDefault(_TrackInfo);

var _PlayerController = require("./PlayerController");

var _PlayerController2 = _interopRequireDefault(_PlayerController);

var _SecondaryController = require("./SecondaryController");

var _SecondaryController2 = _interopRequireDefault(_SecondaryController);

var _ProgressBar = require("./ProgressBar");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _base64Arraybuffer = require("base64-arraybuffer");

var b64Encoder = _interopRequireWildcard(_base64Arraybuffer);

var _howler = require("howler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//let mediakeys = require('mediakeys').listen();

// toggle playing state
// media keys
// mediakeys.on('play', () => {
//     player.togglePlay()
// })

// mediakeys.on('next', () => {
// })
// mediakeys.on('back', () => {

// })

// space bar
document.body.onkeydown = event => {
  if (event.keyCode === 32) {
    // spacebar
    player.togglePlay();
  }
};

let music;
let player = {
  // run fn reference to toggle play/pause state
  togglePlay: null,
  next: null,
  prev: null
};
let mounted = false;
let timer;

class Player extends _react2.default.Component {

  constructor(props) {
    super(props);
    this.state = {
      trackMeta: {
        trackName: "Title",
        trackArtist: "Artist",
        trackArtwork: ""
      },
      isPlaying: true,
      repeat: 0,
      shuffle: false,
      volume: 80,
      CurrentPos: 0,
      TrackDuration: null
      // map player to external control (media keys)
    };player.togglePlay = this.toggleIsPlaying.bind(this);
  }

  componentDidMount() {
    mounted = true;
    this.loadFile();
  }

  componentDidCatch(error, info) {
    Console.log("Error in Player Component: ");
    console.log(info);
    Console.error(error);
  }

  volumeChange(e) {
    let volume = e.target.value;
    if (volume !== this.state.volume) {
      this.setState(_ => ({
        volume
      }), _ => {
        _howler.Howler.volume(this.state.volume / 100);
      });
    }
  }

  toggleIsPlaying() {
    this.setState(state => ({
      isPlaying: !state.isPlaying
    }), () => {
      this.props.newTrack();
      if (this.state.isPlaying === true) this.pauseMusic();else this.playMusic();
    });
  }

  playMusic() {
    // increase virtual volume to smoothen resumed play
    while (_howler.Howler.volume < this.state.volume) {
      _howler.Howler.volume(_howler.Howler.volume + 0.01);
    }
    music.play();
  }

  pauseMusic() {
    // decrease virtual volume to smoothen pause
    while (_howler.Howler.volume > 0) {
      _howler.Howler.volume(_howler.Howler.volume - 0.01);
    }
    music.pause();
  }

  toggleRepeat() {
    this.setState(state => ({
      repeat: state.repeat === 0 ? 2 : state.repeat - 1
    }));
  }

  toggleShuffle() {
    this.setState(state => ({
      shuffle: !state.shuffle
    }));
  }

  seekTrack(e) {
    let percentage = e.clientX / document.querySelector(".ProgressBar").offsetWidth;
    music.seek(percentage * this.state.TrackDuration);
    // speeds up seek update
    this.setState(_ => ({
      CurrentPos: percentage * this.state.TrackDuration
    }));
  }

  loadFile() {

    music = new _howler.Howl({
      src: this.props.fileName
    });

    music.once("load", () => {
      this.setState({
        TrackDuration: music.duration()
      }, _ => {
        timer = setInterval(() => {
          this.updateCurrentPos(); /*.bind(this)*/
        }, 500);
      });
    });
    music.once("end", () => {
      this.clearSong.bind(this);
    });
  }

  async updateCurrentPos() {
    if (mounted) {
      await this.setState(_ => ({
        CurrentPos: 0 + music.seek()
      }));
    }
  }

  clearSong() {
    clearInterval(timer);
  }

  render() {
    let meta = this.props.trackMetaData;
    let artwork = meta.picture[0];
    let b64Image = `data:${artwork.format};base64,` + b64Encoder.encode(artwork.data);
    return _react2.default.createElement(
      "div",
      { className: "player" },
      _react2.default.createElement(_ProgressBar2.default, {
        TrackDuration: this.state.TrackDuration,
        CurrentPos: this.state.CurrentPos,
        seekTrack: this.seekTrack.bind(this)
      }),
      _react2.default.createElement(_TrackInfo2.default, {
        trackName: meta.title //{this.state.trackMeta.trackName}
        , trackArtist: meta.artist //{this.state.trackMeta.trackArtist}
        , trackArtwork: b64Image //{this.state.trackMeta.trackArtwork}
      }),
      _react2.default.createElement(_PlayerController2.default, {
        isPlaying: this.state.isPlaying,
        repeat: this.state.repeat,
        shuffle: this.state.shuffle,
        toggleIsPlaying: this.toggleIsPlaying.bind(this),
        toggleRepeat: this.toggleRepeat.bind(this),
        toggleShuffle: this.toggleShuffle.bind(this)
      }),
      _react2.default.createElement(_SecondaryController2.default, {
        volume: this.state.volume,
        volumeChange: this.volumeChange.bind(this)
      })
    );
  }
}
exports.default = Player;
//# sourceMappingURL=index.js.map