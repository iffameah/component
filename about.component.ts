import { Component } from '@angular/core';
import {Config} from './config.service';
import {Video} from './video';
import {playlistComponent} from './playlist.component'; 

@Component({
  selector: 'about',
  templateUrl: './components/about.component.html'
  
})
export class AboutComponent  { 
 /*using the class var in data binding & using call fn for codes in Config*/
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Video>; //bt satu list video dlm bntk array& letak var type sbgai video

	constructor(){
		/*inserting information about the videos*/
		this.videos = [
			new Video(1,"Fairy Tail", "f9Q4BHPr674", "watch it on9 baby!"),
			new Video(2,"Deadpool", "4eP49zRmMFM", "suckerss!hahahahhaa"),
			new Video(3,"Civil War", "0NHyXQCKsaU", "CAPTAIN <3!"),
		]
		

	}
}