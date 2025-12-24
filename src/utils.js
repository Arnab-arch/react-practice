export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}



//  const person ={
//      name:"alexander",
//      imageId:"7vQD0fP"

//  }

// // console.log(Geturl(person,'s'));
// console.log(Geturl(person))