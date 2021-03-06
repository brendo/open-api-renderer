webpackJsonp([1],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(319);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(726);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrow = __webpack_require__(746);

var Indicator = function (_PureComponent) {
  (0, _inherits3.default)(Indicator, _PureComponent);

  function Indicator() {
    (0, _classCallCheck3.default)(this, Indicator);
    return (0, _possibleConstructorReturn3.default)(this, (Indicator.__proto__ || Object.getPrototypeOf(Indicator)).apply(this, arguments));
  }

  (0, _createClass3.default)(Indicator, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          direction = _props.direction,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('indicator', className, (0, _defineProperty3.default)({}, 'indicator--' + direction, direction)) },
        _react2.default.createElement('img', { src: arrow, alt: '', title: 'arrow' })
      );
    }
  }]);
  return Indicator;
}(_react.PureComponent);

exports.default = Indicator;


Indicator.propTypes = {
  direction: _propTypes2.default.string,
  className: _propTypes2.default.string
};

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BodySchema = __webpack_require__(160);

var _BodySchema2 = _interopRequireDefault(_BodySchema);

var _BodySchemaSwitcher = __webpack_require__(276);

var _BodySchemaSwitcher2 = _interopRequireDefault(_BodySchemaSwitcher);

var _Example = __webpack_require__(279);

var _Example2 = _interopRequireDefault(_Example);

__webpack_require__(719);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodyContent = function (_Component) {
  (0, _inherits3.default)(BodyContent, _Component);

  function BodyContent(props) {
    (0, _classCallCheck3.default)(this, BodyContent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BodyContent.__proto__ || Object.getPrototypeOf(BodyContent)).call(this, props));

    _this.setBodySchemaIndex = _this.setBodySchemaIndex.bind(_this);

    _this.state = {
      tab: 'schema',
      index: 0
    };
    return _this;
  }

  (0, _createClass3.default)(BodyContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          examples = _props.examples;
      var _state = this.state,
          tab = _state.tab,
          index = _state.index;


      return _react2.default.createElement(
        'div',
        { className: 'body-content' },
        schema && this.renderTabs(schema, examples),
        tab === 'schema' && this.renderSchema(schema, index),
        tab === 'example' && this.renderExamples(examples)
      );
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs(includeSchema, includeExample) {
      var currentTab = this.state.tab;
      return _react2.default.createElement(
        'div',
        { className: 'body-content-tabs' },
        includeSchema && this.renderSchemaTab(currentTab),
        includeExample && this.renderExamplesTab(currentTab)
      );
    }
  }, {
    key: 'renderSchemaTab',
    value: function renderSchemaTab(currentTab) {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          role: 'button',
          onClick: function onClick() {
            return _this2.setState({ tab: 'schema' });
          },
          className: (0, _classnames2.default)({
            active: currentTab === 'schema'
          })
        },
        'Schema'
      );
    }
  }, {
    key: 'renderExamplesTab',
    value: function renderExamplesTab(currentTab) {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          role: 'button',
          onClick: function onClick() {
            return _this3.setState({ tab: 'example' });
          },
          className: (0, _classnames2.default)({
            active: currentTab === 'example'
          })
        },
        'Example'
      );
    }
  }, {
    key: 'renderSchema',
    value: function renderSchema(schema, index) {
      if (!schema) {
        return null;
      }

      // Peek at first item of `schema` to see if it's an array of possible
      // schemas (eg. oneOf).
      if (Array.isArray(schema[0])) {
        return _react2.default.createElement(
          'div',
          { className: 'body-content-switcher' },
          _react2.default.createElement(_BodySchemaSwitcher2.default, { options: schema, onChange: this.setBodySchemaIndex }),
          _react2.default.createElement(_BodySchema2.default, { properties: schema[index], styleVariation: 'odd' })
        );
      }

      return _react2.default.createElement(_BodySchema2.default, { properties: schema, styleVariation: 'odd' });
    }
  }, {
    key: 'renderExamples',
    value: function renderExamples(examples) {
      return _react2.default.createElement(_Example2.default, { examples: examples });
    }
  }, {
    key: 'setBodySchemaIndex',
    value: function setBodySchemaIndex(bodySchemaIndex) {
      var index = this.state.index;


      if (bodySchemaIndex !== index) {
        this.setState({ index: bodySchemaIndex });
      }
    }
  }]);
  return BodyContent;
}(_react.Component);

exports.default = BodyContent;


BodyContent.propTypes = {
  schema: _propTypes2.default.array,
  examples: _propTypes2.default.array
};

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(79);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = __webpack_require__(608);

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Property = __webpack_require__(288);

var _Property2 = _interopRequireDefault(_Property);

__webpack_require__(720);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodySchema = function (_Component) {
  (0, _inherits3.default)(BodySchema, _Component);

  function BodySchema(props) {
    (0, _classCallCheck3.default)(this, BodySchema);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BodySchema.__proto__ || Object.getPrototypeOf(BodySchema)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      expandedProp: []
    };
    return _this;
  }

  (0, _createClass3.default)(BodySchema, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          properties = _props.properties,
          styleVariation = _props.styleVariation;


      if (!properties) {
        return null;
      }

      var expandedProp = this.state.expandedProp;


      return _react2.default.createElement(
        'table',
        { className: (0, _classnames2.default)('body-schema', 'body-schema--' + styleVariation) },
        _react2.default.createElement(
          'tbody',
          null,
          properties.map(function (property, i) {
            var isLast = properties.length === i + 1;

            if (property.properties === undefined) {
              return _this2.renderPropertyRow(property, isLast);
            }

            var isPropertyArray = property.type.includes('array');
            var isPropertyObject = property.type.includes('object');

            if (isPropertyArray || isPropertyObject) {
              if (expandedProp.includes(property.name)) {
                return (0, _reactAddonsCreateFragment2.default)({
                  property: _this2.renderPropertyRow(property, isLast, true, true),
                  subset: _this2.renderSubsetProperties(property, isPropertyArray)
                });
              }

              return _this2.renderPropertyRow(property, isLast, false, true);
            }
          })
        )
      );
    }
  }, {
    key: 'renderPropertyRow',
    value: function renderPropertyRow(property, isLast) {
      var isOpen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var hasSubset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return _react2.default.createElement(_Property2.default, {
        key: property.name,
        name: property.name,
        type: property.type,
        subtype: property.subtype,
        description: property.description,
        enumValues: property.enum,
        defaultValue: property.defaultValue,
        constraints: property.constraints,
        onClick: hasSubset ? this.onClick : undefined,
        isRequired: property.required,
        isOpen: isOpen,
        isLast: isLast
      });
    }
  }, {
    key: 'renderSubsetProperties',
    value: function renderSubsetProperties(property) {
      var isArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var styleVariation = this.props.styleVariation;

      var nextStyleVariation = styleVariation === 'even' ? 'odd' : 'even';

      return _react2.default.createElement(
        'tr',
        { className: 'body-schema-subset' },
        _react2.default.createElement(
          'td',
          { colSpan: '100' },
          isArray && _react2.default.createElement(
            'div',
            null,
            'Array ['
          ),
          _react2.default.createElement(BodySchema, {
            key: property.name + '-properties',
            properties: property.properties,
            styleVariation: nextStyleVariation
          }),
          isArray && _react2.default.createElement(
            'div',
            null,
            ']'
          )
        )
      );
    }

    /**
     * Responsible for updating the state of all properties that
     * have been expanded by the user.
     *
     * @param {string} propertyName
     */

  }, {
    key: 'onClick',
    value: function onClick(propertyName) {
      var expandedProp = this.state.expandedProp;


      if (expandedProp.includes(propertyName)) {
        var newExpanded = expandedProp.filter(function (prop) {
          return prop !== propertyName;
        });
        this.setState({ expandedProp: newExpanded });
      } else {
        this.setState({ expandedProp: [].concat((0, _toConsumableArray3.default)(expandedProp), [propertyName]) });
      }
    }
  }]);
  return BodySchema;
}(_react.Component);

exports.default = BodySchema;


BodySchema.propTypes = {
  properties: _propTypes2.default.array,
  styleVariation: _propTypes2.default.oneOf(['odd', 'even'])
};

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(231);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Demo = __webpack_require__(295);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = document.body.appendChild(document.createElement('div'));

_reactDom2.default.render(_react2.default.createElement(_Demo.Demo, null), dom);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(721);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodySchemaSwitcher = function (_Component) {
  (0, _inherits3.default)(BodySchemaSwitcher, _Component);

  function BodySchemaSwitcher(props) {
    (0, _classCallCheck3.default)(this, BodySchemaSwitcher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BodySchemaSwitcher.__proto__ || Object.getPrototypeOf(BodySchemaSwitcher)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(BodySchemaSwitcher, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.options;


      return _react2.default.createElement(
        'form',
        { className: 'body-schema-switcher-form' },
        _react2.default.createElement(
          'label',
          null,
          'This schema can be fulfilled by multiple options: '
        ),
        _react2.default.createElement(
          'select',
          { onChange: this.handleChange },
          options.map(function (option, i) {
            return _react2.default.createElement(
              'option',
              { key: i, value: i },
              'Option ' + (i + 1)
            );
          })
        )
      );
    }
  }]);
  return BodySchemaSwitcher;
}(_react.Component);

exports.default = BodySchemaSwitcher;


BodySchemaSwitcher.propTypes = {
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func
};

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(722);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentContainer = function (_Component) {
  (0, _inherits3.default)(ContentContainer, _Component);

  function ContentContainer() {
    (0, _classCallCheck3.default)(this, ContentContainer);
    return (0, _possibleConstructorReturn3.default)(this, (ContentContainer.__proto__ || Object.getPrototypeOf(ContentContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContentContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content-container' },
        this.props.children
      );
    }
  }]);
  return ContentContainer;
}(_react.Component);

exports.default = ContentContainer;


ContentContainer.propTypes = {
  children: _propTypes2.default.any
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(718);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CopyButton = function (_Component) {
  (0, _inherits3.default)(CopyButton, _Component);

  function CopyButton(props) {
    (0, _classCallCheck3.default)(this, CopyButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CopyButton.__proto__ || Object.getPrototypeOf(CopyButton)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.onMouseOver = _this.onMouseOver.bind(_this);

    _this.state = {
      tooltip: _this.props.tooltip
    };
    return _this;
  }

  (0, _createClass3.default)(CopyButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { 'data-balloon': this.state.tooltip, 'data-balloon-pos': 'up',
          onClick: this.onClick,
          onMouseOver: this.onMouseOver
        },
        'Copy'
      );
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      this.setState({ tooltip: 'Copied' });

      this.props.onCopyClick(e);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(e) {
      this.setState({ tooltip: this.props.tooltip });
    }
  }]);
  return CopyButton;
}(_react.Component);

exports.default = CopyButton;


CopyButton.propTypes = {
  onCopyClick: _propTypes2.default.func,
  tooltip: _propTypes2.default.string
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJsonView = __webpack_require__(673);

var _reactJsonView2 = _interopRequireDefault(_reactJsonView);

var _copyToClipboard = __webpack_require__(324);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var _CopyButton = __webpack_require__(278);

var _CopyButton2 = _interopRequireDefault(_CopyButton);

__webpack_require__(724);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Example = function (_Component) {
  (0, _inherits3.default)(Example, _Component);

  function Example(props) {
    (0, _classCallCheck3.default)(this, Example);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.onCopyClick = _this.onCopyClick.bind(_this);

    _this.state = {
      hovered: false,
      collapseAll: false
    };
    return _this;
  }

  (0, _createClass3.default)(Example, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var examples = this.props.examples;

      var example = void 0;

      // TODO: Handle multiple examples
      if (examples && examples.length) {
        example = examples[0];
      }

      var isSimple = typeof example === 'string';

      if (!example) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'body-content-example',
          onMouseEnter: function onMouseEnter() {
            return _this2.setState({ hovered: true });
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({ hovered: false });
          }
        },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('action-buttons', {
              hovered: this.state.hovered
            }) },
          _react2.default.createElement(_CopyButton2.default, { onCopyClick: this.onCopyClick, tooltip: 'Copy to Clipboard' }),
          !isSimple && _react2.default.createElement(
            'span',
            { onClick: function onClick() {
                return _this2.setState({ collapseAll: false });
              } },
            'Expand All'
          ),
          !isSimple && _react2.default.createElement(
            'span',
            { onClick: function onClick() {
                return _this2.setState({ collapseAll: true });
              } },
            'Collapse All'
          )
        ),
        isSimple ? { example: example } : _react2.default.createElement(_reactJsonView2.default, {
          src: example,
          theme: 'chalk',
          displayDataTypes: false,
          displayObjectSize: false,
          collapsed: this.state.collapseAll,
          enableClipboard: false
        })
      );
    }
  }, {
    key: 'onCopyClick',
    value: function onCopyClick() {
      (0, _copyToClipboard2.default)(JSON.stringify(this.props.examples[0], null, 2));
    }
  }]);
  return Example;
}(_react.Component);

exports.default = Example;


Example.propTypes = {
  examples: _propTypes2.default.array
};

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExternalLink = function (_PureComponent) {
  (0, _inherits3.default)(ExternalLink, _PureComponent);

  function ExternalLink() {
    (0, _classCallCheck3.default)(this, ExternalLink);
    return (0, _possibleConstructorReturn3.default)(this, (ExternalLink.__proto__ || Object.getPrototypeOf(ExternalLink)).apply(this, arguments));
  }

  (0, _createClass3.default)(ExternalLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { className: 'ext-link', rel: 'noopener noreferrer', target: '_blank', href: this.props.href },
        this.props.children
      );
    }
  }]);
  return ExternalLink;
}(_react.PureComponent);

exports.default = ExternalLink;


ExternalLink.propTypes = {
  href: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.string.isRequired
};

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _ExternalLink = __webpack_require__(280);

var _ExternalLink2 = _interopRequireDefault(_ExternalLink);

__webpack_require__(725);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          version = _props.version,
          description = _props.description,
          info = _props.info,
          specUrl = _props.specUrl;


      return _react2.default.createElement(
        'header',
        { id: 'header' },
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'dl',
          { className: 'inline-pairs' },
          _react2.default.createElement(
            'dt',
            null,
            'Version'
          ),
          _react2.default.createElement(
            'dd',
            null,
            version
          ),
          info && info.contact && this.renderContact(info.contact),
          info && info.license && this.renderLicense(info.license)
        ),
        description && _react2.default.createElement(_Description2.default, { description: description }),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            _ExternalLink2.default,
            { href: specUrl },
            'Download OpenAPI definition'
          ),
          info && info.termsOfService && _react2.default.createElement(
            _ExternalLink2.default,
            { href: info.termsOfService },
            'Terms of Service'
          )
        )
      );
    }

    /**
     * The contact object has no required fields, so the logic is a bit meh as
     * they are several permutations to consider.
     *
     * @param {Object} contact
     */

  }, {
    key: 'renderContact',
    value: function renderContact(contact) {
      var elements = [_react2.default.createElement(
        'dt',
        { key: 'contact' },
        'Contact'
      )];

      if (contact.name && contact.url) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          _react2.default.createElement(
            _ExternalLink2.default,
            { href: contact.url },
            contact.name
          ),
          contact.email && '(' + contact.email + ')'
        ));
      } else if (contact.name) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          contact.name
        ));
      } else if (contact.url) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          _react2.default.createElement(
            _ExternalLink2.default,
            { href: contact.url },
            contact.url
          ),
          contact.email && '(' + contact.email + ')'
        ));
      } else if (contact.email) {
        elements.push(_react2.default.createElement(
          'dd',
          { key: 'contact-value' },
          _react2.default.createElement(
            _ExternalLink2.default,
            { href: 'mailto:' + contact.email },
            contact.email
          )
        ));
      }

      return elements;
    }
  }, {
    key: 'renderLicense',
    value: function renderLicense(license) {
      return [_react2.default.createElement(
        'dt',
        { key: 'license' },
        'License'
      ), _react2.default.createElement(
        'dd',
        { key: 'license-value' },
        license.url && _react2.default.createElement(
          _ExternalLink2.default,
          { href: license.url },
          license.name
        ),
        !license.url && license.name
      )];
    }
  }]);
  return Header;
}(_react.PureComponent);

exports.default = Header;


Header.propTypes = {
  title: _propTypes2.default.string.isRequired,
  version: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string,
  info: _propTypes2.default.shape({
    contact: _propTypes2.default.object,
    license: _propTypes2.default.object,
    termsOfService: _propTypes2.default.string
  }),
  specUrl: _propTypes2.default.string.isRequired
};

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactScrollableAnchor = __webpack_require__(256);

var _reactScrollableAnchor2 = _interopRequireDefault(_reactScrollableAnchor);

var _BodySchema = __webpack_require__(160);

var _BodySchema2 = _interopRequireDefault(_BodySchema);

var _BodyContent = __webpack_require__(159);

var _BodyContent2 = _interopRequireDefault(_BodyContent);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _Response = __webpack_require__(290);

var _Response2 = _interopRequireDefault(_Response);

__webpack_require__(727);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function (_PureComponent) {
  (0, _inherits3.default)(Method, _PureComponent);

  function Method() {
    (0, _classCallCheck3.default)(this, Method);
    return (0, _possibleConstructorReturn3.default)(this, (Method.__proto__ || Object.getPrototypeOf(Method)).apply(this, arguments));
  }

  (0, _createClass3.default)(Method, [{
    key: 'render',
    value: function render() {
      var method = this.props.method;
      var title = method.title,
          description = method.description,
          parameters = method.parameters,
          request = method.request,
          responses = method.responses;


      return _react2.default.createElement(
        _reactScrollableAnchor2.default,
        { id: method.link },
        _react2.default.createElement(
          'div',
          { className: 'method' },
          _react2.default.createElement(
            'h3',
            null,
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'method-body' },
            description && _react2.default.createElement(_Description2.default, { description: description }),
            parameters && this.renderParameters(parameters),
            request && this.renderRequest(request),
            responses && this.renderResponses(responses)
          )
        )
      );
    }
  }, {
    key: 'renderParameters',
    value: function renderParameters(parameters) {
      return _react2.default.createElement(
        'div',
        { className: 'method-parameters' },
        parameters.path && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Path Parameters'
          ),
          _react2.default.createElement(_BodySchema2.default, { properties: parameters.path })
        ),
        parameters.query && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Query Parameters'
          ),
          _react2.default.createElement(_BodySchema2.default, { properties: parameters.query })
        )
      );
    }
  }, {
    key: 'renderRequest',
    value: function renderRequest(request) {
      var schema = request.schema,
          examples = request.examples;


      if (!schema) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'method-request' },
        _react2.default.createElement(
          'h4',
          null,
          'Request Body'
        ),
        _react2.default.createElement(_BodyContent2.default, { schema: schema, examples: examples })
      );
    }
  }, {
    key: 'renderResponses',
    value: function renderResponses(responses) {
      return _react2.default.createElement(
        'div',
        { className: 'method-responses' },
        _react2.default.createElement(
          'h4',
          null,
          'Responses'
        ),
        responses.map(function (r) {
          return _react2.default.createElement(_Response2.default, { key: r.code, response: r });
        })
      );
    }
  }]);
  return Method;
}(_react.PureComponent);

exports.default = Method;


Method.propTypes = {
  method: _propTypes2.default.shape({
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    link: _propTypes2.default.string,
    description: _propTypes2.default.string,
    parameters: _propTypes2.default.object,
    request: _propTypes2.default.object,
    responses: _propTypes2.default.array
  })
};

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(79);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(539);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _NavigationTag = __webpack_require__(285);

var _NavigationTag2 = _interopRequireDefault(_NavigationTag);

__webpack_require__(728);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      expandedTags: []
    };
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isHashDiff = this.props.location.hash !== nextProps.location.hash;
      var isTagsDiff = !(0, _isEqual2.default)(nextState.expandedTags, this.state.expandedTags);

      return isHashDiff || isTagsDiff;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          navigation = _props.navigation,
          location = _props.location;
      var expandedTags = this.state.expandedTags;


      return _react2.default.createElement(
        'nav',
        { className: 'nav' },
        navigation && navigation.map(function (tag) {
          var shouldBeExpanded = false;
          if (expandedTags.includes(tag.title)) {
            shouldBeExpanded = true;
          }

          return _react2.default.createElement(_NavigationTag2.default, {
            key: tag.title,
            title: tag.title,
            description: tag.description,
            methods: tag.methods,
            shouldBeExpanded: shouldBeExpanded,
            onClick: _this2.onClick,
            location: location
          });
        })
      );
    }

    /**
     * Responsible for updating the state of the navigation with all
     * expanded tags.
     *
     * @param {string} tagTitle
     */

  }, {
    key: 'onClick',
    value: function onClick(tagTitle) {
      var expandedTags = this.state.expandedTags;


      if (expandedTags.includes(tagTitle)) {
        var newExpanded = expandedTags.filter(function (prop) {
          return prop !== tagTitle;
        });
        this.setState({ expandedTags: newExpanded });
      } else {
        this.setState({ expandedTags: [].concat((0, _toConsumableArray3.default)(expandedTags), [tagTitle]) });
      }
    }
  }]);
  return Navigation;
}(_react.Component);

exports.default = Navigation;


Navigation.propTypes = {
  navigation: _propTypes2.default.array,
  location: _propTypes2.default.object
};

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(729);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationMethod = function (_PureComponent) {
  (0, _inherits3.default)(NavigationMethod, _PureComponent);

  function NavigationMethod() {
    (0, _classCallCheck3.default)(this, NavigationMethod);
    return (0, _possibleConstructorReturn3.default)(this, (NavigationMethod.__proto__ || Object.getPrototypeOf(NavigationMethod)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavigationMethod, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          method = _props.method,
          isActive = _props.isActive,
          isOpen = _props.isOpen;


      return _react2.default.createElement(
        'a',
        {
          className: (0, _classnames2.default)('nav-method', {
            active: isActive,
            open: isOpen,
            closed: !isOpen
          }),
          href: '#' + method.link
        },
        _react2.default.createElement(
          'span',
          { className: 'method-type' },
          method.type.toUpperCase()
        ),
        _react2.default.createElement(
          'span',
          { className: 'method-title' },
          method.title
        )
      );
    }
  }]);
  return NavigationMethod;
}(_react.PureComponent);

exports.default = NavigationMethod;


NavigationMethod.propTypes = {
  method: _propTypes2.default.object,
  isActive: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Indicator = __webpack_require__(105);

var _Indicator2 = _interopRequireDefault(_Indicator);

var _NavigationMethod = __webpack_require__(284);

var _NavigationMethod2 = _interopRequireDefault(_NavigationMethod);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

__webpack_require__(730);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationTag = function (_Component) {
  (0, _inherits3.default)(NavigationTag, _Component);

  function NavigationTag(props) {
    (0, _classCallCheck3.default)(this, NavigationTag);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavigationTag.__proto__ || Object.getPrototypeOf(NavigationTag)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NavigationTag, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isHashDiff = this.props.location.hash !== nextProps.location.hash;
      var isExpandedStatusDiff = this.props.shouldBeExpanded !== nextProps.shouldBeExpanded;

      return isHashDiff || isExpandedStatusDiff;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          title = _props.title,
          methods = _props.methods,
          location = _props.location,
          onClick = _props.onClick;


      if (!methods) {
        return null;
      }

      var method = methods.find(function (method) {
        return '#' + method.link === location.hash;
      });

      if (method) {
        onClick(title);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      this.props.onClick(this.props.title);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          description = _props2.description,
          shouldBeExpanded = _props2.shouldBeExpanded,
          methods = _props2.methods,
          location = _props2.location;

      // If tag has any method that matches location hash, then it is considered active

      var isActiveTag = false;
      if (methods) {
        isActiveTag = methods.some(function (method) {
          return '#' + method.link === location.hash;
        });
      }

      var isExpanded = false;
      if (shouldBeExpanded || isActiveTag) {
        isExpanded = true;
      }

      var indicatorDirection = void 0;
      if (isExpanded) {
        indicatorDirection = 'bottom';
      } else {
        indicatorDirection = 'right';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          {
            className: 'nav-tag',
            href: '#' + title,
            onClick: this.handleClick
          },
          _react2.default.createElement(
            'span',
            null,
            title
          ),
          _react2.default.createElement(_Indicator2.default, { direction: indicatorDirection }),
          description && _react2.default.createElement(_Description2.default, { description: description })
        ),
        _react2.default.createElement(
          'div',
          { className: 'nav-tag-methods' },
          methods && methods.map(function (method) {
            var isActive = '#' + method.link === location.hash;

            return _react2.default.createElement(_NavigationMethod2.default, { key: method.link, method: method, isActive: isActive, isOpen: isExpanded });
          })
        )
      );
    }
  }]);
  return NavigationTag;
}(_react.Component);

exports.default = NavigationTag;


NavigationTag.propTypes = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string,
  methods: _propTypes2.default.array,
  shouldBeExpanded: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  location: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function (_React$PureComponent) {
  (0, _inherits3.default)(Overlay, _React$PureComponent);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        { className: 'overlay' },
        children
      );
    }
  }]);
  return Overlay;
}(_react2.default.PureComponent);

exports.default = Overlay;


Overlay.propTypes = {
  children: _propTypes2.default.node
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(281);

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = __webpack_require__(283);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ContentContainer = __webpack_require__(277);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _SecurityContainer = __webpack_require__(291);

var _SecurityContainer2 = _interopRequireDefault(_SecurityContainer);

var _ServiceContainer = __webpack_require__(292);

var _ServiceContainer2 = _interopRequireDefault(_ServiceContainer);

__webpack_require__(732);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          definition = _props.definition,
          location = _props.location,
          specUrl = _props.specUrl;


      if (!definition) {
        return null;
      }

      var navigation = definition.navigation,
          services = definition.services,
          security = definition.security;


      return _react2.default.createElement(
        'div',
        { className: 'page' },
        _react2.default.createElement(_Navigation2.default, { navigation: navigation, location: location }),
        _react2.default.createElement(
          'div',
          { className: 'page-main' },
          _react2.default.createElement(_Header2.default, {
            title: definition.title,
            description: definition.description,
            version: definition.version,
            info: definition.info,
            specUrl: specUrl
          }),
          security && this.renderSecurity(security),
          _react2.default.createElement(
            _ContentContainer2.default,
            null,
            services && services.map(function (service) {
              return _react2.default.createElement(_ServiceContainer2.default, { key: service.title, service: service });
            })
          )
        )
      );
    }
  }, {
    key: 'renderSecurity',
    value: function renderSecurity(security) {
      return _react2.default.createElement(
        _ContentContainer2.default,
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Authentication'
        ),
        Object.keys(security).map(function (id) {
          return _react2.default.createElement(_SecurityContainer2.default, { key: id, id: id, security: security[id] });
        })
      );
    }
  }]);
  return Page;
}(_react.Component);

exports.default = Page;


Page.propTypes = {
  definition: _propTypes2.default.shape({
    navigation: _propTypes2.default.arrayOf(_propTypes2.default.object),
    services: _propTypes2.default.arrayOf(_propTypes2.default.object),
    security: _propTypes2.default.object
  }),
  location: _propTypes2.default.object,
  specUrl: _propTypes2.default.string
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _Indicator = __webpack_require__(105);

var _Indicator2 = _interopRequireDefault(_Indicator);

var _PropertyConstraints = __webpack_require__(289);

var _PropertyConstraints2 = _interopRequireDefault(_PropertyConstraints);

__webpack_require__(733);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Property = function (_PureComponent) {
  (0, _inherits3.default)(Property, _PureComponent);

  function Property(props) {
    (0, _classCallCheck3.default)(this, Property);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Property.__proto__ || Object.getPrototypeOf(Property)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Property, [{
    key: 'handleClick',
    value: function handleClick() {
      if (this.props.onClick) {
        this.props.onClick(this.props.name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          type = _props.type,
          title = _props.title,
          description = _props.description,
          constraints = _props.constraints,
          isRequired = _props.isRequired,
          enumValues = _props.enumValues,
          defaultValue = _props.defaultValue,
          onClick = _props.onClick,
          isOpen = _props.isOpen,
          isLast = _props.isLast;


      var isClickable = onClick !== undefined;

      var subtype = void 0;
      if (type.includes('array')) {
        subtype = this.props.subtype;
      }

      var indicatorDirection = void 0;
      if (isOpen) {
        indicatorDirection = 'up';
      } else {
        indicatorDirection = 'down';
      }

      return _react2.default.createElement(
        'tr',
        {
          className: (0, _classnames2.default)('property', {
            last: isLast
          }),
          onClick: this.handleClick
        },
        _react2.default.createElement(
          'td',
          { className: (0, _classnames2.default)('property-name', {
              'property--isclickable': isClickable
            }) },
          _react2.default.createElement(
            'span',
            null,
            name
          ),
          isClickable && _react2.default.createElement(_Indicator2.default, { className: 'property-indicator', direction: indicatorDirection })
        ),
        _react2.default.createElement(
          'td',
          { className: 'property-info' },
          title && _react2.default.createElement(
            'span',
            { className: 'property-title' },
            title
          ),
          _react2.default.createElement(
            'span',
            { className: 'property-type' },
            !subtype ? type.join(', ') : _react2.default.createElement(
              'span',
              { className: 'property-subtype' },
              subtype,
              '[]'
            ),
            !subtype && constraints && constraints.format && _react2.default.createElement(
              'span',
              { className: 'property-format' },
              '<',
              constraints.format,
              '>'
            )
          ),
          _react2.default.createElement(_PropertyConstraints2.default, { constraints: constraints, type: type, isRequired: isRequired }),
          enumValues && this.renderEnumValues(enumValues),
          defaultValue !== undefined && this.renderDefaultValue(defaultValue),
          description && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Description2.default, { isInline: true, description: description })
          )
        )
      );
    }

    /**
     * Render enum values
     *
     * @param {Array} values
     */

  }, {
    key: 'renderEnumValues',
    value: function renderEnumValues(values) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Valid values:'
        ),
        values.map(function (value) {
          return _react2.default.createElement(
            'span',
            { key: value, className: 'enum' },
            value
          );
        })
      );
    }
  }, {
    key: 'renderDefaultValue',
    value: function renderDefaultValue(value) {
      var displayValue = void 0;

      if (typeof value === 'number' || typeof value === 'string') {
        displayValue = value;
      } else if (typeof value === 'boolean') {
        displayValue = value.toString();
      } else if (Array.isArray(value)) {
        displayValue = '[' + value.join(', ') + ']';
      }

      return _react2.default.createElement(
        'div',
        { className: 'default' },
        'Default: ',
        _react2.default.createElement(
          'span',
          null,
          displayValue
        )
      );
    }
  }]);
  return Property;
}(_react.PureComponent);

exports.default = Property;


Property.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  subtype: _propTypes2.default.string,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  constraints: _propTypes2.default.shape({
    format: _propTypes2.default.string,
    exclusiveMinimum: _propTypes2.default.number,
    exclusiveMaximum: _propTypes2.default.number,
    maximum: _propTypes2.default.number,
    maxItems: _propTypes2.default.number,
    maxLength: _propTypes2.default.number,
    maxProperties: _propTypes2.default.number,
    minimum: _propTypes2.default.number,
    minItems: _propTypes2.default.number,
    minLength: _propTypes2.default.number,
    minProperties: _propTypes2.default.number,
    multipleOf: _propTypes2.default.number,
    pattern: _propTypes2.default.string,
    uniqueItems: _propTypes2.default.bool
  }),
  enumValues: _propTypes2.default.array,
  defaultValue: _propTypes2.default.any,
  isRequired: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  isLast: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _array = __webpack_require__(299);

var _numeric = __webpack_require__(301);

var _object = __webpack_require__(302);

var _string = __webpack_require__(303);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropertyConstraints = function (_PureComponent) {
  (0, _inherits3.default)(PropertyConstraints, _PureComponent);

  function PropertyConstraints() {
    (0, _classCallCheck3.default)(this, PropertyConstraints);
    return (0, _possibleConstructorReturn3.default)(this, (PropertyConstraints.__proto__ || Object.getPrototypeOf(PropertyConstraints)).apply(this, arguments));
  }

  (0, _createClass3.default)(PropertyConstraints, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          isRequired = _props.isRequired,
          constraints = _props.constraints;


      return _react2.default.createElement(
        'span',
        { className: 'property-constraints' },
        isRequired && _react2.default.createElement(
          'span',
          { className: 'property-required' },
          'required'
        ),
        constraints && ['number', 'integer'].some(function (t) {
          return type.includes(t);
        }) && this.renderConstraints(constraints, 'numeric'),
        constraints && type.includes('string') && this.renderConstraints(constraints, 'string'),
        constraints && type.includes('array') && this.renderConstraints(constraints, 'array'),
        constraints && type.includes('object') && this.renderConstraints(constraints, 'object')
      );
    }

    /**
     * Renders validation hints for the given constraints and type.
     *
     * @param {object} constraints
     * @param {string} type
     */

  }, {
    key: 'renderConstraints',
    value: function renderConstraints(constraints, type) {
      var validations = [];

      switch (type) {
        case 'numeric':
          validations = (0, _numeric.getConstraintHints)(constraints);
          break;
        case 'object':
          validations = (0, _object.getConstraintHints)(constraints);
          break;
        case 'array':
          validations = (0, _array.getConstraintHints)(constraints);
          break;
        case 'string':
        default:
          validations = (0, _string.getConstraintHints)(constraints);
      }

      if (!validations.length) {
        return null;
      }

      return _react2.default.createElement(
        'span',
        null,
        validations.map(function (constraint) {
          return _react2.default.createElement(
            'span',
            { key: constraint, className: type + '-constraints' },
            constraint
          );
        })
      );
    }
  }]);
  return PropertyConstraints;
}(_react.PureComponent);

exports.default = PropertyConstraints;


PropertyConstraints.propTypes = {
  type: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  isRequired: _propTypes2.default.bool,
  constraints: _propTypes2.default.shape({
    format: _propTypes2.default.string,
    exclusiveMinimum: _propTypes2.default.number,
    exclusiveMaximum: _propTypes2.default.number,
    maximum: _propTypes2.default.number,
    maxItems: _propTypes2.default.number,
    maxLength: _propTypes2.default.number,
    maxProperties: _propTypes2.default.number,
    minimum: _propTypes2.default.number,
    minItems: _propTypes2.default.number,
    minLength: _propTypes2.default.number,
    minProperties: _propTypes2.default.number,
    multipleOf: _propTypes2.default.number,
    pattern: _propTypes2.default.string,
    uniqueItems: _propTypes2.default.bool
  })
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BodyContent = __webpack_require__(159);

var _BodyContent2 = _interopRequireDefault(_BodyContent);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

var _Indicator = __webpack_require__(105);

var _Indicator2 = _interopRequireDefault(_Indicator);

__webpack_require__(734);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Response = function (_PureComponent) {
  (0, _inherits3.default)(Response, _PureComponent);

  function Response(props) {
    (0, _classCallCheck3.default)(this, Response);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Response, [{
    key: 'render',
    value: function render() {
      var response = this.props.response;
      var code = response.code,
          description = response.description,
          schema = response.schema,
          examples = response.examples;
      var isOpen = this.state.isOpen;


      var indicatorDirection = void 0;
      if (isOpen) {
        indicatorDirection = 'up';
      } else {
        indicatorDirection = 'down';
      }

      var successCode = this.isSuccessCode(code);
      var hasDetails = schema || examples;

      return _react2.default.createElement(
        'div',
        { className: 'response' },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('response-info', {
              success: successCode,
              error: !successCode,
              'is-clickable': hasDetails
            }), onClick: hasDetails ? this.onClick : undefined },
          hasDetails && _react2.default.createElement(_Indicator2.default, { direction: indicatorDirection }),
          _react2.default.createElement(
            'span',
            { className: 'response-code' },
            code
          ),
          description && _react2.default.createElement(_Description2.default, { isInline: true, description: description })
        ),
        hasDetails && isOpen && _react2.default.createElement(_BodyContent2.default, { schema: schema, examples: examples })
      );
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.state.isOpen) {
        this.setState({ isOpen: false });
      } else {
        this.setState({ isOpen: true });
      }
    }
  }, {
    key: 'isSuccessCode',
    value: function isSuccessCode(code) {
      return parseInt(code, 10) >= 100 && parseInt(code, 10) <= 399;
    }
  }]);
  return Response;
}(_react.PureComponent);

exports.default = Response;


Response.propTypes = {
  response: _propTypes2.default.shape({
    code: _propTypes2.default.string,
    description: _propTypes2.default.string,
    schema: _propTypes2.default.array,
    examples: _propTypes2.default.array
  })
};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = __webpack_require__(46);

var _Description2 = _interopRequireDefault(_Description);

__webpack_require__(735);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecurityContainer = function (_PureComponent) {
  (0, _inherits3.default)(SecurityContainer, _PureComponent);

  function SecurityContainer() {
    (0, _classCallCheck3.default)(this, SecurityContainer);
    return (0, _possibleConstructorReturn3.default)(this, (SecurityContainer.__proto__ || Object.getPrototypeOf(SecurityContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(SecurityContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          security = _props.security;
      var name = security.name,
          type = security.type,
          description = security.description;

      var isSimple = ['apiKey', 'http'].includes(security.type);

      return _react2.default.createElement(
        'section',
        { className: 'security-container', id: id },
        _react2.default.createElement(
          'h3',
          null,
          name,
          ' ',
          _react2.default.createElement(
            'code',
            { className: 'scheme' },
            'type=',
            type
          )
        ),
        description && _react2.default.createElement(_Description2.default, { description: description }),
        isSimple && this.renderSimple(security),
        security.type === 'oauth2' && this.renderOAuth2(security),
        security.type === 'openIdConnect' && this.renderOpenIdConnect(security)
      );
    }
  }, {
    key: 'renderSimple',
    value: function renderSimple(security) {
      var example = security.example,
          bearerFormat = security.bearerFormat;

      var usage = void 0;

      if (security.in === 'query') {
        usage = _react2.default.createElement(
          'p',
          null,
          'To use this authentication scheme, add ',
          _react2.default.createElement(
            'code',
            null,
            example
          ),
          ' to request URLs.'
        );
      } else {
        usage = _react2.default.createElement(
          'p',
          null,
          'To use this authentication scheme, pass ',
          _react2.default.createElement(
            'code',
            null,
            example
          ),
          bearerFormat ? ', formatted as ' + bearerFormat : '',
          ' as a request header.'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        usage
      );
    }
  }, {
    key: 'renderOAuth2',
    value: function renderOAuth2(security) {
      var _this2 = this;

      var flows = security.flows;


      return _react2.default.createElement(
        'div',
        null,
        Object.keys(flows).map(function (flowKey) {
          var flow = flows[flowKey];

          return _react2.default.createElement(
            'div',
            { className: 'flow-type', key: flowKey },
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(
                'code',
                null,
                flowKey
              ),
              ' flow'
            ),
            _react2.default.createElement(
              'dl',
              { className: 'inline-pairs' },
              flow.authorizationUrl && [_react2.default.createElement(
                'dt',
                { key: 'auth' },
                'Authorization URL'
              ), _react2.default.createElement(
                'dd',
                { key: 'auth-value' },
                flow.authorizationUrl
              )],
              flow.tokenUrl && [_react2.default.createElement(
                'dt',
                { key: 'token' },
                'Token URL'
              ), _react2.default.createElement(
                'dd',
                { key: 'token-value' },
                flow.tokenUrl
              )],
              flow.refreshUrl && [_react2.default.createElement(
                'dt',
                { key: 'refresh' },
                'Refresh URL'
              ), _react2.default.createElement(
                'dd',
                { key: 'refresh-value' },
                flow.refreshUrl
              )]
            ),
            _react2.default.createElement(
              'div',
              { className: 'scopes' },
              _react2.default.createElement(
                'h5',
                null,
                'Available scopes'
              ),
              _this2.renderScopes(flow.scopes)
            )
          );
        })
      );
    }
  }, {
    key: 'renderScopes',
    value: function renderScopes(scopes) {
      return _react2.default.createElement(
        'ul',
        null,
        Object.keys(scopes).map(function (scope) {
          return _react2.default.createElement(
            'li',
            { key: scope },
            _react2.default.createElement(
              'strong',
              null,
              scope
            ),
            ' ',
            scopes[scope]
          );
        })
      );
    }
  }, {
    key: 'renderOpenIdConnect',
    value: function renderOpenIdConnect(security) {
      var openIdConnectUrl = security.openIdConnectUrl;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'dl',
          { className: 'inline-pairs' },
          _react2.default.createElement(
            'dt',
            null,
            'OpenID Connect URL'
          ),
          _react2.default.createElement(
            'dd',
            null,
            openIdConnectUrl
          )
        )
      );
    }
  }]);
  return SecurityContainer;
}(_react.PureComponent);

exports.default = SecurityContainer;


SecurityContainer.propTypes = {
  id: _propTypes2.default.string,
  security: _propTypes2.default.object
};

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Method = __webpack_require__(282);

var _Method2 = _interopRequireDefault(_Method);

__webpack_require__(736);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceContainer = function (_PureComponent) {
  (0, _inherits3.default)(ServiceContainer, _PureComponent);

  function ServiceContainer() {
    (0, _classCallCheck3.default)(this, ServiceContainer);
    return (0, _possibleConstructorReturn3.default)(this, (ServiceContainer.__proto__ || Object.getPrototypeOf(ServiceContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ServiceContainer, [{
    key: 'render',
    value: function render() {
      var service = this.props.service;
      var title = service.title,
          methods = service.methods;


      return _react2.default.createElement(
        'div',
        { className: 'service-container', id: title },
        _react2.default.createElement(
          'h2',
          null,
          title
        ),
        methods.map(function (method) {
          return _react2.default.createElement(_Method2.default, { key: method.link, method: method });
        })
      );
    }
  }]);
  return ServiceContainer;
}(_react.PureComponent);

exports.default = ServiceContainer;


ServiceContainer.propTypes = {
  service: _propTypes2.default.object
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(320);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(77);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactScrollableAnchor = __webpack_require__(256);

var _reactDocumentTitle = __webpack_require__(609);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(287);

var _Page2 = _interopRequireDefault(_Page);

var _Overlay = __webpack_require__(286);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _definitions = __webpack_require__(296);

__webpack_require__(738);

var _lincolnLogoWhite = __webpack_require__(745);

var _lincolnLogoWhite2 = _interopRequireDefault(_lincolnLogoWhite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function (_React$PureComponent) {
  (0, _inherits3.default)(Base, _React$PureComponent);

  function Base() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Base);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Base.__proto__ || Object.getPrototypeOf(Base)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      parserType: 'open-api-v3',
      definitionUrl: null,
      definition: null,
      parsedDefinition: null,
      loading: false,
      error: null
    }, _this.setDefinition = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
        var definitionUrl = _ref3.definitionUrl,
            navSort = _ref3.navSort,
            validate = _ref3.validate,
            _ref3$parserType = _ref3.parserType,
            parserType = _ref3$parserType === undefined ? _this.state.parserType : _ref3$parserType;

        var promises, _ref4, _ref5, definition, parsedDefinition;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({ loading: !!definitionUrl, error: null });

                _context.prev = 1;
                promises = [(0, _definitions.getDefinition)(definitionUrl)];

                if (validate) {
                  promises.push((0, _definitions.validateDefinition)(definitionUrl, parserType));
                }

                _context.next = 6;
                return Promise.all(promises);

              case 6:
                _ref4 = _context.sent;
                _ref5 = (0, _slicedToArray3.default)(_ref4, 1);
                definition = _ref5[0];
                _context.next = 11;
                return (0, _definitions.parseDefinition)({ definition: definition, parserType: parserType, navSort: navSort });

              case 11:
                parsedDefinition = _context.sent;


                _this.setState({ loading: false, definitionUrl: definitionUrl, definition: definition, parsedDefinition: parsedDefinition, parserType: parserType });
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](1);
                return _context.abrupt('return', _this.setState({ loading: false, error: _context.t0 }));

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.intialise = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var parserType, _this$props, definitionUrl, navSort, validate;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              parserType = _this.state.parserType;
              _this$props = _this.props, definitionUrl = _this$props.definitionUrl, navSort = _this$props.navSort, validate = _this$props.validate;

              if (definitionUrl) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', true);

            case 4:
              if (!(definitionUrl === _this.state.definitionUrl)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt('return', false);

            case 6:
              _context2.next = 8;
              return _this.setDefinition({ definitionUrl: definitionUrl, parserType: parserType, navSort: navSort, validate: validate });

            case 8:

              (0, _reactScrollableAnchor.configureAnchors)({ offset: -10, scrollDuration: 100 });

              return _context2.abrupt('return', true);

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Base, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.intialise();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          definition = _state.parsedDefinition,
          definitionUrl = _state.definitionUrl,
          loading = _state.loading,
          error = _state.error;
      var location = this.props.location;


      var element = void 0;

      if (loading) {
        element = _react2.default.createElement(Loading, { definitionUrl: definitionUrl });
      } else if (error) {
        element = _react2.default.createElement(Failure, { error: error });
      } else {
        element = _react2.default.createElement(Definition, { location: location, definition: definition, definitionUrl: definitionUrl });
      }

      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: definition ? definition.title : 'Lincoln Renderer' },
        _react2.default.createElement(
          'div',
          { className: 'main' },
          element
        )
      );
    }
  }]);
  return Base;
}(_react2.default.PureComponent);

exports.default = Base;


Base.contextTypes = {
  router: _propTypes2.default.object
};

Base.propTypes = {
  location: _propTypes2.default.object,
  definitionUrl: _propTypes2.default.string,
  navSort: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  validate: _propTypes2.default.bool
};

Base.defaultProps = {
  navSort: false,
  validate: false
};

var Definition = function Definition(_ref7) {
  var definition = _ref7.definition,
      definitionUrl = _ref7.definitionUrl,
      location = _ref7.location;
  return !definition ? _react2.default.createElement(
    _Overlay2.default,
    null,
    _react2.default.createElement('img', { src: _lincolnLogoWhite2.default, alt: '' }),
    _react2.default.createElement(
      'h3',
      null,
      'Render your Open API definition by adding the CORS-enabled URL above.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'You can also set this with the ',
      _react2.default.createElement(
        'code',
        null,
        '?url'
      ),
      ' query parameter.'
    )
  ) : _react2.default.createElement(_Page2.default, { definition: definition, location: location, specUrl: definitionUrl });
};

Definition.propTypes = {
  definition: _propTypes2.default.object,
  definitionUrl: _propTypes2.default.string,
  location: _propTypes2.default.object
};

var Failure = function Failure(_ref8) {
  var error = _ref8.error;
  return _react2.default.createElement(
    _Overlay2.default,
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Failed to load definition.'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      error.message
    )
  );
};

Failure.propTypes = {
  error: _propTypes2.default.object
};

var Loading = function Loading(_ref9) {
  var definitionUrl = _ref9.definitionUrl;
  return _react2.default.createElement(
    _Overlay2.default,
    null,
    _react2.default.createElement(
      'em',
      null,
      'Loading ',
      _react2.default.createElement(
        'b',
        null,
        definitionUrl
      ),
      '...'
    )
  );
};

Loading.propTypes = {
  definitionUrl: _propTypes2.default.string
};

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(78);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(684);

var _Base = __webpack_require__(293);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lincoln = function (_React$Component) {
  (0, _inherits3.default)(Lincoln, _React$Component);

  function Lincoln() {
    (0, _classCallCheck3.default)(this, Lincoln);
    return (0, _possibleConstructorReturn3.default)(this, (Lincoln.__proto__ || Object.getPrototypeOf(Lincoln)).apply(this, arguments));
  }

  (0, _createClass3.default)(Lincoln, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: passProps(_Base2.default, this.props) })
      );
    }
  }]);
  return Lincoln;
}(_react2.default.Component);

exports.default = Lincoln;


var passProps = function passProps(Component, extraProps) {
  return function (props) {
    return _react2.default.createElement(Component, (0, _extends3.default)({}, props, extraProps));
  };
};

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Demo = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _qs = __webpack_require__(602);

var _Lincoln = __webpack_require__(294);

var _Lincoln2 = _interopRequireDefault(_Lincoln);

__webpack_require__(737);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definitionUrl = (0, _qs.parse)(location.search.split('?')[1]).url;

var Demo = exports.Demo = function (_React$PureComponent) {
  (0, _inherits3.default)(Demo, _React$PureComponent);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      definitionUrl: definitionUrl
    }, _this.useUrlInput = function () {
      _this.setState({ definitionUrl: _this.urlInput.value });
    }, _this.setUrlInput = function (input) {
      _this.urlInput = input;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Demo, [{
    key: 'render',
    value: function render() {
      var definitionUrl = this.state.definitionUrl;


      return _react2.default.createElement(
        'div',
        { className: 'oapi-demo' },
        _react2.default.createElement(
          'header',
          { className: 'oapi-header' },
          _react2.default.createElement(
            'h1',
            null,
            'Lincoln'
          ),
          _react2.default.createElement(
            'small',
            null,
            'An Open API v3 renderer.'
          ),
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'url' },
              'Definition URL'
            ),
            _react2.default.createElement('input', {
              name: 'url',
              type: 'url',
              defaultValue: this.state.definitionUrl,
              ref: this.setUrlInput
            }),
            _react2.default.createElement(
              'button',
              { onClick: this.useUrlInput },
              'RENDER'
            )
          )
        ),
        _react2.default.createElement(_Lincoln2.default, { definitionUrl: definitionUrl })
      );
    }
  }]);
  return Demo;
}(_react2.default.PureComponent);

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDefinition = exports.getDefinition = undefined;

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(77);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getDefinition = exports.getDefinition = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(url) {
    var result, definition;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (url) {
              _context.next = 2;
              break;
            }

            throw new Error('Missing url');

          case 2:
            _context.next = 4;
            return (0, _isomorphicFetch2.default)(url);

          case 4:
            result = _context.sent;

            if (result.ok) {
              _context.next = 7;
              break;
            }

            throw new Error(result.statusText);

          case 7:
            definition = {};

            // TODO move this to another place

            if (!(url.endsWith('.yaml') || url.endsWith('.yml'))) {
              _context.next = 16;
              break;
            }

            _context.t0 = _jsYaml2.default;
            _context.next = 12;
            return result.text();

          case 12:
            _context.t1 = _context.sent;
            definition = _context.t0.safeLoad.call(_context.t0, _context.t1);
            _context.next = 20;
            break;

          case 16:
            if (!url.endsWith('json')) {
              _context.next = 20;
              break;
            }

            _context.next = 19;
            return result.json();

          case 19:
            definition = _context.sent;

          case 20:
            return _context.abrupt('return', definition);

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDefinition(_x) {
    return _ref.apply(this, arguments);
  };
}();

var parseDefinition = exports.parseDefinition = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
    var definition = _ref3.definition,
        parserType = _ref3.parserType,
        navSortType = _ref3.navSortType;
    var parser, sortFunc, parsedDefinition;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            parser = (0, _parserFactory.getParserFunction)(parserType);
            sortFunc = (0, _sorting.getSortingFunction)(navSortType);
            _context2.next = 4;
            return parser(definition, sortFunc);

          case 4:
            parsedDefinition = _context2.sent;
            return _context2.abrupt('return', parsedDefinition);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function parseDefinition(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.validateDefinition = validateDefinition;

var _isomorphicFetch = __webpack_require__(181);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _jsYaml = __webpack_require__(182);

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _parserFactory = __webpack_require__(309);

var _sorting = __webpack_require__(297);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateDefinition(definition, parserType) {
  var validator = (0, _parserFactory.getValidatorFunction)(parserType);

  return validator(definition);
}

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortByAlphabet = sortByAlphabet;
exports.sortByHttpMethod = sortByHttpMethod;
exports.sortByUIMethod = sortByUIMethod;
exports.getSortingFunction = getSortingFunction;
var methodWeights = {
  GET: 1,
  POST: 2,
  PUT: 3,
  DELETE: 4,
  HEAD: 5,
  OPTIONS: 6,
  TRACE: 7,
  CONNECT: 8

  /**
   * Sort function
   *
   * @param {String} str1
   * @param {String} str2
   * @return {number}
   */
};function sortByAlphabet(str1, str2) {
  if (str1 < str2) {
    return -1;
  } else if (str1 > str2) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Sort function
 *
 * @param {String} type1
 * @param {String} type2
 * @return {number}
 */
function sortByHttpMethod(type1, type2) {
  var normalisedType1 = type1.toUpperCase();
  var normalisedType2 = type2.toUpperCase();

  return methodWeights[normalisedType1] - methodWeights[normalisedType2];
}

/**
 * Sort function
 *
 * @param {type, title} method1
 * @param {type, title} method2
 * @return {number}
 */
function sortByUIMethod(method1, method2) {
  // Sort by method type first
  if (method1.type !== method2.type) {
    return sortByHttpMethod(method1.type, method2.type);
  }

  // Then by method title
  return sortByAlphabet(method1.title, method2.title);
}

/**
 * Returns the appropriate sorting function to be used when
 * constructing the navigation.
 *
 * @param {string} navSort `alpha` or `false`.
 */
function getSortingFunction(navSort) {
  switch (navSort) {
    case 'alpha':
      return sortByUIMethod;

    case false:
    default:
      return false;
  }
}

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(80);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.resolveAllOf = resolveAllOf;

var _clone = __webpack_require__(535);

var _clone2 = _interopRequireDefault(_clone);

var _cloneDeep = __webpack_require__(213);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _uniq = __webpack_require__(544);

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolve node with allOf
 *
 * @param {Object} node
 *
 * @return {Object}
 */
function resolveAllOfItem(node) {
  var output = (0, _cloneDeep2.default)(node);
  delete output.allOf;

  var allOfItems = node.allOf;

  var _loop = function _loop(i) {
    var item = allOfItems[i];

    Object.keys(item).forEach(function (key) {
      if (!output.hasOwnProperty(key)) {
        output[key] = (0, _cloneDeep2.default)(item[key]);
      } else if (key === 'properties') {
        var properties = item[key];

        Object.keys(properties).forEach(function (name) {
          output.properties[name] = (0, _cloneDeep2.default)(properties[name]);
        });
      } else if (key === 'required') {
        // Concatenate to existing list and remove duplicates
        var requiredArray = (0, _uniq2.default)(output.required.concat(item[key]));
        output.required = requiredArray.sort();
      }
    });
  };

  for (var i = 0; i < allOfItems.length; i++) {
    _loop(i);
  }

  return output;
}

/**
 * Internal method to resolve allOf for schema object
 *
 * @param {Object} obj
 */
function resolveAllOfRecursive(obj) {
  Object.keys(obj).forEach(function (key) {
    var item = obj[key];

    if (item) {
      if ((typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object') {
        resolveAllOfRecursive(item);
      }

      if (item.allOf && Array.isArray(item.allOf)) {
        obj[key] = resolveAllOfItem(item);
      }
    }
  });
}

/**
 * Resolve allOf for schema object
 *
 * @param {Object} obj
 *
 * @return {Object} definitions object that has allOf resolved
 */
function resolveAllOf(obj) {
  var clonedObj = (0, _clone2.default)(obj);
  resolveAllOfRecursive(clonedObj);

  return clonedObj;
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for an array,
 * `maxItems`, `minItems` and `uniqueItems`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var maxItems = constraints.maxItems,
      minItems = constraints.minItems,
      uniqueItems = constraints.uniqueItems;

  var validations = [];

  if (uniqueItems) {
    validations.push('unique items');
  }

  if (maxItems !== undefined && minItems !== undefined) {
    // Be succint if the minItems is the same maxItems
    // ie. value can only be of `x` length.
    if (maxItems === minItems) {
      validations.push(minItems + ' items');
    } else {
      validations.push(minItems + '-' + maxItems + ' items');
    }
  } else if (minItems !== undefined) {
    validations.push('at least ' + minItems + ' items');
  } else if (maxItems !== undefined) {
    validations.push('at most ' + maxItems + ' items');
  }

  return validations;
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasConstraints = hasConstraints;
exports.getConstraints = getConstraints;
// https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.md#schema-object
var VALIDATION_KEYWORDS = exports.VALIDATION_KEYWORDS = ['format', 'exclusiveMaximum', 'exclusiveMinimum', 'maximum', 'maxItems', 'maxLength', 'maxProperties', 'minimum', 'minItems', 'minLength', 'minProperties', 'multipleOf', 'pattern', 'uniqueItems'];

/**
 * Determines if the given property contains any validation keywords
 *
 * @param {Object} property
 * @return {Boolean}
 */
function hasConstraints(property) {
  return Object.keys(property).some(function (key) {
    return VALIDATION_KEYWORDS.includes(key);
  });
}

/**
 * Given a property, extract all the constraints from it and return a new
 * object with those constraints.
 *
 * @param {Object} property
 * @return {Object}
 */
function getConstraints(property) {
  return Object.keys(property).reduce(function (constraints, key) {
    if (VALIDATION_KEYWORDS.includes(key)) {
      constraints[key] = property[key];
    }

    return constraints;
  }, {});
}

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for numeric
 * types, `exclusiveMinimum`, `exclusiveMaximum`, `maximum`, `minimum` and
 * `multipleOf`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var exclusiveMinimum = constraints.exclusiveMinimum,
      exclusiveMaximum = constraints.exclusiveMaximum,
      maximum = constraints.maximum,
      minimum = constraints.minimum,
      multipleOf = constraints.multipleOf;

  var validations = [];

  if (multipleOf) {
    validations.push("multiple of " + multipleOf);
  }

  // We're following JSON-Schema Draft 6, which states that exclusive* are
  // integers, not boolean values. Also using `undefined` to prevent edge
  // cases where the value is 0 or 1.
  if (maximum !== undefined && minimum !== undefined) {
    validations.push(minimum + "\u2026" + maximum);
  } else if (exclusiveMaximum !== undefined && exclusiveMinimum !== undefined) {
    validations.push(exclusiveMinimum + "\u2026" + exclusiveMaximum);
  } else if (minimum !== undefined) {
    validations.push("\u2265 " + minimum);
  } else if (maximum !== undefined) {
    validations.push("\u2264 " + maximum);
  } else if (exclusiveMinimum !== undefined) {
    validations.push("> " + exclusiveMinimum);
  } else if (exclusiveMaximum !== undefined) {
    validations.push("< " + exclusiveMaximum);
  }

  return validations;
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for an object,
 * `maxProperties`, `minProperties`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var minProperties = constraints.minProperties,
      maxProperties = constraints.maxProperties;

  var validations = [];

  if (maxProperties !== undefined && minProperties !== undefined) {
    // Be succint if the minProperties is the same maxProperties
    // ie. value can only be of `x` length.
    if (maxProperties === minProperties) {
      validations.push(minProperties + " properties");
    } else {
      validations.push(minProperties + "-" + maxProperties + " properties");
    }
  } else if (minProperties !== undefined) {
    validations.push("at least " + minProperties + " properties");
  } else if (maxProperties !== undefined) {
    validations.push("at most " + maxProperties + " properties");
  }

  return validations;
}

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstraintHints = getConstraintHints;
/**
 * Returns an array of hints that relate to the constraints for a string,
 * `pattern`, `minLength`, `maxLength`.
 *
 * @param {object} constraints
 * @return {array}
 */
function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  var pattern = constraints.pattern,
      minLength = constraints.minLength,
      maxLength = constraints.maxLength;

  var validations = [];

  if (pattern) {
    validations.push("/" + pattern + "/");
  }

  if (maxLength !== undefined && minLength !== undefined) {
    // Be succinct if the minLength is the same maxLength
    // ie. value can only be of `x` length.
    if (maxLength === minLength) {
      validations.push(minLength + " chars");
    } else {
      validations.push(minLength + "-" + maxLength + " chars");
    }
  } else if (minLength !== undefined) {
    validations.push("at least " + minLength + " chars");
  } else if (maxLength !== undefined) {
    validations.push("at most " + maxLength + " chars");
  }

  return validations;
}

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(78);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(79);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(80);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.resolveOneOf = resolveOneOf;

var _cloneDeep = __webpack_require__(213);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _get = __webpack_require__(536);

var _get2 = _interopRequireDefault(_get);

var _update = __webpack_require__(545);

var _update2 = _interopRequireDefault(_update);

var _toPath = __webpack_require__(543);

var _toPath2 = _interopRequireDefault(_toPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively determine if the given object has any `oneOf` properties.
 * Returns an array with the paths to those properties (eg. `properties.oneOf`).
 * If no `oneOf` keys were found, an empty array is returned.
 *
 * @param {object} obj
 * @return {string[]}
 */
function getOneOfPaths(obj) {
  var paths = [];
  var walk = function walk(obj) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    for (var key in obj) {
      // Handle if `oneOf` is found at the first level.
      var currentPath = path === '' ? key : path + '.' + key;

      if (key === 'oneOf') {
        paths.push(currentPath);
      } else if ((0, _typeof3.default)(obj[key]) === 'object' || Array.isArray(obj[key])) {
        walk(obj[key], currentPath);
      }
    }
  };

  walk(obj);

  return paths;
}

/**
 * Returns all of the possible states of `obj` when the permutations
 * specified in `paths` are applied.
 *
 * @param {string[]} paths
 * @param {object} obj
 * @return {object[]}
 */
function getStates(paths, obj) {
  var states = [].concat((0, _toConsumableArray3.default)(getStateAt(paths[0], obj)));

  for (var i = 1; i < paths.length; i++) {
    var state = states.shift();

    while (state) {
      var _states;

      var newStates = getStateAt(paths[i], state);

      // if there are no new states, put this one back and stop
      if (!newStates.length) {
        states.unshift(state);
        break;
      }

      states = (_states = states).concat.apply(_states, (0, _toConsumableArray3.default)(newStates));
      state = states.shift();
    }
  }

  return states;
}

/**
 * Given a path and an object, return all the new states that exist
 * by merging the options found at `obj.path` into the given object.
 * Returns an array of possible objects
 *
 * @param {string} path
 * @param {object} obj
 * @return {object[]}
 */
function getStateAt(path, obj) {
  var clonedObj = (0, _cloneDeep2.default)(obj);
  var states = (0, _get2.default)(clonedObj, path);

  // Couldn't retrieve the states at this path, bail.
  if (states === undefined) {
    return [];
  }

  var parentPath = getParentPath(path);
  return states.map(function (state) {
    // No path, so add state to object directly
    if (parentPath === '') {
      return merge(clonedObj, state);
    }

    // Replace the path with the state
    (0, _update2.default)(clonedObj, parentPath, function (value) {
      return merge(value, state);
    });

    return (0, _cloneDeep2.default)(clonedObj);
  });
}

/**
 * Given a path, drop the last segment and return the shortened
 * path, which will be the parent of the given path.
 *
 * @param {string} path
 * @return {string}
 */
function getParentPath(path) {
  var rootPath = (0, _toPath2.default)(path);
  rootPath.pop();

  return rootPath.join('.');
}

/**
 * Take a object and merge the state to it, returning the resulting object.
 * Will remove the `oneOf` key from the given `obj`.
 *
 * @param {object} obj
 * @param {object} state
 * @return {object}
 */
function merge(obj, state) {
  delete obj.oneOf;

  return (0, _extends3.default)({}, obj, state);
}

/**
 * Resolves all `oneOf` definitions present in the given object.
 * If none exist, the object is returned untouched. Otherwise
 * an object with a `oneOf` property whose value is an array of
 * states is returned
 *
 * @param {object} obj
 * @return {object}
 */
function resolveOneOf(obj) {
  var paths = getOneOfPaths(obj);
  if (paths.length === 0) {
    return obj;
  }

  var states = getStates(paths, obj);

  return {
    oneOf: states
  };
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUIReadySchema;

var _allOfResolver = __webpack_require__(298);

var _oneOfResolver = __webpack_require__(304);

var _constraintsParser = __webpack_require__(300);

var literalTypes = ['string', 'integer', 'number', 'boolean'];

/**
 * Construct UI ready property object from given inputs.
 *
 * @param {String} nodeName
 * @param {Object} propertyNode
 * @param {Boolean} required
 *
 * @return {Object}
 */
function getPropertyNode(nodeName, propertyNode) {
  var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var nodeType = propertyNode.type || 'string';

  if (!Array.isArray(nodeType)) {
    nodeType = [nodeType];
  }

  var outputNode = {
    name: nodeName,
    type: nodeType,
    required: required
  };

  if (propertyNode.title) {
    outputNode.title = propertyNode.title;
  }

  if (propertyNode.description) {
    outputNode.description = propertyNode.description;
  }

  if (propertyNode.default) {
    outputNode.defaultValue = propertyNode.default;
  }

  if ((0, _constraintsParser.hasConstraints)(propertyNode)) {
    outputNode.constraints = (0, _constraintsParser.getConstraints)(propertyNode);
  }

  // Are all the possible types for this property literals?
  // TODO: Currently do not handle multiple types that are not all literals
  if (nodeType.every(function (type) {
    return literalTypes.includes(type);
  })) {
    if (propertyNode.enum) {
      outputNode.enum = propertyNode.enum;
    }

    return outputNode;
    // Otherwise, let's see if there's an object in there..
  } else if (nodeType.length === 1 && nodeType.includes('object')) {
    var propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required);

    if (propertiesNode !== undefined && propertiesNode.length > 0) {
      outputNode.properties = propertiesNode;
    }

    return outputNode;
    // Is there an array?
  } else if (nodeType.length === 1 && nodeType.includes('array')) {
    if (propertyNode.items) {
      var arrayItemType = propertyNode.items.type;

      if (arrayItemType === 'object') {
        var _propertiesNode = getPropertiesNode(propertyNode.items.properties, propertyNode.items.required);

        if (_propertiesNode !== undefined && _propertiesNode.length > 0) {
          outputNode.properties = _propertiesNode;
        }
      } else {
        outputNode.subtype = arrayItemType;
      }
    }

    return outputNode;
  }

  return null;
}

/**
 * Construct UI ready properties object from given inputs.
 *
 * @param {Object} propertiesNode
 * @param {Array} requiredProperties
 *
 * @return {Object}
 */
function getPropertiesNode(propertiesNode) {
  var requiredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var outputNode = [];

  for (var key in propertiesNode) {
    var property = propertiesNode[key];
    var value = getPropertyNode(key, property, requiredProperties.includes(key));

    if (value) {
      outputNode.push(value);
    }
  }

  return outputNode;
}

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema
 *
 * @return {Object}
 */
function getUIReadySchema(jsonSchema) {
  var resolved = (0, _allOfResolver.resolveAllOf)(jsonSchema);
  resolved = (0, _oneOfResolver.resolveOneOf)(resolved);

  if (Array.isArray(resolved.oneOf)) {
    return resolved.oneOf.map(function (state) {
      if (state.type === 'array') {
        return [getPropertyNode('', state)];
      } else {
        return getPropertiesNode(state.properties, state.required);
      }
    });
  }

  if (resolved.type === 'array') {
    return [getPropertyNode('', resolved)];
  } else {
    return getPropertiesNode(resolved.properties, resolved.required);
  }
}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(78);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(77);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(79);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _jsonSchemaRefParser = __webpack_require__(438);

var _jsonSchemaRefParser2 = _interopRequireDefault(_jsonSchemaRefParser);

var _securityParser = __webpack_require__(308);

var _schemaParser = __webpack_require__(305);

var _schemaParser2 = _interopRequireDefault(_schemaParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Construct navigation and services ready to be consumed by the UI
 *
 * @param {Array} tags
 * @param {Object} paths
 * @param {Array} apiSecurity
 * @param {Object} securityDefinitions
 * @param {Function} sortFunc
 * @return {{navigation: [], services: []}}
 */
function getUINavigationAndServices(_ref) {
  var tags = _ref.tags,
      paths = _ref.paths,
      _ref$apiSecurity = _ref.apiSecurity,
      apiSecurity = _ref$apiSecurity === undefined ? [] : _ref$apiSecurity,
      securityDefinitions = _ref.securityDefinitions,
      sortFunc = _ref.sortFunc;

  var navigation = [];
  var services = [];

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var navigationMethods = [];
    var servicesMethods = [];
    var pathIds = Object.keys(paths);

    for (var j = 0; j < pathIds.length; j++) {
      var pathId = pathIds[j];
      var path = paths[pathId];
      var methodTypes = Object.keys(path);

      for (var k = 0; k < methodTypes.length; k++) {
        var methodType = methodTypes[k];
        var method = path[methodType];

        if (!method.tags.includes(tag)) {
          continue;
        }

        var link = pathId + '/' + methodType;
        var navigationMethod = {
          type: methodType,
          title: method.summary,
          link: link
        };
        navigationMethods.push(navigationMethod);

        var uiRequest = getUIRequest(method.description, method.requestBody);
        var uiResponses = getUIResponses(method.responses);
        var servicesMethod = {
          type: methodType,
          title: method.summary,
          link: link,
          request: uiRequest,
          responses: uiResponses
        };

        if (method.description) {
          servicesMethod.description = method.description;
        }

        // Security can be declared per method, or globally for the entire API.
        if (method.security) {
          servicesMethod.security = (0, _securityParser.getUISecurity)(method.security, securityDefinitions);
        } else if (apiSecurity.length) {
          servicesMethod.security = (0, _securityParser.getUISecurity)(apiSecurity, securityDefinitions);
        }

        var uiParameters = getUIParameters(method.parameters);
        if (uiParameters) {
          servicesMethod.parameters = uiParameters;
        }

        servicesMethods.push(servicesMethod);
      }
    }

    navigation.push({
      title: tag,
      methods: typeof sortFunc === 'function' ? navigationMethods.sort(sortFunc) : navigationMethods
    });

    services.push({
      title: tag,
      methods: typeof sortFunc === 'function' ? servicesMethods.sort(sortFunc) : servicesMethods
    });
  }

  return { navigation: navigation, services: services };
}

/**
 * Add media type info, e.g. schema and examples to UI object
 * This method mutates the `uiObject` parameter.
 *
 * @param {Object} uiObject
 * @param {Object} mediaType Open API mediaType object
 */
function addMediaTypeInfoToUIObject(uiObject, mediaType) {
  if (mediaType.schema) {
    var schema = (0, _schemaParser2.default)(mediaType.schema);

    if (schema.length) {
      uiObject.schema = schema;
    }
  }

  var examples = [];

  if (mediaType.example) {
    examples.push(mediaType.example);
  }

  if (mediaType.examples) {
    var _examples;

    examples = (_examples = examples).concat.apply(_examples, (0, _toConsumableArray3.default)(Object.keys(mediaType.examples).map(function (example) {
      return mediaType.examples[example];
    })));
  }

  if (examples.length) {
    uiObject.examples = examples;
  }
}

/**
 * Construct parameters object ready to be consumed by the UI
 *
 * @param {Array} parameters
 * @return {Object}
 */
function getUIParameters(parameters) {
  if (parameters) {
    var uiParameters = {};

    var pathParameters = getUIParametersForLocation(parameters, 'path');
    if (pathParameters) {
      uiParameters.path = pathParameters;
    }

    var queryParameters = getUIParametersForLocation(parameters, 'query');
    if (queryParameters) {
      uiParameters.query = queryParameters;
    }

    return uiParameters;
  }

  return null;
}

/**
 * Construct a parameters array for a location, ready to be consumed by the UI
 *
 * @param {Array} parameters
 * @param {String} location. Possible values: query, path, header, cookie
 * @return {Array}
 */
function getUIParametersForLocation(parameters, location) {
  if (!parameters) {
    return null;
  }

  var resultArray = parameters.filter(function (parameter) {
    return parameter.in === location;
  }).map(function (parameter) {
    var uiParameter = {
      name: parameter.name,
      description: parameter.description,
      required: parameter.required

      // TODO: We set the type to be an array because the Property component
      // handles this. Property should eventually be split and this won't be
      // necessary...
    };if (parameter.type) {
      uiParameter.type = [parameter.type];
    } else if (parameter.schema && parameter.schema.type) {
      uiParameter.type = [parameter.schema.type];
    }

    if (parameter.schema && parameter.schema.default !== undefined) {
      uiParameter.defaultValue = parameter.schema.default;
    }

    return uiParameter;
  });

  return resultArray.length ? resultArray : null;
}

/**
 * Construct request object ready to be consumed by the UI
 *
 * @param {String} description
 * @param {Object} requestBody
 * @return {Object}
 */
function getUIRequest(description) {
  var requestBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var uiRequest = {};

  if (description) {
    uiRequest.description = description;
  }

  if (requestBody) {
    var mediaType = getMediaType(requestBody.content);

    if (mediaType) {
      addMediaTypeInfoToUIObject(uiRequest, mediaType);
    }
  }

  return uiRequest;
}

/**
 * Construct responses object ready to be consumed by the UI
 *
 * @param {Object} responses
 * @return {Array}
 */
function getUIResponses(responses) {
  var uiResponses = [];

  for (var statusCode in responses) {
    var response = responses[statusCode];

    var uiResponse = {
      code: statusCode,
      description: response.description
    };

    var mediaType = getMediaType(response.content);

    if (mediaType) {
      addMediaTypeInfoToUIObject(uiResponse, mediaType);
    }

    uiResponses.push(uiResponse);
  }

  return uiResponses;
}

/**
 * Extracts the content for UI from the first available media type
 *
 * @param {Object} content Open API v3 Content Object
 * @return {Object|null}
 */
function getMediaType(content) {
  if (!content) {
    return null;
  }

  var mediaTypeIds = Object.keys(content);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mediaTypeIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mediaTypeId = _step.value;

      var mediaType = content[mediaTypeId];

      if (mediaType.schema) {
        return mediaType;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}

/**
 * Extract unique tags from paths object
 *
 * @param {Object} paths
 * @return {Array} of strings
 */
function getTags(paths) {
  var tagCollection = [];

  for (var pathKey in paths) {
    var path = paths[pathKey];

    for (var methodKey in path) {
      var method = path[methodKey];

      method.tags.forEach(function (tag) {
        if (!tagCollection.includes(tag)) {
          tagCollection.push(tag);
        }
      });
    }
  }

  return tagCollection.sort();
}

/**
 * If tag definitions exist, extract this information and add it to the
 * navigation array. This mutates the `navigation` parameter.
 *
 * @param {Array} navigation
 * @param {Array} tagDefinitions
 */
function addTagDetailsToNavigation(navigation, tagDefinitions) {
  var getTag = function getTag(tag) {
    return tagDefinitions.find(function (def) {
      return def.name === tag;
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = navigation[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var navGroup = _step2.value;

      var tagDefinition = getTag(navGroup.title);

      if (tagDefinition) {
        navGroup.handle = navGroup.title;
        navGroup.title = tagDefinition.name;

        if (tagDefinition.description) {
          navGroup.description = tagDefinition.description;
        }

        if (tagDefinition.externalDocs) {
          navGroup.externalDocs = tagDefinition.externalDocs;
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

/**
 * Converts openApiV3 object to new object ready to be consumed by the UI.
 *
 * @param {Object} openApiV3
 * @param {Function} sortFunc
 * @return {Object}
 */

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(openApiV3, sortFunc) {
    var derefOpenApiV3, info, paths, apiSecurity, tags, securityDefinitions, _getUINavigationAndSe, navigation, services, infoObj, definition;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            derefOpenApiV3 = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _jsonSchemaRefParser2.default.dereference(openApiV3);

          case 4:
            derefOpenApiV3 = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            throw new Error('Unable to dereference input definition. Details: ' + JSON.stringify(_context.t0));

          case 10:
            info = derefOpenApiV3.info;
            paths = derefOpenApiV3.paths;
            apiSecurity = derefOpenApiV3.security || [];

            // Get tags from the paths

            tags = getTags(paths);

            // Get security definitions

            securityDefinitions = (0, _securityParser.getSecurityDefinitions)(derefOpenApiV3);

            // Construction navigation and services

            _getUINavigationAndSe = getUINavigationAndServices({
              tags: tags,
              paths: paths,
              apiSecurity: apiSecurity,
              securityDefinitions: securityDefinitions,
              sortFunc: sortFunc
            }), navigation = _getUINavigationAndSe.navigation, services = _getUINavigationAndSe.services;

            // If we have tag information, let's add it to the navigation

            if (derefOpenApiV3.tags) {
              addTagDetailsToNavigation(navigation, derefOpenApiV3.tags);
            }

            // Additional information (if applicable)
            infoObj = (0, _extends3.default)({}, info);

            delete infoObj.title;
            delete infoObj.version;
            delete infoObj.description;

            definition = {
              title: info.title,
              version: info.version,
              description: info.description,
              info: infoObj,
              navigation: navigation,
              services: services,
              security: securityDefinitions
            };
            return _context.abrupt('return', definition);

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  function getUIReadyDefinition(_x2, _x3) {
    return _ref2.apply(this, arguments);
  }

  return getUIReadyDefinition;
}();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDefinition = undefined;

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(77);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @param {string} definitionUrl
 * @return {Promise<boolean>}
 */
var validateDefinition = exports.validateDefinition = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(definitionUrl) {
    var url, result, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = VALIDATOR_HOST + '/api/v1/validate';
            _context.next = 3;
            return (0, _isomorphicFetch2.default)(url + '?url=' + definitionUrl);

          case 3:
            result = _context.sent;

            if (!result.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return result.json();

          case 7:
            response = _context.sent;

            if (!(response.status === false)) {
              _context.next = 10;
              break;
            }

            throw new Error('The definition did not validate, see ' + VALIDATOR_HOST + '.');

          case 10:
            return _context.abrupt('return', true);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function validateDefinition(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _isomorphicFetch = __webpack_require__(181);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALIDATOR_HOST = 'https://openapi-converter.herokuapp.com';

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(78);

var _extends3 = _interopRequireDefault(_extends2);

exports.getSecurityDefinitions = getSecurityDefinitions;
exports.getUISecurity = getUISecurity;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extracts any security schemes from the given Open API V3 definition file.
 * Security schemes are defined in `components.securitySchemes`.
 * The API defines what security applies at either the top level (`security`)
 * or per operation.
 *
 * @param {Object} definition
 * @return {Object}
 */
function getSecurityDefinitions(definition) {
  var securityDefinitions = {};

  if (definition.components && definition.components.securitySchemes) {
    securityDefinitions = (0, _extends3.default)({}, definition.components.securitySchemes);
  }

  // Always set a name.
  Object.keys(securityDefinitions).forEach(function (key) {
    var scheme = securityDefinitions[key];
    var example = void 0;

    if (!scheme.name) {
      scheme.name = key;
    }

    if (scheme.type === 'http') {
      example = 'Authorization: ' + scheme.scheme + ' credentials';
    } else if (scheme.type === 'apiKey') {
      if (scheme.in === 'query') {
        example = '?' + scheme.name + '=credentials';
      } else {
        example = scheme.name + ': credentials';
      }
    }

    if (example) {
      scheme.example = example;
    }
  });

  return securityDefinitions;
}

/**
 * Simplifies the security definition for operation objects by merging the
 * global definition in.
 *
 * @param {Array} security
 * @param {Object} definitions
 * @return {Object}
 */
function getUISecurity(security, definitions) {
  return security.reduce(function (prev, curr) {
    var name = Object.keys(curr)[0];
    var definition = (0, _extends3.default)({}, definitions[name]);

    // If this definition is OAuth2/OpenIdConnect, add the applicable scopes.
    if (['oauth2', 'openIdConnect'].includes(definition.type) && curr[name].length) {
      definition.applicableScopes = curr[name];
    }

    prev[name] = definition;

    return prev;
  }, {});
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParserFunction = getParserFunction;
exports.getValidatorFunction = getValidatorFunction;

var _openApiV3Parser = __webpack_require__(306);

var _openApiV3Parser2 = _interopRequireDefault(_openApiV3Parser);

var _openApiV3Validator = __webpack_require__(307);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} type
 * @return {Function<Promise>}
 */
function getParserFunction(type) {
  if (type === 'open-api-v3') {
    return _openApiV3Parser2.default;
  }

  var errorMsg = 'Invalid type: ' + type;
  throw new Error(errorMsg);
}

/**
 * @param {string} type
 * @return {Function<Promise>}
 */
function getValidatorFunction(type) {
  if (type === 'open-api-v3') {
    return _openApiV3Validator.validateDefinition;
  }

  var errorMsg = 'Invalid type: ' + type;
  throw new Error(errorMsg);
}

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".body-content-schema, .body-content-example {\n  display: table;\n  width: 100%;\n  border: 2px solid black;\n  padding: 10px;\n  box-sizing: border-box; }\n\n.body-content-tabs {\n  position: relative;\n  top: 2px; }\n\n.body-content-tabs > div {\n  display: inline-block;\n  padding: 10px 20px 10px 0;\n  border-left: none;\n  cursor: pointer; }\n\n.body-content-tabs > div.active {\n  font-weight: bold;\n  border-bottom: none;\n  text-decoration: underline; }\n", ""]);

// exports


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".body-schema {\n  width: 100%;\n  border-spacing: 0;\n  padding: 10px 50px 10px 20px;\n  box-sizing: border-box; }\n\n.body-schema--even {\n  background-color: #1b2534; }\n\n.body-schema--odd {\n  background-color: #0e1827; }\n\n.schema-slide-toggle-appear,\n.schema-slide-toggle-enter {\n  max-height: 0; }\n\n.schema-slide-toggle-appear.schema-slide-toggle-appear-active,\n.schema-slide-toggle-enter.schema-slide-toggle-enter-active {\n  max-height: 1500px;\n  transition: max-height 500ms ease-in; }\n", ""]);

// exports


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "select {\n  background: transparent;\n  color: white;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-left: 15px;\n  font-size: medium; }\n", ""]);

// exports


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".content-container {\n  padding: 20px; }\n", ""]);

// exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".description-inline,\n.description-inline p {\n  display: inline; }\n\n.description p {\n  margin: .5rem 0; }\n", ""]);

// exports


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".body-content-example {\n  background-color: #111111;\n  color: white;\n  padding: 10px; }\n\n.action-buttons {\n  opacity: 0;\n  position: relative;\n  text-align: right;\n  padding-right: 10px; }\n\n.action-buttons.hovered {\n  opacity: 1; }\n\n.action-buttons > span {\n  color: white;\n  padding: 2px 10px;\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "#header {\n  padding: 0 20px; }\n  #header h1 {\n    margin-bottom: .5rem; }\n  #header nav a {\n    display: inline-block;\n    margin-right: .5rem; }\n", ""]);

// exports


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".indicator {\n  display: inline;\n  vertical-align: middle;\n  width: 15px;\n  height: 15px; }\n\n.indicator img {\n  width: 15px; }\n\n.indicator--up img {\n  transform: rotate(180deg); }\n\n.indicator--right img {\n  transform: rotate(-90deg); }\n", ""]);

// exports


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".method {\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  margin: 0 1rem 2rem 0;\n  padding: 1rem; }\n", ""]);

// exports


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".nav {\n  width: 20%;\n  height: 100%;\n  vertical-align: top;\n  background-color: #132033;\n  position: fixed;\n  top: 0;\n  box-sizing: border-box;\n  overflow-y: auto; }\n  .nav .indicator {\n    float: right;\n    display: block;\n    margin-top: 5px; }\n  .nav > div + div {\n    border-top: 1px solid #333333; }\n", ""]);

// exports


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".nav-tag-methods {\n  margin-bottom: .5rem; }\n\n.nav-method {\n  display: flex;\n  padding: .7rem 1.5rem;\n  font-size: smaller;\n  color: #FFF; }\n  .nav-method.active {\n    background-color: #0e1827; }\n  .nav-method.open {\n    display: flex; }\n  .nav-method.closed {\n    display: none; }\n  .nav-method .method-type {\n    width: 55px; }\n  .nav-method .method-title {\n    width: calc(100% - 55px); }\n", ""]);

// exports


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".nav-tag {\n  display: block;\n  padding: 1rem 1rem .5rem;\n  color: #FFF; }\n  .nav-tag:hover {\n    text-decoration: none; }\n    .nav-tag:hover span {\n      text-decoration: underline; }\n  .nav-tag.active {\n    background-color: #0c121d; }\n  .nav-tag.is-open {\n    display: block; }\n  .nav-tag.is-closed {\n    display: none; }\n", ""]);

// exports


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0e1827;\n  padding: 15% 0 0;\n  text-align: center;\n  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5); }\n  .overlay h3 {\n    font-style: italic;\n    font-weight: 300; }\n  .overlay img {\n    width: 250px;\n    height: 250px;\n    opacity: .4; }\n", ""]);

// exports


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".page {\n  width: 100%;\n  height: 100%; }\n\n.page-main {\n  margin-left: 20%;\n  padding-left: 10px;\n  width: 80%;\n  box-sizing: border-box;\n  border: 1px solid #0e1827; }\n", ""]);

// exports


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".property-name,\n.property-info {\n  vertical-align: middle;\n  padding-right: 10px; }\n\n.property-name {\n  width: 1%;\n  white-space: nowrap;\n  position: relative; }\n  .property-name span {\n    display: inline-block;\n    padding-right: 10px;\n    line-height: 40px;\n    vertical-align: middle; }\n\n.property-info {\n  width: 75%; }\n\n.property + .property .property-info {\n  border-top: 1px solid rgba(255, 255, 255, 0.3); }\n\n.property-required {\n  margin-left: 10px;\n  color: red; }\n\n.property--isclickable {\n  cursor: pointer;\n  font-weight: bold; }\n\n/* Tree */\n.property + .property .property-name::after, .body-schema-subset + .property .property-name::after {\n  content: '';\n  border-left: 1px solid red;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%; }\n\n.body-schema-subset > td {\n  border-left: 1px solid red; }\n\n.property.last + .body-schema-subset > td {\n  border-left: none; }\n\n.property-name::before {\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  border-top: 1px solid red;\n  width: 20px; }\n\n.property-name span:first-child::before {\n  content: '';\n  display: inline-block;\n  width: 10px;\n  height: 8px;\n  vertical-align: middle;\n  border-left: 1px solid red;\n  position: relative;\n  bottom: 2px; }\n\n.property:first-child .property-name::after {\n  content: '';\n  border-left: 1px solid red;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 52%; }\n\n.property:last-child .property-name::after, .property.last .property-name::after {\n  content: '';\n  border-left: 1px solid red;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 49%; }\n\n.property:only-of-type .property-name::after {\n  border: none; }\n\n.property:first-child.last .property-name::after {\n  border: none; }\n\n.enum,\n.default {\n  display: inline-block;\n  padding: 0 5px;\n  margin: 2px 3px;\n  border: 1px solid grey; }\n", ""]);

// exports


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".response {\n  margin-bottom: 5px; }\n  .response .body-content {\n    margin: 10px 0 20px 20px; }\n\n.response-info {\n  padding: 10px; }\n  .response-info .indicator {\n    margin-right: 10px; }\n\n.is-clickable {\n  cursor: pointer; }\n\n.response-code {\n  padding-right: 20px; }\n\n.success {\n  color: #4ccc4f; }\n\n.error {\n  color: #eb0f28; }\n", ""]);

// exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".security-container {\n  padding: 1rem 0;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n  .security-container .scheme {\n    display: inline-block;\n    padding: .4rem;\n    margin-left: .5rem;\n    background-color: #132033; }\n  .security-container .flow-type {\n    padding: 1rem 0; }\n    .security-container .flow-type + .flow-type {\n      border-top: 1px dotted rgba(255, 255, 255, 0.3); }\n", ""]);

// exports


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".service-container {\n  padding-top: 2rem; }\n", ""]);

// exports


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "html, body > div, .main {\n  height: 100%; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", helvetica, sans-serif;\n  line-height: 1.4;\n  color: white; }\n\n.main {\n  background-color: #0e1827; }\n\nul, ol {\n  margin: .5rem 0;\n  padding: 0; }\n  ul li, ol li {\n    margin-left: 1.5rem; }\n\nh3, h4, h5, h6 {\n  margin: 0; }\n\na {\n  color: #7ed3f4;\n  text-decoration: none; }\n  a:hover {\n    transition: color .25s;\n    color: #dcf3fc;\n    text-decoration: underline; }\n\n.inline-pairs {\n  display: inline-flex;\n  margin: 1em 0;\n  padding: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n\n.inline-pairs dt,\n.inline-pairs dd {\n  margin: 0;\n  padding: .5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.3); }\n\n.inline-pairs dt {\n  padding-right: 1.5rem;\n  font-weight: bold; }\n\n.oapi-demo .oapi-header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  height: 50px;\n  align-items: baseline;\n  background: #234f69;\n  z-index: 999;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", helvetica, sans-serif;\n  padding: .4rem 1rem;\n  border-bottom: 1px solid #222;\n  box-shadow: 0 1px 20px #000; }\n  .oapi-demo .oapi-header, .oapi-demo .oapi-header * {\n    box-sizing: border-box; }\n  .oapi-demo .oapi-header h1 {\n    margin: 0 .5rem 0 0;\n    font-size: 1.5rem;\n    text-transform: lowercase;\n    font-variant: small-caps;\n    font-weight: 100; }\n  .oapi-demo .oapi-header small {\n    color: #83b7d6;\n    font-style: italic; }\n\n.oapi-demo form {\n  flex: 1;\n  margin-left: 6.7rem;\n  text-align: right; }\n\n.oapi-demo small,\n.oapi-demo label {\n  font-size: smaller; }\n\n.oapi-demo input {\n  display: inline-block;\n  width: 50%;\n  padding: 0.5em;\n  font-size: .9rem;\n  border: 0;\n  border-bottom: 1px solid #3d89b6;\n  outline: 0;\n  margin: 0 .5rem;\n  color: #83b7d6;\n  background: none; }\n  .oapi-demo input:focus, .oapi-demo input:hover {\n    transition: all .2s;\n    color: #FFF;\n    border-bottom-color: #FFF; }\n\n.oapi-demo button {\n  background: none;\n  border: 2px solid #3d89b6;\n  border-radius: 3px;\n  font-size: smaller;\n  padding: .25rem .5rem;\n  color: #83b7d6;\n  cursor: pointer; }\n  .oapi-demo button:hover {\n    transition: all .2s;\n    color: #FFF;\n    border-color: #FFF; }\n\n.oapi-demo .nav, .oapi-demo .main {\n  margin-top: 50px; }\n", ""]);

// exports


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "html, body > div, .main {\n  height: 100%; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", helvetica, sans-serif;\n  line-height: 1.4;\n  color: white; }\n\n.main {\n  background-color: #0e1827; }\n\nul, ol {\n  margin: .5rem 0;\n  padding: 0; }\n  ul li, ol li {\n    margin-left: 1.5rem; }\n\nh3, h4, h5, h6 {\n  margin: 0; }\n\na {\n  color: #7ed3f4;\n  text-decoration: none; }\n  a:hover {\n    transition: color .25s;\n    color: #dcf3fc;\n    text-decoration: underline; }\n\n.inline-pairs {\n  display: inline-flex;\n  margin: 1em 0;\n  padding: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n\n.inline-pairs dt,\n.inline-pairs dd {\n  margin: 0;\n  padding: .5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.3); }\n\n.inline-pairs dt {\n  padding-right: 1.5rem;\n  font-weight: bold; }\n", ""]);

// exports


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _markdownIt = __webpack_require__(546);

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(723);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cm = (0, _markdownIt2.default)('commonmark');

var Description = function (_PureComponent) {
  (0, _inherits3.default)(Description, _PureComponent);

  function Description() {
    (0, _classCallCheck3.default)(this, Description);
    return (0, _possibleConstructorReturn3.default)(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
  }

  (0, _createClass3.default)(Description, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isInline = _props.isInline,
          description = _props.description;


      var text = void 0;
      if (isInline) {
        text = {
          __html: cm.renderInline(description)
        };
      } else {
        text = {
          __html: cm.render(description)
        };
      }

      return _react2.default.createElement('div', { className: (0, _classnames2.default)('description', {
          'description-inline': isInline
        }), dangerouslySetInnerHTML: text });
    }
  }]);
  return Description;
}(_react.PureComponent);

exports.default = Description;


Description.propTypes = {
  description: _propTypes2.default.string.isRequired,
  isInline: _propTypes2.default.bool
};

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(372);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./BodyContent.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./BodyContent.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(373);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./BodySchema.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./BodySchema.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(374);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./BodySchemaSwitcher.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./BodySchemaSwitcher.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(375);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./ContentContainer.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./ContentContainer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Description.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Description.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(377);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Example.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Example.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(378);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Header.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Indicator.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Indicator.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(380);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Method.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Method.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(381);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Navigation.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Navigation.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./NavigationMethod.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./NavigationMethod.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(383);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./NavigationTag.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./NavigationTag.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(384);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Overlay.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Overlay.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Page.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Page.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(386);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Property.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Property.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(387);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Response.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Response.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./SecurityContainer.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./SecurityContainer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./ServiceContainer.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./ServiceContainer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(390);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Demo.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./Demo.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./general.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./general.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgNTAwIj48c3R5bGU+LnN0MHtmaWxsOiNGRkY7fSAuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTUuMjkxMjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSAuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I0QxODVCODtzdHJva2Utd2lkdGg6MTY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30gLnN0M3tmaWxsOiNEMDg0QjQ7c3Ryb2tlOiNEMTg1Qjg7c3Ryb2tlLXdpZHRoOjAuOTA3ODtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSAuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjguODAxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48cGF0aCBmaWxsPSJ0cmFuc3BhcmVudCIgZD0iTTAgMGg1MDB2NTAwSDB6Ii8+PHBhdGggZD0iTTMxNC4zIDI3My43SDEzNi42djE0Ny40YzAgMTYuNiAxMy41IDMwLjEgMzAuMSAzMC4xaDE2Mi45YzE2LjYgMCAzMC4xLTEzLjUgMzAuMS0zMC4xdi0xMDJjLS4xLTI1LjEtMjAuMy00NS40LTQ1LjQtNDUuNHoiLz48Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDEuOSIgY3k9IjM0Mi45IiByPSIyNS44Ii8+PGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjkyLjciIGN5PSIzNDIuOSIgcj0iMjUuOCIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMTkuNSAzMTMuM2gyMS43Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI0OC4xIDQwOWMtNS44IDQuNS0xNC4zIDkuMS0yNi43IDEyLjctMjQgNi45LTM1LjMtNS41LTQwLjMtMTQuOC0xLjMtMi41IDEuMi01LjIgMy44LTQuMiA2LjcgMi44IDE3LjUgMy45IDMwLjUtNy43IDIyLTE5LjYgMjQtNy44IDMyLjEtOGgxLjJjOCAuMiAxMC4xLTExLjcgMzIuMSA4IDEzIDExLjYgMjMuOSAxMC42IDMwLjUgNy43IDIuNi0xLjEgNS4xIDEuNyAzLjggNC4yLTQuOSA5LjMtMTYuMiAyMS43LTQwLjMgMTQuOC0xMi43LTMuNi0yMC45LTgtMjYuNy0xMi43ek0zNzcuOCAyNzQuOWwtMjkuMy04TDM4MiAxNDMuNmM1LjUtMjAuMi02LjQtNDEuMS0yNi42LTQ2LjZMMjQ4LjkgNjhjLTIwLjItNS41LTQxLjEgNi40LTQ2LjYgMjYuNkwxNjguOCAyMThsLTI5LjMtOGMtMTMuMS0zLjYtMjYuNyA0LjItMzAuMyAxNy4zbC00LjMgMTUuOGMtMy42IDEzLjEgNC4yIDI2LjcgMTcuMyAzMC4zbDIzOC40IDY0LjljMTMuMSAzLjYgMjYuNy00LjIgMzAuMy0xNy4zbDQuMy0xNS44YzMuNS0xMy4yLTQuMy0yNi43LTE3LjQtMzAuM3oiLz48cGF0aCBkPSJNMzY3LjEgMzU1LjFjLTMuNiAwLTcuMi0uNS0xMC43LTEuNGwtMjM4LjQtNjVjLTIxLjYtNS45LTM0LjQtMjguMi0yOC41LTQ5LjhsNC4zLTE1LjhjNS45LTIxLjYgMjguMi0zNC40IDQ5LjgtMjguNWwxNCAzLjhMMTg3IDkwLjVjNy44LTI4LjcgMzcuNS00NS42IDY2LjItMzcuOGwxMDYuNSAyOWMxMy45IDMuOCAyNS41IDEyLjcgMzIuNiAyNS4yIDcuMSAxMi41IDkgMjcgNS4yIDQwLjlMMzY4IDI1NS43bDE0IDMuOGMyMS42IDUuOSAzNC40IDI4LjIgMjguNSA0OS44bC00LjMgMTUuOGMtMi44IDEwLjUtOS42IDE5LjItMTkgMjQuNi02LjIgMy42LTEzLjEgNS40LTIwLjEgNS40ek0xMzMgMjI1LjFjLTMuOCAwLTcuNCAyLjYtOC40IDYuNGwtNC4zIDE1LjhjLTEuMyA0LjYgMS41IDkuNCA2LjEgMTAuN2wyMzguNCA2NC45YzIuNC43IDUgLjMgNy4xLTEuMSAxLjgtMS4yIDMuMS0zLjEgMy43LTUuM2w0LjItMTUuNWMxLjMtNC42LTEuNS05LjQtNi4xLTEwLjdsLTI3LjUtNy41Yy05LjUtMi42LTE1LjEtMTIuNC0xMi41LTIxLjlsMzMuMS0xMjEuNWMxLjUtNS43LjgtMTEuNi0yLjEtMTYuNy0yLjktNS4xLTcuNi04LjgtMTMuMy0xMC4zbC0xMDYuNS0yOWMtMTEuNy0zLjItMjMuOCAzLjctMjcgMTUuNGwtMzMuMSAxMjEuNWMtMi42IDkuNS0xMi40IDE1LjEtMjEuOSAxMi41bC0yNy41LTcuNWMtLjktLjEtMS43LS4yLTIuNC0uMnoiLz48L3N2Zz4K"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAStJREFUSA3tlb1qAkEUhf0BSSGphBSCRFuL1FYWVnY2PoE2eYPYWFoKgp0vYJX0VtY2thosBatAGtGAsvkuqIzo7M64a+Uc+Nidufees9xmYzEntwG3AbeBMBvwPC8Lc+iE8fGbxbsC39A89XF4hS2IeqdCRC941uFPzNHHmS0XVYg8HM932IOoC/GzYDlwGWk4fm04qnURqF7QFTocjwT0D4k7ng01Q/tO483hzKZgCKIN1LRB1woMWIczk4YRiH6hfM078I5B43B6MzAB0QreAgP8GjAIDKcnBzMQLaDg52lcw0gbTq0ISxBN4cXY2KQRw4tw7krwA6IxPJt4WfdgrIZ/cl6D6AuerA1tBghQwyV0AEkbj5t7lfC7/VS0H0d4Xlt0BbeBh9zAP9TBlnFIO53nAAAAAElFTkSuQmCC"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);


/***/ })

},[757]);