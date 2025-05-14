'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var ClockPicker = function ClockPicker(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder;
  var picker = React.useRef();
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showClock = _useState2[0],
    setShowClock = _useState2[1];
  var _useState3 = React.useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    hourData = _useState4[0],
    setHourData = _useState4[1];
  var _useState5 = React.useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    minuteData = _useState6[0],
    setMinuteData = _useState6[1];
  var _useState7 = React.useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    timeData = _useState8[0],
    setTimeData = _useState8[1];
  var _useState9 = React.useState("hour"),
    _useState0 = _slicedToArray(_useState9, 2),
    minuteHour = _useState0[0],
    setMinuteHour = _useState0[1];
  var _useState1 = React.useState("AM"),
    _useState10 = _slicedToArray(_useState1, 2),
    hourFormat = _useState10[0],
    setHourFormat = _useState10[1];
  var hourSet = ["03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02"];
  var minuteSet = ["15", "20", "25", "30", "35", "40", "45", "50", "55", "00", "05", "10"];
  var handleTimeSelect = function handleTimeSelect(state, action) {
    if (action === "hour") {
      setHourData(state);
      setMinuteHour("minute");
    } else if (action === "minute") {
      setMinuteData(state);
    }
  };
  var handleHourFormat = function handleHourFormat(state) {
    setHourFormat(state.checked ? "PM" : "AM");
  };
  var handleClockChange = function handleClockChange(state) {
    setMinuteHour(state);
  };
  var handleInputClick = function handleInputClick() {
    setShowClock(true);
  };
  React.useEffect(function () {
    if (hourData !== "" && minuteData !== "") {
      setTimeData(hourData + " : " + minuteData + " " + hourFormat);
      onChange("".concat(hourData, ":").concat(minuteData, " ").concat(hourFormat));
    }
  }, [hourData, minuteData, hourFormat]);
  React.useEffect(function () {
    document.addEventListener("mousedown", function (e) {
      if (picker.current && !picker.current.contains(e.target)) {
        setShowClock(false);
      }
    });
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "clock__picker",
    ref: picker
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "text",
    readOnly: true,
    name: "email",
    value: value ? value : timeData,
    onClick: handleInputClick,
    onChange: function onChange(e) {
      return setTimeData(e.target.value);
    },
    placeholder: "".concat(placeholder ? placeholder : "Select Time")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "picker__dropdown"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dropdown__content ".concat(showClock ? "active" : "")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "seted_clock_time"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "digital__numbers"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "btn__time__selector ".concat(minuteHour === "hour" ? "active" : ""),
    onClick: function onClick() {
      return handleClockChange("hour");
    }
  }, hourData !== "" ? hourData : "--"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "time_split"
  }, ":"), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "btn__time__selector ".concat(minuteHour === "minute" ? "active" : ""),
    onClick: function onClick() {
      return handleClockChange("minute");
    }
  }, minuteData !== "" ? minuteData : "--")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "clock_format"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "hourFormt"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "AM"), /*#__PURE__*/React__default["default"].createElement("span", null, "PM"), /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    id: "hourFormt",
    onChange: function onChange(e) {
      return handleHourFormat(e.target);
    },
    className: "hour__format"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "analog__clock"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    id: "hourClock",
    className: "hour__list clock--list ".concat(minuteHour === "hour" ? "active" : "")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "center_point"
  }), hourSet && hourSet.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement("button", {
      className: "clock__time hour",
      key: index,
      style: {
        "--i": index
      },
      onClick: function onClick() {
        return handleTimeSelect(item, "hour");
      }
    }, item);
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    id: "minuteClock",
    className: "minute_list clock--list ".concat(minuteHour === "minute" ? "active" : "")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "center_point"
  }), minuteSet && minuteSet.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement("button", {
      className: "clock__time minute",
      key: index,
      style: {
        "--i": index
      },
      onClick: function onClick() {
        return handleTimeSelect(item, "minute");
      }
    }, item);
  }))))));
};

exports["default"] = ClockPicker;
