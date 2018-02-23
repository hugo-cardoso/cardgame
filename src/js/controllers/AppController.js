import $ from 'jquery';

import Player from '../models/Player';
import Round from '../models/Round';
import Card from '../models/Card';
import CardList from '../models/CardList';
import CardsPlayerView from '../view/CardsPlayerView';
import CardsBotView from '../view/CardsBotView';

export default class AppController {

	constructor() {
  	
    this._round = new Round();
    this._playerView = new CardsPlayerView('#playerCards');
    this._botView = new CardsBotView('#botCards');
    
    this._player = null;
    this._bot    = null;
    
    this._init();
    this._startGame();
  }
  
  _init() {
    
    $('body').on('click','#playerCards li', event => {
    
        const _elem  = $(event.target).closest('li');
        const _id    = _elem.data('id');
        
        this._nextRound( _id );
      });
  }

_startGame() {

    this._player = new Player({
    	name: 'Hugo',   
        cards: this._generateCards()
    });
    
    this._bot = new Player({
    	name: 'Bot',
        cards: this._generateCards()
    });

    this._playerView.update( this._player );
    this._botView.update( this._bot );
}

  _nextRound( _id ) {

    this._round.player = this._player.getCardsById(_id);
    this._round.bot    = this._bot.selection;

    this._botView.selectCard( this._round.bot );
    
    console.log(this._round.player);
    console.log(this._round.bot);
    
    console.log(this._round.winner);
    
    this._player.cards.removeById( _id );
    this._bot.cards.removeById( this._round.bot.id );
    
    setTimeout(() => {
        this._playerView.update( this._player );
        this._botView.update( this._bot );

        if( !(this._bot.cards.list.length) ) {
            this._startGame();
        }

        this._round.clear();

    }, 2000);
  }
  
  _generateCards() {
  
  	const cardList = new CardList();
    
    for(let i = 0; i < 5; i++) {
    	
        const _number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        const _id = Math.floor(Math.random() * (999 - 1 + 1) + 1);
        
        const card = new Card({
            value: _number,
            id: _id
        });
      
        cardList.add(card);
    }
    
    return cardList;
  }
}