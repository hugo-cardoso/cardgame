import $ from 'jquery';

export default class CardsBotView {

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
                              <li class="card card--bot" data-id="${ card.id }">
                                <div class="card__content">
                                  <span class="card__number card__number--hidden">${ card.value }</span>
                                </div>
                              </li>
                    				`
                    	
                  }).join('')
                }
            </ul>
    
            `
  }

  selectCard( card ) {

    this._elem.find('.card').each((index, elem) => {
        
        const _elem = $(elem); 
        const _id   = _elem.data('id');

        if( card.id === _id ) {
            _elem.addClass('card--active');
            _elem.find('.card__number').removeClass('card__number--hidden');
        }
    })
  }
}