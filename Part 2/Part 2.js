//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
		*/

//writ your code here .....
function Player(name){
	var pInfo={};
	pInfo.plr={};
	pInfo.name=name;
	pInfo.addInfo=addInfo;
	pInfo.increaseLevel=increaseLevel;
	pInfo.isAvailable=isAvailable;
	pInfo.arrayOfPlayers=[x,y];
	pInfo.decreaseLevel=decreaseLevel;
	return pInfo;
}
//_______________________________________________________________
var addInfo=function(age, position, level, availability ){
	//var that=this;
	this.plr={
		name:this.name,
		age:age,
		position:position,
		level:level,
		availability:availability
	};
	this.arrayOfPlayers.push(this.plr);
	return this.plr;
};
//______________________________________________________________
var increaseLevel=function(n){
	this.plr['level']+=n;
	return this.plr['level'];
};
//____________________________________________________________
var isAvailable=function(){
	if(this.plr['availability']===1) return true;
	return false;
};
//___________________________________________________
var player1=Player("Ali");
player1.addInfo(19, "captin", 5, 1 );
var player2=Player("Ahmed");
player2.addInfo(21, "first-raw", 3, 0 );
var player3=Player("Mohammed");
player3.addInfo(20, "first-raw", 2, 0 );
var player4=Player("Emad");
player4.addInfo(31, "second-raw", 6, 1 );
var arrayOfPlayers=[player1,player2,player3,player4]; 
//____________________________________________________
var decreaseLevel=function(){
	var arr=this.arrayOfPlayers;
	var result=[];
	//console.log(arr)
	arr.forEach(function(obj,k){
		if(obj['age']>30){
			--obj['level'];
		}
		result.push(obj); 	  
	})
	return result;
}
//___________________________________________________
var sortPalyerBy=function(arr,k){  // in your call in the example you pass the array and the key so the function not inside the object
	return arr.sort(function(a,b){return a[k]-b[k];});
};
//_________________________________________________________