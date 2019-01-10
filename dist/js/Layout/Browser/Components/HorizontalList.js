"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Heading = require("./Heading");

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HorizontalList extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "list" },
      _react2.default.createElement(
        "h2",
        null,
        _react2.default.createElement(
          "span",
          null,
          this.props.title
        ),
        _react2.default.createElement(
          "div",
          { className: "rightArrow" },
          _react2.default.createElement("i", { className: "fas fa-angle-right" })
        ),
        _react2.default.createElement(
          "div",
          { className: "leftArrow" },
          _react2.default.createElement("i", { className: "fas fa-angle-left" })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "horizontalList" },
        _react2.default.createElement(
          "div",
          { className: "listObjects" },
          this.props.children
        )
      )
    );
  }
}
exports.default = HorizontalList;
//# sourceMappingURL=HorizontalList.js.map