import {Meetings} from './meeting'
export class Validations{
 //  static test = "hello ";
    static setVariables(meetings: Meetings[]): Meetings {
        console.log(meetings);
        var m = new Meetings();
        meetings.forEach(element => {
            var timestampNow = new Date();
            var timestampStart = new Date(element.start);
            var timestampEnd = new Date(element.end);
            if (timestampStart < timestampNow && timestampNow < timestampEnd) {
                m = element;
                console.log(m);
                // return "Hello" ;                
            }
            // console.log("\n");             
        });
        return m;
    }
    
    static timeCalc(meeting: Meetings): any   {
        var start = moment(Date.now());
        var end = moment(meeting.end);

        var duration = end.diff(start,'minutes' )
        return duration;
    }
}