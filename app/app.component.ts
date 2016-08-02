import {Component} from 'angular2/core';
import {GalleComponent} from './galle.component'
import {JaffnaComponent} from './jaffna.component'
import { ConferenceComponent } from './conference.component';
import { KalutaraComponent } from './kalutara.component';
import { GeneralComponent } from './general.component';






@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
 directives:[GalleComponent , 
 JaffnaComponent , 
 ConferenceComponent  , 
 KalutaraComponent,
 GeneralComponent
 ]
})
export class AppComponent { 
    
}