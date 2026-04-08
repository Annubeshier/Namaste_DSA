const users = [
  { name: 'abc', age: 35, isAdmin: true },
  { name: 'xyz', age: 25, isAdmin: true },
  { name: 'pqr', age: 30, isAdmin: false }
];

let max = users.reduce((acc, user)=>{
   return user.age > acc.age ? user : acc;
})
console.log(max)

//{ name: 'abc', age: 35, isAdmin: true }