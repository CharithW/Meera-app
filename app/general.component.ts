


import {Component, OnInit  } from 'angular2/core'
import {MeetingService} from './meeting.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Meetings} from './meeting'
import {Moment} from 'moment/moment'
import {Validations} from './Validations'




@Component({
    selector: 'general',
    templateUrl: 'app/room.component.html',
    styleUrls: ['app/room.component.css'],
    styles: [''], 
    providers: [MeetingService, HTTP_PROVIDERS]

})


export class GeneralComponent implements OnInit {
    room = "General"
    subject = null;
    galleMeetings = [];
    today = '';
    status = '';
    remainingTime = '';
    isMeeting;
    image = "images/conference.jpg"

    constructor(private _meetingService: MeetingService) {
    }
    
    
    
    ngOnInit() {
        this._meetingService.getMeetings()
            .subscribe(meetings => {
                meetings.forEach(element => {
                    if (((element.location).indexOf("General")) !== -1) {
                        this.galleMeetings.push(element);
                    }
                }

                );
                var cuurentMeeting = Validations.setVariables(this.galleMeetings);
                if (Object.keys(cuurentMeeting).length === 0) {
                    var nextMetting = this.galleMeetings[0]
                    //    this.status = ("AVAILABLE NOW");
                    this.isMeeting = false;
                    var timestampNow = moment(new Date());
                    var timestampStart = moment(new Date(nextMetting.start));
                    this.remainingTime = timestampNow.to(timestampStart);
                    console.log()

                } else {
                    this.status = "MEETING IN PROGRESS";
                    this.isMeeting = true;
                    var ss = Validations.timeCalc(cuurentMeeting);
                    this.remainingTime = Math.trunc(ss / 60) + "H:" + ss % 60 + "M";

                }
            });
    }
}