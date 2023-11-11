//if else
grade = 3.3
if (grade >= 5.0) {
   console.log("Pass")
   console.log("Congratulations")
} else {
   console.log("Refer")
   console.log("Prepare money for retake class")
}

/*
   9-10: Distinction (if)
   8-9: Merit (else if)
   6-8: Pass (else if)
   <6 : Refer (else)
*/
gpa = 12

//if (9.0 <= gpa <= 10)
if (gpa < 0 || gpa > 10)
   console.log ('Invalid grade')
else if (gpa >= 9.0)
   console.log('Distinction')
else if (gpa >= 8.0)
   console.log('Merit')
else if (gpa >= 6.0)
   console.log('Pass')
else
   console.log('Refer')

if (gpa < 0 || gpa > 10)
   console.log('Invalid grade')
else {
   if (gpa >= 9.0)
      console.log('Distinction')
   else if (gpa >= 8.0)
      console.log('Merit')
   else if (gpa >= 6.0)
      console.log('Pass')
   else
      console.log('Refer')
}

//switch case
speed = 1
switch (speed) {
   case 1:  //if
      console.log('Fan speed is 1')
      break
   case 2:   //else if
      console.log('Fan speed is 2')
      break
   case 3:   //else if
      console.log('Fan speed is 3')
      break
   default:   //else
      console.log('Invalid speed')
      break
}