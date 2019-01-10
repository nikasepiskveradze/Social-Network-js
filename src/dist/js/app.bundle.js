/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Login = __webpack_require__(/*! ./modules/Login */ \"./src/assets/js/modules/Login.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Profile = __webpack_require__(/*! ./modules/Profile */ \"./src/assets/js/modules/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = {\n  init: function init() {\n    if (window.location.pathname === '/') {\n      var login = new _Login2.default();\n    }\n\n    if (window.location.pathname === '/profile.html') {\n      var profile = new _Profile2.default();\n    }\n  }\n};\n\nApp.init();\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/lib/EasyHTTP.js":
/*!***************************************!*\
  !*** ./src/assets/js/lib/EasyHTTP.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar EasyHTTP = function () {\n  function EasyHTTP() {\n    _classCallCheck(this, EasyHTTP);\n\n    this.http = new XMLHttpRequest();\n  }\n\n  // Make an GET Request\n\n\n  _createClass(EasyHTTP, [{\n    key: 'get',\n    value: function get(url, callback) {\n      var _this = this;\n\n      this.http.open('GET', url, true);\n\n      this.http.onload = function () {\n        if (_this.http.status === 200) {\n          callback(null, _this.http.responseText);\n        } else {\n          callback('Error: ' + _this.http.status);\n        }\n      };\n\n      this.http.send();\n    }\n\n    // Make an POST Request\n\n  }, {\n    key: 'post',\n    value: function post(url, data, callback) {\n      var _this2 = this;\n\n      this.http.open('POST', url, true);\n      this.http.setRequestHeader('Content-Type', 'application/json');\n\n      this.http.onload = function () {\n        callback(null, _this2.http.responseText);\n      };\n\n      this.http.send(JSON.stringify(data));\n    }\n\n    // Make an PUT Request\n\n  }, {\n    key: 'put',\n    value: function put(url, data, callback) {\n      var _this3 = this;\n\n      this.http.open('PUT', url, true);\n      this.http.setRequestHeader('Content-Type', 'application/json');\n\n      this.http.onload = function () {\n        callback(null, _this3.http.responseText);\n      };\n\n      this.http.send(JSON.stringify(data));\n    }\n\n    // Make an DELETE Request\n\n  }, {\n    key: 'delete',\n    value: function _delete(url, callback) {\n      var _this4 = this;\n\n      this.http.open('DELETE', url, true);\n\n      this.http.onload = function () {\n        if (_this4.http.status === 200) {\n          callback(null, 'Deleted...');\n        } else {\n          callback('Error: ' + _this4.http.status);\n        }\n      };\n\n      this.http.send();\n    }\n  }]);\n\n  return EasyHTTP;\n}();\n\nvar http = new EasyHTTP();\n\nexports.default = http;\n\n//# sourceURL=webpack:///./src/assets/js/lib/EasyHTTP.js?");

/***/ }),

/***/ "./src/assets/js/modules/Login.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/Login.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _EasyHTTP = __webpack_require__(/*! ../lib/EasyHTTP */ \"./src/assets/js/lib/EasyHTTP.js\");\n\nvar _EasyHTTP2 = _interopRequireDefault(_EasyHTTP);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Login = function () {\n  function Login() {\n    _classCallCheck(this, Login);\n\n    this.email = '#email';\n    this.password = '#password';\n    this.login = '#login';\n\n    this.loadEvents();\n  }\n\n  _createClass(Login, [{\n    key: 'loadEvents',\n    value: function loadEvents() {\n      document.querySelector(this.login).addEventListener('click', this.logIn.bind(this));\n    }\n  }, {\n    key: 'logIn',\n    value: function logIn(e) {\n      _EasyHTTP2.default.get('http://localhost:3000/users', this.submitLogIn.bind(this));\n\n      e.preventDefault();\n    }\n  }, {\n    key: 'submitLogIn',\n    value: function submitLogIn(error, data) {\n      var email = document.querySelector(this.email).value;\n      var password = document.querySelector(this.password).value;\n\n      var user = JSON.parse(data).find(function (u) {\n        return email === u.email && password === u.password;\n      });\n\n      if (!user) {\n        console.log('User Not Found');\n      } else {\n        // console.log(user);\n        window.location.href = 'http://localhost:3001/profile.html';\n        localStorage.setItem('userLogged', JSON.stringify(user.id));\n      }\n    }\n  }]);\n\n  return Login;\n}();\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/assets/js/modules/Login.js?");

/***/ }),

/***/ "./src/assets/js/modules/Profile.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/Profile.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _EasyHTTP = __webpack_require__(/*! ../lib/EasyHTTP */ \"./src/assets/js/lib/EasyHTTP.js\");\n\nvar _EasyHTTP2 = _interopRequireDefault(_EasyHTTP);\n\nvar _UI = __webpack_require__(/*! ../modules/UI */ \"./src/assets/js/modules/UI.js\");\n\nvar _UI2 = _interopRequireDefault(_UI);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Profile = function () {\n  function Profile() {\n    _classCallCheck(this, Profile);\n\n    this.text = '#text';\n    this.publish = '#publish';\n    this.user = JSON.parse(localStorage.getItem('userLogged'));\n\n    this.loadEvents();\n  }\n\n  _createClass(Profile, [{\n    key: 'loadEvents',\n    value: function loadEvents() {\n      var _this = this;\n\n      document.addEventListener('DOMContentLoaded', function () {\n        _this.getPosts(function (data) {\n          _UI2.default.profilePostRender(JSON.parse(data));\n        });\n      });\n\n      document.querySelector(this.publish).addEventListener('click', this.addPost.bind(this));\n    }\n  }, {\n    key: 'getPosts',\n    value: function getPosts(use) {\n      _EasyHTTP2.default.get('http://localhost:3000/users/' + this.user, function (error, data) {\n        use(data);\n      });\n    }\n  }, {\n    key: 'putPosts',\n    value: function putPosts(newPost) {\n      _EasyHTTP2.default.put('http://localhost:3000/users/' + this.user, newPost, function (error, data) {\n        _UI2.default.profilePostRender(newPost);\n      });\n    }\n  }, {\n    key: 'addPost',\n    value: function addPost() {\n      var _this2 = this;\n\n      var txt = document.querySelector(this.text).value;\n\n      if (txt === '') {\n        alert('Please Fill Field');\n        return;\n      }\n\n      var information = {\n        body: txt\n      };\n\n      this.getPosts(function (data) {\n        var user = JSON.parse(data);\n\n        user.posts.push(information);\n\n        _this2.putPosts(user);\n      });\n    }\n  }]);\n\n  return Profile;\n}();\n\nexports.default = Profile;\n\n//# sourceURL=webpack:///./src/assets/js/modules/Profile.js?");

/***/ }),

/***/ "./src/assets/js/modules/UI.js":
/*!*************************************!*\
  !*** ./src/assets/js/modules/UI.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UI = function () {\n  function UI() {\n    _classCallCheck(this, UI);\n\n    this.profileNav = '.fb-profile-nav';\n    this.profilePersonal = '.fb-personal';\n    this.profilePost = '.fb-post';\n    this.profileContact = '.fb-contact';\n\n    this.text = '#text';\n  }\n\n  _createClass(UI, [{\n    key: 'profilePostRender',\n    value: function profilePostRender(user) {\n      var pts = document.querySelector(this.profilePost);\n      var output = '';\n\n      var name = user.name;\n      var lastname = user.lastname;\n      var image = user.image;\n\n      user.posts.reverse().forEach(function (post) {\n        output += '\\n        <div class=\"fb-post__item\">\\n          <div class=\"fb-post__header\">\\n            <img src=\"' + image + '\" alt=\"\">\\n\\n            <div class=\"fb-post__header__info\">\\n              <p class=\"fb-post__header__info__name\"><a href=\"#\">' + name + ' ' + lastname + '</a></p>\\n              <p class=\"fb-post__header__info__date\">September 17 At 9:01 AM</p>\\n            </div>\\n          </div>\\n\\n          <div class=\"fb-post__content\">\\n            <p>' + post.body + '</p>\\n          </div>\\n\\n          <div class=\"fb-post__footer\">\\n            <a href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> Like</a>\\n            <a href=\"#\"><i class=\"fa fa-comment-o\"></i> Comments</a>\\n            <a href=\"#\"><i class=\"fa fa-share\"></i> Share</a>\\n          </div>\\n        </div>\\n      ';\n      });\n\n      pts.innerHTML = output;\n      this.clearTextArea();\n    }\n  }, {\n    key: 'clearTextArea',\n    value: function clearTextArea() {\n      document.querySelector(this.text).value = '';\n    }\n  }]);\n\n  return UI;\n}();\n\nvar ui = new UI();\n\nexports.default = ui;\n\n//# sourceURL=webpack:///./src/assets/js/modules/UI.js?");

/***/ })

/******/ });