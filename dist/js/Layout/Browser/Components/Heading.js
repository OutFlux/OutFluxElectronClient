"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HomePage extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    return _react2.default.createElement(
      "h2",
      null,
      this.props.title
    );
  }
}
exports.default = HomePage;
//# sourceMappingURL=Heading.js.map