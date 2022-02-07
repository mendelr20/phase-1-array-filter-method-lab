function findMatching(users, name){
    const result = users.filter(user => user.toUpperCase() === name.toUpperCase() );
    return result;
}


function fuzzyMatch(users, name){
    const result = users.filter(user => user.charAt(0) === name.charAt(0) );
    return result
}
 
function matchName(array, name){
    const result = array.filter(element => element.name === name);
    return result;
}
