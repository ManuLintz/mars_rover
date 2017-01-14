

  // creating an array that will contain arrays to build the grid
var planetMars= [];
//creating a rover object that contains the position (column and row) and the direction of the rover
var myRover= {
    columna: 0,
    row: 0,
    direction: 'N'
  };

//these are the 4 functions to move the rover according to its direction
  function goForward() {
    switch(myRover.direction) {
      case 'N':
        myRover.columna--;
        break;
      case 'E':
          myRover.row++;
          break;
      case 'S':
          myRover.columna++;
          break;
      case 'W':
          myRover.row--;
          break;

    }
  }

  function goBackward() {
    switch(myRover.direction) {
      case 'N':
        myRover.columna++;
        break;
      case 'E':
          myRover.row--;
          break;
      case 'S':
          myRover.columna--;
          break;
      case 'W':
          myRover.row++;
          break;

    }
  }

  function goLeft() {
    switch(myRover.direction) {
      case 'N':
        myRover.direction='W';
        break;
      case 'E':
        myRover.direction='N';
        break;
      case 'S':
        myRover.direction='E';
        break;
      case 'W':
        myRover.direction='S';
        break;

    }
  }
  function goRight() {
    switch(myRover.direction) {
      case 'N':
        myRover.direction='E';
        break;
      case 'E':
        myRover.direction='S';
        break;
      case 'S':
        myRover.direction='W';
        break;
      case 'W':
        myRover.direction='N';
        break;

    }
  }

// first we get the instructions as a string, the instructions can be "f","b","r" and "l"
var instructions = "bb";

//we turn the string into an array
var instructions_one_by_bone = instructions.split("");


function moveTheRover(){
  // we iterate through the array
  for (var i = 0; i< instructions_one_by_bone.length; i++){
  // if the instructions are valid, we transmit them to the rover
    if (instructions_one_by_bone[i]=="f"){
      goForward();
  }
    else if (instructions_one_by_bone[i]=="b") {
      goBackward();
    }
    else if (instructions_one_by_bone[i]=="l") {
      goLeft();
    }
    else if (instructions_one_by_bone[i]=="r") {
      goRight();
    }
  // if the instruction isn't valid, we tell it to the operator
    else {
      document.write( "Command number "+(i+1)+" is incorrect. Be careful with the rover dude"+"<br>");
    }
}

//we create 10 arrays in the planetMars array
for (var j=0; j<10; j++)
    planetMars[j]= new Array();


//we iterate through the 10 arrays to put 10 "X" in each one
for (var j = 0; j< 10; j++)
  for (var k=0; k< 10; k++)
  planetMars[j][k]="X";

// we put an "R" to represent the rover position in the 2 dimension array
if (myRover.columna< 0 || myRover.columna>10 ||myRover.row< 0 || myRover.row>10)
{document.write("That would put the rover out of the perimeter!");
}
else if(myRover.columna==2 && myRover.row==2 )
{document.write("You almost hit a rock, try again.");}
else {
planetMars[myRover.columna][myRover.row]="R";
//We represent a rock with the letter "O"
planetMars[2][2]="O";
// we print the grid
for (var j = 0; j< 10; j++){
  document.write(planetMars[j]+"<br>")};

}
}


moveTheRover();
