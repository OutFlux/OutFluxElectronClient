"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SecondaryController extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      "div",
      { className: "secondaryController" },
      _react2.default.createElement(
        "div",
        { className: "queueIconContainer" },
        _react2.default.createElement("i", { className: "fas fa-list playerButton" })
      ),
      _react2.default.createElement(
        "div",
        { className: "volumeBarContainer" },
        _react2.default.createElement("i", { style: { display: this.props.volume <= 10 ? "inline-block" : "none" }, className: "fas fa-volume-off fa-lg" }),
        _react2.default.createElement("i", { style: { display: this.props.volume > 10 && this.props.volume <= 50 ? "inline-block" : "none" }, className: "fas fa-volume-down fa-lg" }),
        _react2.default.createElement("i", { style: { display: this.props.volume > 50 && this.props.volume <= 100 ? "inline-block" : "none" }, className: "fas fa-volume-up fa-lg" }),
        _react2.default.createElement("input", { type: "range", id: "volumeBar", min: "0", max: "100", defaultValue: this.props.volume, onChange: this.props.volumeChange.bind(this) })
      )
    );
  }
}
exports.default = SecondaryController;
//# sourceMappingURL=SecondaryController.js.map