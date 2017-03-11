try  {
  // this will raise an error because
  // nonExistentVariable is undefined
  nonexistentVariable += 'foo';
}
catch (e) {
 // this block runs if the try block fails. `e`
 // is an object representing the error
 console.log('Something went wrong');
 console.dir()(e);
}
