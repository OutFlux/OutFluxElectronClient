"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _musicMetadata = require("music-metadata");

var mm = _interopRequireWildcard(_musicMetadata);

var _SideBar = require("./SideBar");

var _SideBar2 = _interopRequireDefault(_SideBar);

var _Browser = require("./Browser");

var _Browser2 = _interopRequireDefault(_Browser);

var _Player = require("./Player");

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Layout extends _react2.default.Component {
  constructor() {
    super();
    this.state = {
      player: {
        trackMetaData: {
          title: "None",
          artist: "None",
          picture: {
            0: {}
          }
        },
        rawMeta: {}
      },
      browser: {
        CurrentPage: "/Browse/Home"
      }
    };
  }

  newTrack() {
    mm.parseFile(this.props.fileName, { native: true }).then(meta => {
      this.setState(_ => ({
        player: {
          trackMetaData: meta.common,
          rawMeta: meta
        }
      }));
      // console.log(meta)
    }).catch(e => console.error(e.message));
  }

  loadPage(page) {
    this.setState(_ => ({
      browser: {
        CurrentPage: page
      }
    }));
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "window" },
        _react2.default.createElement(_SideBar2.default, {
          LoadPage: this.loadPage.bind(this)
        }),
        _react2.default.createElement(_Browser2.default, {
          CurrentPage: this.state.browser.CurrentPage
        })
      ),
      _react2.default.createElement(_Player2.default, {
        trackMetaData: this.state.player.trackMetaData,
        newTrack: this.newTrack.bind(this),
        fileName: this.props.fileName
      })
    );
  }
}

exports.default = Layout; // layout

module.exports = Layout;
//# sourceMappingURL=index.js.map