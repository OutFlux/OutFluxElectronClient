"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AlbumCard extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "albumCard", id: `album_${this.props.AlbumName}-artist_${this.props.AlbumArtist}` },
      _react2.default.createElement(
        "div",
        { className: "imgHolder" },
        _react2.default.createElement("img", { src: this.props.AlbumArt, alt: this.props.AlbumName })
      ),
      _react2.default.createElement(
        "div",
        { className: "cardMeta" },
        _react2.default.createElement(
          "span",
          { className: "albumName" },
          this.props.AlbumName
        ),
        _react2.default.createElement(
          "span",
          { className: "albumArtist" },
          this.props.AlbumArtist
        )
      )
    );
  }
}
exports.default = AlbumCard;
//# sourceMappingURL=AlbumCard.js.map