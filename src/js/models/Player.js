export default class Player {
	
    constructor(atributes) {
        
      this._name = atributes.name;
      this._cards = atributes.cards || null;
    }
    
    get name() {
        
      return this._name;
    }
    
    get cards() {
        
      return this._cards;
    }
    
    set cards( cards ) {
        
      this._cards = cards; 
    }
    
    get selection() {
        
      const cardsCount      = this._cards.list.length;    
      const selectionRandom = Math.floor(Math.random() * (cardsCount - 0 + 0) + 0);
      
      return this._cards.list[selectionRandom];
    }
    
    getCardsById( id ) {
        
      let result = null;
      
      this._cards.list.forEach(card => {
        
              if( card.id === id ) result = card;
      });
      
      return result;
    }
}