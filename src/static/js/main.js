(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _socket = require("./socket");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n          <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n      ");
  messages.appendChild(li);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _socket.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3TWVzc2FnZSIsIm1lc3NhZ2UiLCJoYW5kbGVTZW5kTXNnIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNsQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw4Q0FDNEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEL0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxJQUhaO0FBS0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJIOztBQVVPLElBQU1JLGdCQUFnQixHQUFFLFNBQWxCQSxnQkFBa0I7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxNQUFXTixRQUFYLFFBQVdBLFFBQVg7QUFBQSxTQUM3QkYsU0FBUyxDQUFDUSxPQUFELEVBQVVOLFFBQVYsQ0FEb0I7QUFBQSxDQUF4Qjs7OztBQUdQLElBQU1PLGFBQWEsR0FBRSxTQUFmQSxhQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHYixPQUFPLENBQUNjLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUY0QixNQUdwQkMsS0FIb0IsR0FHVkYsS0FIVSxDQUdwQkUsS0FIb0I7QUFJNUIsMkJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbEIsT0FBL0IsRUFBd0M7QUFBQ1MsSUFBQUEsT0FBTyxFQUFFTTtBQUFWLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFhLEVBQWI7QUFDQWQsRUFBQUEsU0FBUyxDQUFDYyxLQUFELENBQVQ7QUFDSCxDQVBEOztBQVNBLElBQUdmLE9BQUgsRUFBWTtBQUNSQSxFQUFBQSxPQUFPLENBQUNtQixnQkFBUixDQUF5QixRQUF6QixFQUFvQ1QsYUFBcEM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldFwiO1xyXG5cclxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7XHJcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcclxuXHJcbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7XHJcbiAgICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXHJcbiAgICB9Ojwvc3Bhbj4gJHt0ZXh0fVxyXG4gICAgICBgO1xyXG4gICAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9KHttZXNzYWdlLCBuaWNrbmFtZX0pID0+XHJcbiAgYXBwZW5kTXNnKG1lc3NhZ2UsIG5pY2tuYW1lKTtcclxuICBcclxuY29uc3QgaGFuZGxlU2VuZE1zZz0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHttZXNzYWdlOiB2YWx1ZX0pO1xyXG4gICAgaW5wdXQudmFsdWUgPVwiXCI7XHJcbiAgICBhcHBlbmRNc2codmFsdWUpO1xyXG59XHJcblxyXG5pZihzZW5kTXNnKSB7XHJcbiAgICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiAsIGhhbmRsZVNlbmRNc2cpO1xyXG59Il19
},{"./socket":5}],2:[function(require,module,exports){
"use strict";

require("./socket");

require("./login");

require("./chat");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWI0M2JiM2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0XCI7XHJcbmltcG9ydCBcIi4vbG9naW5cIjtcclxuaW1wb3J0IFwiLi9jaGF0XCI7Il19
},{"./chat":1,"./login":3,"./socket":5}],3:[function(require,module,exports){
"use strict";

var _socket = require("./socket");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _socket.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDeEI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBQ1QsSUFBQUEsUUFBUSxFQUFSQTtBQUFELEdBQXZDO0FBQ0EsMkJBQVlJLE1BQVo7QUFDSCxDQUxEOztBQVFBLElBQUdKLFFBQVEsS0FBSyxJQUFoQixFQUFzQjtBQUNsQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosVUFBakI7QUFDSCxDQUZELE1BRU87QUFDSE4sRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDSDs7QUFHRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM1QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGNEIsTUFHcEJxQixLQUhvQixHQUdYRCxLQUhXLENBR3BCQyxLQUhvQjtBQUk1QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWEsRUFBYjtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWtCWCxTQUFsQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNILENBUkQ7O0FBVUEsSUFBR3BCLFNBQUgsRUFBYztBQUNWQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFzQ04sZ0JBQXRDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldFwiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcbiAgICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7bmlja25hbWV9KTtcclxuICAgIGluaXRTb2NrZXRzKHNvY2tldCk7XHJcbn1cclxuXHJcblxyXG5pZihuaWNrbmFtZSA9PT0gbnVsbCkge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dJbihuaWNrbmFtZSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfT0gaW5wdXQ7XHJcbiAgICBpbnB1dC52YWx1ZT0gXCJcIjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9ICBMT0dHRURfSU47XHJcbiAgICBsb2dJbih2YWx1ZSk7XHJcbn1cclxuXHJcbmlmKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiAsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG59Il19
},{"./socket":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, " just joined!"), "rgb(0,122,255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, " just left!"), "rgb(255,149,0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUVDLElBQUYsRUFBUUMsS0FBUixFQUFrQjtBQUN2QyxNQUFNQyxZQUFZLEdBQUVMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFwQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBd0JKLElBQXhCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBb0NMLEtBQXBDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF3QixjQUF4QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0gsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBRXpDWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixvQkFBNkIsZ0JBQTdCLENBQWhCO0FBQ0gsQ0FITTs7OztBQUtBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsUUFBaUI7QUFBQSxNQUFkRCxRQUFjLFNBQWRBLFFBQWM7QUFDL0NYLEVBQUFBLGdCQUFnQixXQUFJVyxRQUFKLGtCQUEyQixnQkFBM0IsQ0FBaEI7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICggdGV4dCwgY29sb3IpID0+IHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPXRleHQ7XHJcbiAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yPSBjb2xvcjtcclxuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWU9IFwibm90aWZpY2F0aW9uXCI7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHtuaWNrbmFtZX0pID0+IHtcclxuICAgIFxyXG4gICAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwxMjIsMjU1KVwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWQgPSAoeyBuaWNrbmFtZX0pID0+IHtcclxuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3QgbGVmdCFgLCBcInJnYigyNTUsMTQ5LDApXCIpO1xyXG59Il19
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocekt = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocekt = function updateSocekt(aSocket) {
  return socket = aSocket;
};

exports.updateSocekt = updateSocekt;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocekt(aSocket);
  aSocket.on(window.events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJnZXRTb2NrZXQiLCJ1cGRhdGVTb2Nla3QiLCJhU29ja2V0IiwiaW5pdFNvY2tldHMiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIiwiZGlzY29ubmVjdGVkIiwiaGFuZGxlRGlzY29ubmVjdGVkIiwibmV3TXNnIiwiaGFuZGxlTmV3TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsT0FBTztBQUFBLFNBQUtILE1BQU0sR0FBR0csT0FBZDtBQUFBLENBQTVCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQUEsZ0JBQ2pCRSxNQURpQjtBQUFBLE1BQzVCQyxNQUQ0QixXQUM1QkEsTUFENEI7QUFFcENKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRixNQUFNLENBQUNDLE1BQVAsQ0FBY0UsT0FBekIsRUFBa0NDLDRCQUFsQztBQUNBTixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDSSxZQUFsQixFQUFnQ0MsaUNBQWhDO0FBQ0FSLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNNLE1BQWxCLEVBQTBCQyxzQkFBMUI7QUFDSCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcclxuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG5cclxubGV0IHNvY2tldCA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNvY2VrdCA9IGFTb2NrZXQgPT4gKHNvY2tldCA9IGFTb2NrZXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcclxuICAgIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcbiAgICB1cGRhdGVTb2Nla3QoYVNvY2tldCk7XHJcbiAgICBhU29ja2V0Lm9uKHdpbmRvdy5ldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XHJcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XHJcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UgKTtcclxufTsiXX0=
},{"./chat":1,"./notifications":4}]},{},[2])