var addressBook= [
    {
    firstname: 'Nate',
    lastname: "Rakestraw",
    address: "6700 Memorial road OKC, OK 73142",
    phone: "479-427-6699",
    age: 30
    },
    

{
    firstname: 'Zack',
    lastname: 'Mayes',
    address: '45902 john doe street',
    phone: '535-909-4232',
    age: 12
},
{

    firstname: 'Jerry',
    lastname: 'greg',
    address: '4782 hellow world ave',
    age: 45

},
{
    firstname: 'Natlie',
    lastname: 'Pulgini',
    address: '6700 amemorio rd',
    age: 27
}]
function printFirstnames(add){
    for(var i=0;i<add.length; i++)
    {console.log(add[i].firstname)
    }
}


var ourFunction= function(thing){
for(var i=0; i< thing.length; i++){
    console.log(thing[i].lastname);
};
}

function printContact(add){
    for(var i=0; i<add.length; i++)
    console.log("=============")
    console.log(add[i].firstname, add[i].firstname)
    console.log(add[i].address)
    console.log(add[i].phone)
}

var printContact2 = function(contact){
    console.log("=============")
    console.log(contact.firstname, add[i].firstname)
    console.log(contact.address)
    console.log(contact.phone)
    console.log("========")
}

// printFirstnames(addressBook);

// ourFunction(addressBook);




var printhello= function(){
    console.log("hello everyone!!")
}

setTimeout(printhello, 5000);

