var startBtn=document.getElementById('startButton')
// start button created

startBtn.addEventListener('click'), function() {
	
}




function startGame(){
	var question = prompt("Do you want to play a game?");
	if (question.toLowerCase() === 'yes' || 'y'){
		
		var userName = prompt("What is your name?");
		startCombat(userName);
		
	}else{
		console.log("You Suck");
	}
}
	
	var user= {
		name: null,
		health: 40,
		healsRemaining: 2,
		wins: 0,
		generateAttackDamage: function() {
			damage = Math.floor(Math.random() * 3) + 1;
			return damage;
			
		},
		heal: function() {
			this.health += Math.floor(Math.random() * 10) + 1;
			this.heroHealsRemaining --;
		}
		
	};  
	
	var grant = {
		name:`Grant`,
		health:10,
		generateAttackDamage: function() {
			damage = Math.floor(Math.random() * 5) + 1;
			return damage;
		}
	}; 
	
startGame();
function startCombat(userName){
	user.name = userName;
while(user.health>0 && user.wins<3)
   {
     var attack=prompt("Would you like to attack, heal or quit?");
     if (attack.toLowerCase() === 'quit'){
       console.log("you quit!");
       return;
     }
      if (attack.toLowerCase()=== 'attack'){
     user.health -= grant.generateAttackDamage();
     grant.health -= user.generateAttackDamage();
     console.log(`${userName} has ${user.health} health left`);
     console.log(`Grant has ${grant.health} health left`);
     
      }else if (attack.toLowerCase()=== 'heal'){
				user.heal();
				
			} else {
        console.log("you must choose \'attack\' or \'quit\'  ");
        continue;
      }
     
     if (grant.health<=0){
       user.wins++;
       grant.health = 10;
       console.log(`${user.wins} victory`);
     }
   }
   if (wins === 5){
		 console.log(`${user.name} wins! Grant is defeated`);
		}else{
			console.log(`${grant.name} Wins!`);
		}
	}

 

	
 
