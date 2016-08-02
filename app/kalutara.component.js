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
    var KalutaraComponent;
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
            KalutaraComponent = (function () {
                function KalutaraComponent(_meetingService) {
                    this._meetingService = _meetingService;
                    this.room = "Kalutara";
                    this.subject = null;
                    this.galleMeetings = [];
                    this.today = '';
                    this.status = '';
                    this.remainingTime = '';
                    this.image = "images/kalutara.jpg";
                }
                KalutaraComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._meetingService.getMeetings()
                        .subscribe(function (meetings) {
                        meetings.forEach(function (element) {
                            if (((element.location).indexOf("Kalutara")) !== -1) {
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
                KalutaraComponent = __decorate([
                    core_1.Component({
                        selector: 'kalutara',
                        templateUrl: 'app/room.component.html',
                        styleUrls: ['app/room.component.css'],
                        styles: [''],
                        //     template: `
                        //     <div class="card text-xs-center">        
                        //         <div class="card-header">
                        //             GALLE
                        //         </div>        
                        //         <div class="card-block">
                        //             <h4 class="card-title">{{status}}</h4>                      
                        //             <p class="card-text"></p>
                        //             <div *ngIf="!isMeeting">Next Meeting Starts
                        //             <br>
                        //             {{remainingTime }}
                        //             </div>  
                        //             <div *ngIf="isMeeting">Remaining Time
                        //             <br>
                        //             {{remainingTime }}
                        //             </div>            
                        //             <a href="#" class="btn btn-primary">Go somewhere</a>
                        //         </div>        
                        //         <div class="card-footer text-muted">
                        //            {{remainingTime}}
                        //         </div>
                        // </div>
                        // `,
                        providers: [meeting_service_1.MeetingService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [meeting_service_1.MeetingService])
                ], KalutaraComponent);
                return KalutaraComponent;
            }());
            exports_1("KalutaraComponent", KalutaraComponent);
        }
    }
});
//# sourceMappingURL=kalutara.component.js.map