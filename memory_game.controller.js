


/** Variables */
var dragon = {
	id: 0, 
	src:'dragon.jpg',
	turned: false
};

var mage = {
	id: 1, 
	src:'mage.jpg',
	turned: false
};

var pot = {
	id: 2, 
	src: 'pot.jpg',
	turned: false
};

var warrior = {
	id:3 , 
	src:'warrior.jpg',
	turned: false
};

var yugi = {
	id: 4, 
	src:'yugi.jpg',
	turned: false
};

var zelda = {
	id: 5,
	src:'zelda.jpg',
	turned: false
};

var card = 'card.jpg';

var memoryCards = [dragon, dragon, zelda, zelda, yugi, yugi, mage, mage, pot, pot, warrior, warrior];

var count = 0;



/**
* Function called when some card are clicked.  
 */
function turnCard(item){
	item.src = memoryCards[item.id].src;
	item.turned = true;
	if (count % 2 !== 0){
		v
		console.log(compare);
	}
	count++;
};

function hasAnotherCardWithSameIdTurned (item){
	
}


function shuffleCards(){
	memoryCards = shuffle(memoryCards);
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
