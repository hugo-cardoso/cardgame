import $ from 'jquery';

export default class CardsBotView {

	constructor(elem) {
  
  	this._elem = $(elem);
  }
  
  update( model ) {
  
  	this._elem.html( this._template( model ) );
  }
  
  _template( model ) {
  	
    return 	` <div class="board">
                <div class="board__content">
                  <ul class="card-list card-list--bot">
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
                </div>
              </div>
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