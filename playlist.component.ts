import {Component} from '@angular/core';
import {Video} from './video';


@Component({
	selector: 'playlist',
	templateUrl: 'app/ts/playlist.component.html',
	inputs: ['videos'] /*this is to get the video info..indicate inputs coming..accept input from playlist
	bout video*/

})

export class playlistComponent {
	/*this is my method*/
	onSelect(vid:Video){
	/* vid = variable, Video= var type*/
	
		console.log(JSON.stringify(vid));/*ambk info psal objek vid(which is video) & tuka pd jsdon file string then 
		ni akn appear kat webpg(utk check fnctin ke x je*/


	}

}