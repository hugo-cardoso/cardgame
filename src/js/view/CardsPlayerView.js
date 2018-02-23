import $ from 'jquery';

export default class CardsPlayerView {

	constructor(elem) {
  
  	this._elem = $(elem);
  }
  
  update( model ) {
  
  	this._elem.html( this._template( model ) );
  }
  
  _template( model ) {
  	
    return 	` 
    					<ul class="card-list">
              	${ 
                	model.cards.list.map(card => {
                  		
                    return 	`
                              <li class="card card--player" data-id="${ card.id }">
                                <div class="card__content">
                                  <span class="card__number">${ card.value }</span>
                                </div>
                              </li>
                    				`
                    	
                  }).join('')
                }
              </ul>
    
    				`
  }
}