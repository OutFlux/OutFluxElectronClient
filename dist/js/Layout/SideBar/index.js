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

var _Home = require("../Browser/Home");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SideBar extends _react2.default.Component {
  constructor() {
    super();
    this.state = {
      active: "Home",
      activePage: "/Browse/Home"
    };
  }

  componentDidCatch(error, info) {
    Console.log("Error in SideBar Component: ");
    console.log(info);
    Console.error(error);
  }

  changeActiveState(name, page) {
    let oldState = this.state.activePage;
    this.setState({
      active: name,
      activePage: page
    }, () => {
      this.props.LoadPage(this.state.activePage);
    });
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "sideBar" },
      _react2.default.createElement(_SectionBreak2.default, {
        name: "Browse"
      }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Home",
        address: "/Browse/Home",
        active: this.state.active === "Home",
        activateComponent: this.changeActiveState.bind(this)
      }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Featured",
        address: "/Browse/Featured",
        active: this.state.active === "Featured",
        activateComponent: this.changeActiveState.bind(this)
      }),
      _react2.default.createElement(_SectionBreak2.default, { name: "My Music" }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Albums",
        address: "/MyMusic/Albums",
        active: this.state.active === "Albums",
        activateComponent: this.changeActiveState.bind(this)
      }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Artists",
        address: "/MyMusic/Artists",
        active: this.state.active === "Artists",
        activateComponent: this.changeActiveState.bind(this)
      }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Songs",
        address: "/MyMusic/Songs",
        active: this.state.active === "Songs",
        activateComponent: this.changeActiveState.bind(this)
      }),
      _react2.default.createElement(_SectionBreak2.default, { name: "Playlists" }),
      _react2.default.createElement(_SideBarComponent2.default, {
        name: "Create A Playlist",
        address: "/Create/Playlist",
        active: this.state.active === "Create A Playlist",
        activateComponent: this.changeActiveState.bind(this)
      })
    );
  }
}
exports.default = SideBar;
//# sourceMappingURL=index.js.map