"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HorizontalList extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "horizontalList" },
      _react2.default.createElement("div", { className: "leftArrow" }),
      _react2.default.createElement(
        "div",
        { className: "objects" },
        this.props.children
      ),
      _react2.default.createElement("div", { className: "rightArrow" })
    );
  }
}
exports.default = HorizontalList;
//# sourceMappingURL=HorizontalList.js.map