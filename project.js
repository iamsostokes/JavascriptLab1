var game = prompt('Do you want to play a game?');
if (game === 'yes') {
	//play the game
	var user = prompt('What is your username?');
	var grantHealth= 10;
	var userHealth = 40;
	var wins = 0;

while (userHealth > 0 && wins < 3) {
	userHealth -= Math.floor(Math.random()*2) +1;	
	grantHealth -=Math.floor(Math.random()*2) +1;
	console.log(`${user} has ${userHealth} health left`);
	console.log(`Grant has ${grantHealth} health left`);
	if (grantHealth <=0) {
	wins++;
	grantHealth  = 10;
	
}
}

if(wins === 3){
	console.log('Grant won!');
}else {
	console.log('You Suck');
}


}else {
 console.log('you suck');
}
