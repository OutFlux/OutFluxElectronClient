"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AlbumCard = require("./Components/AlbumCard");

var _AlbumCard2 = _interopRequireDefault(_AlbumCard);

var _SlideShow = require("./Components/SlideShow");

var _SlideShow2 = _interopRequireDefault(_SlideShow);

var _HorizontalList = require("./Components/HorizontalList");

var _HorizontalList2 = _interopRequireDefault(_HorizontalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fs = require('fs');
let testData = JSON.parse(fs.readFileSync('src/js/testData.json', 'utf8'));

class HomePage extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    console.log(testData);
    // testData.FeaturedAlbums.forEach(el => {
    //   <AlbumCard AlbumName={el.AlbumName} AlbumArtist={el.AlbumArtist} AlbumArt={el.AlbumArt}/>
    // })
    let cardSet = testData.FeaturedAlbums.map(album => _react2.default.createElement(_AlbumCard2.default, {
      key: `HomePage-${album.AlbumName}-${album.AlbumArtist}`,
      AlbumName: album.AlbumName,
      AlbumArtist: album.AlbumArtist,
      AlbumArt: album.AlbumArt
    }));
    console.log(cardSet);

    return _react2.default.createElement(
      "div",
      { className: "webPage", id: "Home" },
      _react2.default.createElement(_SlideShow2.default, null),
      _react2.default.createElement(
        _HorizontalList2.default,
        null,
        cardSet
      )
    );
  }
}
exports.default = HomePage;
//# sourceMappingURL=Home.js.map