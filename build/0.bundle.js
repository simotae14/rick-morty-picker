(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/EpisodesList.tsx":
/*!*****************************************!*\
  !*** ./src/components/EpisodesList.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EpisodesList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction EpisodesList(props) {\n  var favourites = props.favourites,\n      store = props.store,\n      episodes = props.episodes,\n      toggleFavAction = props.toggleFavAction;\n  var state = store.state,\n      dispatch = store.dispatch;\n  return episodes.map(function (episode) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      key: episode.id,\n      className: \"episode-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: episode.image.medium,\n      alt: \"Rick and Morty \".concat(episode.name)\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, episode.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      style: {\n        display: 'flex',\n        justifyContent: 'space-between'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Season: \", episode.season, \" Number: \", episode.number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: function onClick() {\n        return toggleFavAction(state, dispatch, episode);\n      }\n    }, favourites.find(function (fav) {\n      return fav.id === episode.id;\n    }) ? 'Unfav' : 'Fav')));\n  });\n}\n\n//# sourceURL=webpack:///./src/components/EpisodesList.tsx?");

/***/ })

}]);