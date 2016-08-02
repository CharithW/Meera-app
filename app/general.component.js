System.register(['angular2/core', './meeting.service', 'angular2/http', './Validations'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meeting_service_1, http_1, Validations_1;
    var GeneralComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meeting_service_1_1) {
                meeting_service_1 = meeting_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Validations_1_1) {
                Validations_1 = Validations_1_1;
            }],
        execute: function() {
            GeneralComponent = (function () {
                function GeneralComponent(_meetingService) {
                    this._meetingService = _meetingService;
                    this.room = "General";
                    this.subject = null;
                    this.galleMeetings = [];
                    this.today = '';
                    this.status = '';
                    this.remainingTime = '';
                    this.image = "images/conference.jpg";
                }
                GeneralComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._meetingService.getMeetings()
                        .subscribe(function (meetings) {
                        meetings.forEach(function (element) {
                            if (((element.location).indexOf("General")) !== -1) {
                                _this.galleMeetings.push(element);
                            }
                        });
                        var cuurentMeeting = Validations_1.Validations.setVariables(_this.galleMeetings);
                        if (Object.keys(cuurentMeeting).length === 0) {
                            var nextMetting = _this.galleMeetings[0];
                            //    this.status = ("AVAILABLE NOW");
                            _this.isMeeting = false;
                            var timestampNow = moment(new Date());
                            var timestampStart = moment(new Date(nextMetting.start));
                            _this.remainingTime = timestampNow.to(timestampStart);
                            console.log();
                        }
                        else {
                            _this.status = "MEETING IN PROGRESS";
                            _this.isMeeting = true;
                            var ss = Validations_1.Validations.timeCalc(cuurentMeeting);
                            _this.remainingTime = Math.trunc(ss / 60) + "H:" + ss % 60 + "M";
                        }
                    });
                };
                GeneralComponent = __decorate([
                    core_1.Component({
                        selector: 'general',
                        templateUrl: 'app/room.component.html',
                        styleUrls: ['app/room.component.css'],
                        styles: [''],
                        providers: [meeting_service_1.MeetingService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [meeting_service_1.MeetingService])
                ], GeneralComponent);
                return GeneralComponent;
            }());
            exports_1("GeneralComponent", GeneralComponent);
        }
    }
});
//# sourceMappingURL=general.component.js.map