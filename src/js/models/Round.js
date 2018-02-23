export default class Round {
	
    constructor() {
        
      this._playerSelection = null;
      this._botSelection    = null;
    }
    
    clear() {
        
      this._playerSelection = null;
      this._botSelection = null;
    }
    
    get player() {
      
        return this._playerSelection;
      }
    
    get bot() {
      
        return this._botSelection;
      }
    
    set player( card ) {
        
      this._playerSelection = card; 
    }
    
    set bot( card ) {
        
      this._botSelection = card; 
    }
    
    get winner() {
    
      const playerValue = this._playerSelection.value;
      const botValue = this._botSelection.value;
      
      if( playerValue > botValue ) {
          return 'player';
      } 
      else if ( playerValue < botValue ) {
          return 'bot';
      }
      else {
          return 'draw';
      }
    }
}
  