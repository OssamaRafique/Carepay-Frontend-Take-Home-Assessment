'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">care-pay-frontend-assignment documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"' : 'data-target="#xs-components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"' : 'id="xs-components-links-module-AppModule-b3944b3b7a1e003790db893c822738b03ac4901bc0184ac74990f3a896cce7fd8ee1097e5f7f98de4aee07201e95745847eec1397d0a06aaf67279984d7c5cd6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FofErrorModule.html\" data-type=\"entity-link\" >FofErrorModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"' : 'data-target="#xs-components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"' : 'id="xs-components-links-module-FofErrorModule-98cb19563864b1b5a87b306da9c3b8156700eb304521e2ca1cdd524387e330006fdf8091e8e8eae5783ffa612bb2a122fc7e5441eb54f2da406bfed94b0c9d2d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FofErrorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FofErrorComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LayoutModule.html\" data-type=\"entity-link\" >LayoutModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"' : 'data-target="#xs-components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"' : 'id="xs-components-links-module-LayoutModule-a83ea8b8519bfc49e3bab1b29e9b65a0bea513815a21511abbd22cca201240883447a40003ee3e69b2ac04aa78a343a504a1f078fbe7cbcebbc3920f9de492c6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LayoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LayoutComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TreatmentsModule.html\" data-type=\"entity-link\" >TreatmentsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' : 'data-target="#xs-components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' : 'id="xs-components-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/TreatmentsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TreatmentsComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' : 'data-target="#xs-injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"' : 'id="xs-injectables-links-module-TreatmentsModule-d61d810eaf1e86819d59fda65eff6516a746d2375db8ce980b28dc5fe8aeed22996dacaed027c3f95e4614896d2fa38e1a0ae37cfa2ff381634e13149841bb5c"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TreatmentService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TreatmentService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TreatmentsTableModule.html\" data-type=\"entity-link\" >TreatmentsTableModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"' : 'data-target="#xs-components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"' : 'id="xs-components-links-module-TreatmentsTableModule-d12350b42303ae1d19203947f259c2385db9a6386e91b79b61e216cd9698fb34ad8fddc6c1252e717b9ef9e71f078b58dc9aa7d297ad5913327f5404bea02dfb"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/TreatmentsTableComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TreatmentsTableComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/TreatmentService.html\" data-type=\"entity-link\" >TreatmentService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/IHeaderMenuItem.html\" data-type=\"entity-link\" >IHeaderMenuItem</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ITreatment.html\" data-type=\"entity-link\" >ITreatment</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ITreatmentFilter.html\" data-type=\"entity-link\" >ITreatmentFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ITreatmentForm.html\" data-type=\"entity-link\" >ITreatmentForm</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));