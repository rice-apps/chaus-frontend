webpackHotUpdate(0,{

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(261);
	
	var _userActions = __webpack_require__(514);
	
	var _RaisedButton = __webpack_require__(515);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var processedShifts = function processedShifts(shiftArr) {
	
	    var shiftString = shiftArr[0] - 1 + ":55 to ";
	
	    for (var i = 0; i < shiftArr.length - 1; i++) {
	        if (shiftArr[i + 1] != shiftArr[i] + 1) {
	            shiftString += shiftArr[i].toString() + ":55, ";
	            shiftString += (shiftArr[i + 1] - 1).toString() + ":55 to ";
	        }
	    };
	    shiftString += shiftArr[shiftArr.length - 1].toString() + ":55";
	    return shiftString;
	};
	
	var GenerateSchedule = function GenerateSchedule(_ref) {
	    var activeUser = _ref.activeUser,
	        activeSchedule = _ref.activeSchedule,
	        get_schedule = _ref.get_schedule;
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_RaisedButton2.default, { label: activeUser.netid + "'s Schedule",
	            primary: typeof activeUser.netid !== "undefined",
	            disabled: typeof activeUser.netid === "undefined",
	            onClick: function onClick() {
	                return get_schedule(activeUser.netid);
	            } }),
	        Object.keys(activeSchedule).map(function (key) {
	            console.log(activeSchedule[key]);
	            var shiftString = '';
	            if (activeSchedule[key][0]) {
	                var shiftString = activeSchedule[key][0] - 1 + ":55 to ";
	            }
	
	            // for (var i = 0; i<shiftArr.length-1; i++)
	            // {
	            //     if (shiftArr[i+1] != (shiftArr[i]+1))
	            //     {
	            //         shiftString += shiftArr[i].toString()+":55, "
	            //         shiftString += (shiftArr[i+1]-1).toString()+":55 to "
	            //     }
	            // };
	            // shiftString += (shiftArr[shiftArr.length-1]).toString()+":55";
	
	            return _react2.default.createElement(
	                'p',
	                null,
	                key,
	                ': ',
	                shiftString
	            );
	        })
	    );
	};
	
	{/*<button onClick={() => get_schedule(activeUser.netid)}>GENERATE SCHEDULE</button>*/}
	
	{/*<p>{key}: {activeSchedule[key].join(', ')}</p>*/}
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        activeUser: state.eCal.activeReducer.user,
	        activeSchedule: state.eCal.activeReducer.schedule
	    };
	}, function (dispatch) {
	    return {
	        get_schedule: function get_schedule(user) {
	            return dispatch((0, _userActions.get_schedule)(user));
	        }
	    };
	})(GenerateSchedule);

/***/ })

})
//# sourceMappingURL=0.41de0fec848cf175206f.hot-update.js.map