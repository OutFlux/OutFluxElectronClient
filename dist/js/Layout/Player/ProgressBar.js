"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProgressBar extends _react2.default.Component {
  constructor() {
    super();
  }

  render() {
    let progressAmount = 1;
    progressAmount = progressAmount === NaN ? 0.1 : this.props.CurrentPos / this.props.TrackDuration * 100;
    //console.log({progressAmount, CurrentPos:this.props.CurrentPos, duration:this.props.TrackDuration });

    return _react2.default.createElement(
      "div",
      {
        className: "ProgressBar",
        onClick: this.props.seekTrack.bind(this)
      },
      _react2.default.createElement(
        "span",
        {
          className: "CurrentProgress",
          style: {
            width: progressAmount.toString() + "%"
          }
        },
        _react2.default.createElement("span", { className: "SliderHead" })
      )
    );
  }
}
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map