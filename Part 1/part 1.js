//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
	*/
// write your code here ...




/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
	*/
// write your code here ...




/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
	*/

// write your code here ....
function RBKStudent(name,age,education,nationality){
	return{
		name:name,
		age:age,
		education:education,
		nationality:nationality
	};
};
//____________________________________________________________________________________
var saharinf=RBKStudent("Sahar",26,"computer Science","Jordanian");
var ahmedinf=RBKStudent("Ahmed",17,"Mthematic","Syrian");
var studentArr=[saharinf,ahmedinf];
//___________________________________________________________________________________
function showFriend(frinedData){
	return frinedData['name']+" with the age of "+frinedData['age']+" and with "+frinedData['education']+" education"; 
};
//call----
showFriend(saharinf);
showFriend(ahmedinf);
//___________________________________________________________________________________
function avergeStudents(arr){
	var sum=0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i]['age'];
	}

	return sum/arr.length;
};
//call----
//avergeStudents(studentArr);
//_____________________________________________________________________________________
function square(x){
	return x*x;
};
//--------
function rangeSquared(a,b){
	var x=0,arr=[];
	if(b){
	  if(a>b){//if the first number larger than the second.....
	  	x=a;
	  	a=b;
	  	b=x;
	  }
	  for(var i=a;i<=b;i++){
	  	if(i%2===0){
	  		arr.push(square(i));
	  	}
	  }
	}
  else if(a%2===0){   //if b===undefiend it will come to here....
  	arr.push(square(a));
  }
  else {
  	return null;
  }
  return arr;
}
//_________________________________________________________________________________________
function leader(arr){
	var f=true,result=[];
	arr.forEach(function(val,i){
		f=true;
		for(var j=i+1;j<arr.length;j++){
			if(val<arr[j]){
				f=false;
			}
		}
		if(f){
			result.push(val);
		}
	})
	return result;
}
//_________________________________________________________________________________________ 
