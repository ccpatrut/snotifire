'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ng-snotify</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' : 'data-target="#xs-components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' : 'id="xs-components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' : 'data-target="#xs-injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' : 'id="xs-injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/SnotifireService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SnotifireService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/NgxSnotifireModule.html\" data-type=\"entity-link\" >NgxSnotifireModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' : 'data-target="#xs-components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' : 'id="xs-components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ButtonsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ButtonsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NgxSnotifireComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NgxSnotifireComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PromptComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PromptComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ToastComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ToastComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' : 'data-target="#xs-pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' : 'id="xs-pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/KeysPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >KeysPipe</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"pipes/TruncatePipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TruncatePipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/ButtonsComponent.html\" data-type=\"entity-link\" >ButtonsComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/NgxSnotifireComponent.html\" data-type=\"entity-link\" >NgxSnotifireComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/PromptComponent.html\" data-type=\"entity-link\" >PromptComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/ToastComponent.html\" data-type=\"entity-link\" >ToastComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/SnotifireModel.html\" data-type=\"entity-link\" >SnotifireModel</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SnotifireToastModel.html\" data-type=\"entity-link\" >SnotifireToastModel</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/SnotifireService.html\" data-type=\"entity-link\" >SnotifireService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/ButtonsConfig.html\" data-type=\"entity-link\" >ButtonsConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FunctionalConfig.html\" data-type=\"entity-link\" >FunctionalConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/NotificationConfig.html\" data-type=\"entity-link\" >NotificationConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/NotificationFormValue.html\" data-type=\"entity-link\" >NotificationFormValue</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SnotifireAnimate.html\" data-type=\"entity-link\" >SnotifireAnimate</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SnotifireConfig.html\" data-type=\"entity-link\" >SnotifireConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SnotifireDefaults.html\" data-type=\"entity-link\" >SnotifireDefaults</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SnotifireGlobalConfig.html\" data-type=\"entity-link\" >SnotifireGlobalConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SnotifireNotifications.html\" data-type=\"entity-link\" >SnotifireNotifications</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ToastData.html\" data-type=\"entity-link\" >ToastData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/VisualConfig.html\" data-type=\"entity-link\" >VisualConfig</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links"' : 'data-target="#xs-pipes-links"', ">\n                                <span class=\"icon ion-md-add\"></span>\n                                <span>Pipes</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"pipes/KeysPipe.html\" data-type=\"entity-link\" >KeysPipe</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"pipes/TruncatePipe.html\" data-type=\"entity-link\" >TruncatePipe</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));