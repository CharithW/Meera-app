import {Http}  from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {Meetings} from './meeting'
import {Observable} from 'rxjs/Rx'

@Injectable()

export class MeetingService{
    private _baseUrl = "http://localhost:51115/api/Meetings"
    
    constructor(private _http:Http){
        
    }
    
    getMeetings() : Observable<Meetings[]>{
     return this._http.get(this._baseUrl)
         .map(res=>res.json())
        
    }
    
    
}