function compareArrays(arr1, arr2) {
  if(arr1.length === arr2.length) {
  return arr1.every((element, index) => element === arr2[index]); 
  } else {
    return false;
  }
}

function getUsersNamesInAgeRange(users, gender) {
  if(users.length === 0) {
    return 0;
  };
  const selectionByGender = users.filter(user => user.gender === gender);
  if(selectionByGender.length ===0) {
    return 0;
  };
  let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age) => {return acc + age});
  return result / selectionByGender.length;  
}