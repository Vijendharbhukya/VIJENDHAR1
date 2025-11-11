//switch case is better than the if-elseif condition
function checkDay(dayNumber){
    let day;
    switch(dayNumber){
        case 0:
            day='sunday';
            break;
            case 1:
            day='monday';
            break;
            case 2:
            day='Tuseday';
            break;
            case 3:
            day='wednesday';
            break;
            case 4:
            day='thrusday';
            break;
            case 5:
            day='friday';
            break;
            case 6:
            day='saturday';
            break;
            default:
                console.log('Invalid day');
                break;
    }
return day;
}
console.log(checkDay(0));
console.log(checkDay(5));
//