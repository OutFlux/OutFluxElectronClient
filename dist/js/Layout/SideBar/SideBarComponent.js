"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SideBarComponent extends _react2.default.Component {
  constructor() {
    super();
  }
  // activateSelection(e){
  //   this.props.activateComponent(this.props.name ,this.props.address)
  // }

  render() {
    let classes = `#${this.props.address}` === location.hash ? " active" : "";
    return _react2.default.createElement(
      "div",
      {
        className: "sideBarComponent" + classes,
        id: this.props.name + "Component"

      },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: this.props.address },
        this.props.name
      )
    );
  }
}
exports.default = SideBarComponent;
//# sourceMappingURL=SideBarComponent.js.map