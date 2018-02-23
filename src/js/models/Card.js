export default class Card {

	constructor(atributes){
  	
    this._value = atributes.value;
    this._id    = atributes.id;
  }
  
  get value() {
  	
    return this._value;
  }
  
  get id() {
  	
    return this._id;
  }
}