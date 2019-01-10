"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SideBarComponent extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        className: "sideBarSectionBreak",
        id: this.props.name + "SectionBreak",
        style: this.props.name === "Browse" ? {
          paddingTop: "0"
        } : {}
      },
      _react2.default.createElement(
        "a",
        null,
        this.props.name
      )
    );
  }
}
exports.default = SideBarComponent;
//# sourceMappingURL=SectionBreak.js.map