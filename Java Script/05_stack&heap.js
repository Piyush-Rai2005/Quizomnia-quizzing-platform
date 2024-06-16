//stack (primitve data types) , heap(used for non- primitive)//
let myYoutubeName="PiyushRai.org"
let anotherName=myYoutubeName
anotherName="Rai0529"
console.log(anotherName)
console.log(myYoutubeName)

let user={
    email:"user@gmail.com",
    upi_id: "user@ybl"
}
let userTwo = user
userTwo.email="piyush@gmail.com"

console.log(user.email)
console.log(userTwo.email)

//so objects(non-primitive) are always reference and goes in HEAP
// while in stack(primitive) we get a copy
