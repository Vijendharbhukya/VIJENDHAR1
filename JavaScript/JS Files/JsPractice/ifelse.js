function checkAge(age){
    if(age>18){
    console.log('you are eligable')
    }
    else{
     console.log('you are noteligable')   
    }
}
checkAge(10);
checkAge(30);
//
function checkNumber(number){
    if(number>0){
        console.log('number is +Ve')
    }
    else if(number<0){
       console.log('number is -Ve') 
    }
    else{
        console.log('Zero number found')
    }
}
checkNumber(10);
checkNumber(-9);
checkNumber(0);
//nested if-else:
function checkGrade(score){
    let grade;
    if(score>=90){
        grade='A';
    }
    else{
        if(score>=80){
            grade='B';
        } else{
            if(score>=70){
                grade='C'
            }
            else{
                grade='D'
            }
            
        }
    }
    console.log(grade);
}
checkGrade(90);
checkGrade(75);
//
//if-elseif
// it will check the top condition 
let browser='chrome';
if(browser=='chrome'){
    console.log('Lanch chrome')
} else if(browser=='edge'){
    console.log('Lanch edge')
} else if(browser=='firefox'){
    console.log('Lanch firefox')
}
else{
    console.log('plz pass the right browser.......')
}
//to fix the above if-elseif we have to use switch case
//Switch-case


