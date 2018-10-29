/**
The algorithm: 
1 -  Put two objects with same id and image src on array. Each object correspond to a card of the game.
2 - Shuffle the object's array. Each card of HTML has an unique ID value. 
3 - When the player click on card, turn to true the attribute 'turned' of the object on the position of array corresponding to the id of HTML card and show his image.
4 - The card dont turn off.
5 - When the player clicks on another card, same behavior. 
6 - If has two cards turned on, the array of objects will be interacted.
7 - If has two objects turned to true, with the same id, the player hit the right cards.
7 - If hasn't, each cards will be turned off.
* 
*/


/** Variables */
var dragon_1 = {
	id: 0, 
	src:'img/dragon.jpg',
	turned: false,
};

var dragon_2 = {
	id: 0, 
	src:'img/dragon.jpg',
	turned: false,
};

var mage_1 = {
	id: 1, 
	src:'img/mage.jpg',
	turned: false,
};

var mage_2 = {
	id: 1, 
	src:'img/mage.jpg',
	turned: false,
};

var pot_1 = {
	id: 2, 
	src: 'img/pot.jpg',
	turned: false,
};

var pot_2 = {
	id: 2, 
	src: 'img/pot.jpg',
	turned: false,
};


var warrior_1 = {
	id:3 , 
	src:'img/warrior.jpg',
	turned: false,
};

var warrior_2 = {
	id:3 , 
	src:'img/warrior.jpg',
	turned: false,
};

var yugi_1 = {
	id: 4, 
	src:'img/yugi.jpg',
	turned: false,
};

var yugi_2 = {
	id: 4, 
	src:'img/yugi.jpg',
	turned: false,
};

var zelda_1 = {
	id: 5,
	src:'img/zelda.jpg',
	turned: false,
};

var zelda_2 = {
	id: 5,
	src:'img/zelda.jpg',
	turned: false,
};

var card = 'card.jpg';

var memoryCards = [dragon_1, dragon_2, zelda_1, zelda_2, yugi_1, yugi_2, mage_1, mage_2, pot_1, pot_2, warrior_1, warrior_2];

var count = 0;

var idOfHtmlCards = [];
/** Variable to block click on cards, when two wrong cards are visible. */
var is_blocked = false;

/**
* Function called when some card are clicked.  
 */
function turnCard(item){
	if (!is_blocked){
	item.src = memoryCards[item.id].src;
	memoryCards[item.id].turned = true;
	/** Verify if its a pair click; if isnt a pair click, may be two same cards turned */
	if (count % 2 !== 0){
		is_blocked = true;
		var check = hasAnotherCardWithSameIdTurned(item);
		if (!check){
			sleep(2000).then(function(){
				unturnAllCardsTurned(item);
				is_blocked = false;
			})
		}
	} else {
		idOfHtmlCards.push(item.id);
		is_blocked = false;

	}
	is_blocked = false;
	count++;
	}
};

/**
 * Verify if exists any other card turned, with the same id of the card passed by parameter.
 */
function hasAnotherCardWithSameIdTurned (item){
	var flag = 0;
	for (var i = 0; i < memoryCards.length; i++){
		if (memoryCards[i].id === memoryCards[item.id].id && memoryCards[i].turned === true){	
			flag++;
		}
	}
	/** 
	* When two cards have same id and are turneds, the player hit the move, and the function return true.
	*/
	if (flag === 2){
		idOfHtmlCards = [];
		flag = 0;
		return true;
	} else {
		flag = 0;
		return false;	
	}
}

/** 
 * Unturn all cards turned
 */
function unturnAllCardsTurned (item){
	for (var i = 0; i < memoryCards.length; i++){
		if (memoryCards[i].turned === true){
			memoryCards[i].turned = false;
		}
	}
	item.src = card;
	previousItem = document.getElementById(idOfHtmlCards[0]);
	previousItem.src = card;
	idOfHtmlCards = [];
	return true;


}

/** 
 * Shuffle all the cards, and turn all off.
*/
function shuffleCards(){
	memoryCards = shuffle(memoryCards);
	for (var i=0; i < 12; i++){
		var item = document.getElementById(i);
		item.src = card;
	}
}


/** Classical algorithm to shuffle array */
function shuffle(array){
	var m = array.length, t, i;

  // While there remain elements to shuffle…
  	while (m) {

    // Pick a remaining element…
    	i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    	t = array[m];
    	array[m] = array[i];
    	array[i] = t;
  	}

  return array;
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
};

/** The game start with shuffled cards */
shuffleCards();
