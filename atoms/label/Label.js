"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../div/Div"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Label = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({
    ref: ref,
    tag: "label"
  }, props));
});
Label.defaultProps = {
  flexWrap: "wrap",
  textSize: "body",
  d: "flex",
  align: "flex-start",
  cursor: "pointer",
  tabIndex: "0"
};
var _default = Label;
exports["default"] = _default;