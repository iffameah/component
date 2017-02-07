export class Video {
	//declare all var required in video
	id: number;
	title: string;
	videoCode: string;
	desc:string;


	//constructor pass the values
	constructor(id:number, title:string, videoCode:string, desc:string){

		this.id = id;
		this.title = title;
		this.videoCode = videoCode;
		this.desc = desc;
	}


}