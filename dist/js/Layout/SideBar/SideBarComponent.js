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
  activateSelection(e) {
    this.props.activateComponent(this.props.name, this.props.address);
  }

  render() {
    let classes = this.props.active === true ? " active" : "";
    return _react2.default.createElement(
      "div",
      {
        className: "sideBarComponent" + classes,
        id: this.props.name + "Component",
        onClick: this.activateSelection.bind(this)
      },
      _react2.default.createElement(
        "span",
        null,
        this.props.name
      )
    );
  }
}
exports.default = SideBarComponent;
//# sourceMappingURL=SideBarComponent.js.map