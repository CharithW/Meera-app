


import {Component, OnInit  } from 'angular2/core'
import {MeetingService} from './meeting.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Meetings} from './meeting'
import {Moment} from 'moment/moment'
import {Validations} from './Validations'




@Component({
    selector: 'conference',
    templateUrl: 'app/room.component.html',
   styleUrls:['app/room.component.css'],
   styles:[''],
    
    providers: [MeetingService, HTTP_PROVIDERS]

})


export class ConferenceComponent implements OnInit {
    room = "Conference"
    subject = null;
    conferenceMeetings = [];
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
                    if (((element.location).indexOf("Conference")) !== -1) {
                        this.conferenceMeetings.push(element);
                    }
                }

                );
                var cuurentMeeting = Validations.setVariables(this.conferenceMeetings);
                if (Object.keys(cuurentMeeting).length === 0) {
                    var nextMetting = this.conferenceMeetings[0]
                //    this.status = ("AVAILABLE NOW");
                    this.isMeeting = false;
                    var timestampNow = moment(new Date());
                    var timestampStart = moment(new Date(nextMetting.start));
                    this.remainingTime = timestampNow.to(timestampStart);
                    console.log()

                } else {
                    this.status = "MEETING IN PROGRESS";
                    this.isMeeting=true;
                    var ss = Validations.timeCalc(cuurentMeeting);
                    this.remainingTime = Math.trunc(ss / 60) + "H:" + ss % 60 + "M";

                }
            });


    }







}