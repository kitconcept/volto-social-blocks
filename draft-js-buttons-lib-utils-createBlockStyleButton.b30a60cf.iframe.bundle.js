(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/draft-js-buttons/lib/utils/createBlockStyleButton.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_draftJs=__webpack_require__("./node_modules/draft-js/lib/Draft.js"),_clsx2=_interopRequireDefault(__webpack_require__("./node_modules/clsx/dist/clsx.m.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}exports.default=function(_ref){var blockType=_ref.blockType,children=_ref.children;return function(_Component){function BlockStyleButton(){var _ref2,_temp,_this;_classCallCheck(this,BlockStyleButton);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_ref2=BlockStyleButton.__proto__||Object.getPrototypeOf(BlockStyleButton)).call.apply(_ref2,[this].concat(args))),_this.toggleStyle=function(event){event.preventDefault(),_this.props.setEditorState(_draftJs.RichUtils.toggleBlockType(_this.props.getEditorState(),blockType))},_this.preventBubblingUp=function(event){event.preventDefault()},_this.blockTypeIsActive=function(){if(!_this.props.getEditorState)return!1;var editorState=_this.props.getEditorState();return editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey()).getType()===blockType},_possibleConstructorReturn(_this,_temp)}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(BlockStyleButton,_Component),_createClass(BlockStyleButton,[{key:"render",value:function render(){var theme=this.props.theme,className=this.blockTypeIsActive()?(0,_clsx2.default)(theme.button,theme.active):theme.button;return _react2.default.createElement("div",{className:theme.buttonWrapper,onMouseDown:this.preventBubblingUp},_react2.default.createElement("button",{className:className,onClick:this.toggleStyle,type:"button",children:children}))}}]),BlockStyleButton}(_react.Component)}}}]);