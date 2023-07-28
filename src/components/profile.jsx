import React, { Component } from 'react';
const Profile =(props)=>{
	let individual = [
        {"person_name": "John",
        "age": 23,
        "height": "16ft",
        "status": "online",
        "hobbies": "skipping, sports"
},
{
        "person_name": "James",
        "age": 25,
        "height": "15ft",
        "status": "offline",
        "hobbies": "skipping, sports"
}
]
// end of array holding objects
let split_individual = [...individual]
console.log(split_individual[1].person_name)
const split = split_individual.map((indid, index)=>
<p key={index}>Well, we would get there sometime, how about now {indid.person_name}?</p>)

return(<>
<h2>{split}</h2>
</>)

}
export default Profile