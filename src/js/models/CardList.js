export default class CardList {
	
    constructor() {
    
        this._list = [];
    }
    
    add(card) {
        
      this._list.push(card);
    }
    
    get list() {
    
        return this._list;
    }
    
    removeById( id ) {
        
      this._list.forEach((card, index) => {
          
        if( card.id === id ) this._list.splice(index, 1);
      });
    }
}