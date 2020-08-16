"use strict";
var MainTalker = /** @class */ (function () {
    function MainTalker() {
    }
    MainTalker.prototype.say = function () {
        var msg = "MainTalker: Hello!";
        console.log(msg);
        return msg;
    };
    return MainTalker;
}());
var mt = new MainTalker();
mt.say();
//# sourceMappingURL=app.js.map