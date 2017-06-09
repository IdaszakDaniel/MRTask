
class AboutController {
	 /**
   * @param {GetJson} GetJson
   */
  constructor(GetJson) {
  	"ngInject";
    this.name = 'about';
    this.GetJson = GetJson;
  }

  init(){
  	console.log(this.GetJson.getData());
  }
}

export default AboutController;