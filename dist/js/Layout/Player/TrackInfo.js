"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TrackInfo extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "trackInfo" },
      _react2.default.createElement(
        "div",
        { className: "trackArt" },
        _react2.default.createElement("img", { src: this.props.trackArtwork, alt: "" })
      ),
      _react2.default.createElement(
        "div",
        { id: "trackData" },
        _react2.default.createElement(
          "div",
          { className: "trackTitle" },
          _react2.default.createElement(
            "span",
            null,
            this.props.trackName
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "trackArtist" },
          _react2.default.createElement(
            "span",
            null,
            this.props.trackArtist
          )
        )
      )
    );
  }
}
exports.default = TrackInfo;
//# sourceMappingURL=TrackInfo.js.map