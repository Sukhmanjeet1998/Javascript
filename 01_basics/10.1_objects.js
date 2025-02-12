const socialChat = {};

socialChat.id = "123abc";
socialChat.name = "Sam";
socialChat.isLoggedIn = false;

const regularUser = {
    email: "yami@example.com",
    fullName: {
        userFullName: {
            firstName: "Sam",
            lastName: "Kaur"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.lastName);
// console.log(regularUser["fullName"]["userFullName"]["lastName"]);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = Object.assign(obj1,obj2);
const obj4 = Object.assign({},obj1,obj2);


// console.log(obj1);
// console.log(obj3);
// console.log(obj4);

// console.log(obj3 === obj1);  // true
// console.log(obj4 === obj1);  // false

// why false?
// Here, you're creating a new empty object {} as the target.
// obj1 and obj2 are merged into this new object, resulting in obj4.
// This means obj4 is a completely new object in memory, separate from obj1.

const obj5 = {...obj1,...obj2};

// console.log(obj5);
// console.log(obj5 === obj1);  // false


// console.log(Object.keys(obj5));
// console.log(Object.values(obj5));
// console.log(Object.entries(obj5));
// console.log(obj5.hasOwnProperty("5"));


const user1 = [
    {
        id: 1,
        name: "example1",
        email: "example1.com"
    },
    {
        id: 2,
        name: "example2",
        email: "example2.com"
    },
    {
        id: 3,
        name: "example3",
        email: "example3.com"
    },
];

