const course = {
    courseName: "Javascript",
    price: "999",
    courseIntoduction: "Javascript basic to advance"
}

// De Structure Object
const { courseName, price, courseIntoduction } = course;
console.log(courseName);
console.log(price);
console.log(courseIntoduction);

const { courseName: nameCourse, price: payment, courseIntoduction: discription } = course;
console.log(nameCourse);
console.log(payment);
console.log(discription);

/*
// JSON
{
    "courseName": "Javascript",
    "price": "999",
    "courseIntoduction": "Javascript basic to advance"
}
*/

/*
// Array of objects
[
    {
        "courseName": "Javascript",
        "price": "999",
        "courseIntoduction": "Javascript basic to advance"
    },
    {
        "courseName": "Javascript",
        "price": "999",
        "courseIntoduction": "Javascript basic to advance"
    },
    {
        "courseName": "Javascript",
        "price": "999",
        "courseIntoduction": "Javascript basic to advance"
    }   
]
*/