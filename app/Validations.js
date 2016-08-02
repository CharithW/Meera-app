System.register(['./meeting'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var meeting_1;
    var Validations;
    return {
        setters:[
            function (meeting_1_1) {
                meeting_1 = meeting_1_1;
            }],
        execute: function() {
            Validations = (function () {
                function Validations() {
                }
                //  static test = "hello ";
                Validations.setVariables = function (meetings) {
                    console.log(meetings);
                    var m = new meeting_1.Meetings();
                    meetings.forEach(function (element) {
                        var timestampNow = new Date();
                        var timestampStart = new Date(element.start);
                        var timestampEnd = new Date(element.end);
                        if (timestampStart < timestampNow && timestampNow < timestampEnd) {
                            m = element;
                            console.log(m);
                        }
                        // console.log("\n");             
                    });
                    return m;
                };
                Validations.timeCalc = function (meeting) {
                    var start = moment(Date.now());
                    var end = moment(meeting.end);
                    var duration = end.diff(start, 'minutes');
                    return duration;
                };
                return Validations;
            }());
            exports_1("Validations", Validations);
        }
    }
});
//# sourceMappingURL=Validations.js.map