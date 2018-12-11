"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Home = require("./Home");

var _Home2 = _interopRequireDefault(_Home);

var _Featured = require("./Featured");

var _Featured2 = _interopRequireDefault(_Featured);

var _Albums = require("./Albums");

var _Albums2 = _interopRequireDefault(_Albums);

var _Artists = require("./Artists");

var _Artists2 = _interopRequireDefault(_Artists);

var _Songs = require("./Songs");

var _Songs2 = _interopRequireDefault(_Songs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Browser
class Browser extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    Console.log("Error in Browser Component: ");
    console.log(info);
    Console.error(error);
  }

  dissasembleVirtualURL(_path) {
    // console.log(_path)

    let Path;
    if (!!_path) {
      Path = _path;
    } else {
      console.log("URL ERROR: " + "invalid URL");
      console.log(_path);
    }

    let pageShortcuts = {
      Browse: {
        Home: _react2.default.createElement(_Home2.default, null),
        Featured: _react2.default.createElement(_Featured2.default, null)
      },
      MyMusic: {
        Albums: _react2.default.createElement(_Albums2.default, null),
        Artists: _react2.default.createElement(_Artists2.default, null),
        Songs: _react2.default.createElement(_Songs2.default, null)
      },
      Create: {
        Playlist: "Creating Playlist..."
      }
    };

    let pathArray = Path.split("/");

    let component = pageShortcuts[pathArray[1]][pathArray[2]];

    return component;
  }

  render() {
    let currentPage = this.props.CurrentPage;
    let page = this.dissasembleVirtualURL(currentPage);
    return _react2.default.createElement(
      "div",
      { className: "browser" },
      page
    );
  }
}
exports.default = Browser;
//# sourceMappingURL=index.js.map