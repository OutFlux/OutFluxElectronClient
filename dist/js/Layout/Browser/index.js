"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

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

class Browser extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    Console.log("Error in Browser Component: ");
    console.log(info);
    Console.error(error);
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "browser" },
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/home", component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/featured", component: _Featured2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/library/albums", component: _Albums2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/library/artists", component: _Artists2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/library/songs", component: _Songs2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/playlist", component: null })
    );
  }
}
exports.default = Browser; // Browser
//# sourceMappingURL=index.js.map