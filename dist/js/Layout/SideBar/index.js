"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SideBarComponent = require("./SideBarComponent");

var _SideBarComponent2 = _interopRequireDefault(_SideBarComponent);

var _SectionBreak = require("./SectionBreak");

var _SectionBreak2 = _interopRequireDefault(_SectionBreak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SideBar extends _react2.default.Component {
  constructor() {
    super();
    // this.state = {
    //   active: "Home",
    //   activePage: "/"
    // }
  }

  componentDidCatch(error, info) {
    Console.log("Error in SideBar Component: ");
    console.log(info);
    Console.error(error);
  }

  // changeActiveState(name, page){
  //   let oldState = this.state.activePage
  //   this.setState({
  //     active: name,
  //     activePage: page
  //   }, () => {
  //     this.props.LoadPage(this.state.activePage)
  //   })
  // }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "sideBar" },
      _react2.default.createElement(_SectionBreak2.default, {
        name: "Browse"
      }),
      _react2.default.createElement(_SideBarComponent2.default, { name: "Home", address: "/home" }),
      _react2.default.createElement(_SideBarComponent2.default, { name: "Featured", address: "/featured" }),
      _react2.default.createElement(_SectionBreak2.default, { name: "Library" }),
      _react2.default.createElement(_SideBarComponent2.default, { name: "Albums", address: "/library/albums" }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Artists",
        address: "/library/artists" }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Songs",
        address: "/library/songs" }),
      _react2.default.createElement(_SectionBreak2.default, { name: "Playlists" }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Create A Playlist",
        address: "/playlist/create-new" })
    );
  }
}
exports.default = SideBar;
//# sourceMappingURL=index.js.map