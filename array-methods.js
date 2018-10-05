/* eslint-disable */

/*

The "push" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The push method appends a value to the end of an array.  It takes any value as a parameter that you would like to append to the end of your array.

2. Does it edit the current array?
    YES, the current array is editted.

3. What does it return?
    The push method returns the new length of the array (the length of the array with the appended value)

4.    How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might want to have an array for the number of students in a class and need to add a student who adds the class

5. Build your real world example.
    See the example below.
*/

function addStudentToClass(currentListOfStudents, name, yearInSchool, gpa) {

    currentListOfStudents.push({
        name: name,
        yearInSchool: yearInSchool,
        gpa: gpa
    });

}

var listOfStudents = [];
addStudentToClass(listOfStudents, "Bob", "Senior", 3.5);
addStudentToClass(listOfStudents, "Nate", "Freshman", 3.7);
//ETC, ETC, ETC

/*

The "pop" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The pop method removes an element from off the end of the array.

2. Does it edit the current array?
    YES, the current array is editted.

3. What does it return?
    The pop method returns the value that was "popped" off the end of the array.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might have a website that allows me to upload files with a undo last upload button. If the list of files
    were maintained in an array, then we could just "pop" the last entered file from the array, and go forward.

5. Build your real world example.
    See the example below.
*/

var listOfFiles = ["helloWorld.txt", "myPresentation.ppt", "myHomework.doc"];

function undoLastFileUpload() {
    listOfFiles.pop();
}

/*

The "shift" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The shift method has no parameters. The shift method shifts the array to the left so to speak.  That means the left most element (the element in the index-zero location) 
    will no longer be a part of the array. The index-one position element will now be in index-zero, and the index-two element will be in the index-one location, and so forth.
    [a, b, c, d] becomes [b, c, d] after the shift.

2. Does it edit the current array?
    YES, the current array is editted.

3. What does it return?
    The shift method returns the element that was shifted off of the array, but if there is nothing on the array, the returned value is "undefined."

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say there is a waitinglist for a certain apparment complex, we can maintain this list of people with a push and a shift.    

5. Build your real world example.
    See the example below.
*/

var waitingList = [];

function addPersonToWaitingList(name, phoneNumber, email) {
    waitingList.push({
        name: name,
        phoneNumber: phoneNumber,
        email: email
    });
}

function serveNextPersonFromWaitingList() {
    return waitingList.shift();
}


/*

The "unshift" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The unshift method adds an element or multiple elements to the beginning of an array. This method takes any number of elements to add to the front of the 
    array as parameters.

2. Does it edit the current array?
    YES, the current array is editted.

3. What does it return?
    The unshift method returns the new length of the array.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might have a list of employees in a company, and I want to maintain the list in such a way, so that
    the employees who have been at the company the longest have the largest indices in the array, by using the
    unshift method, I can add new employees giving them the smallest index in the array while maintaining my
    ording of the employee array by time with the company.

5. Build your real world example.
    See the example below.
*/

var employees = ["Cody", "Kim", "Eric"];

function addNewEmployee(name) {
    employees.unshift(name);
}
addNewEmployee("Tracy");

/*
The "sort" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The sort method sorts the elements of the array.
    You can use this method with no parameters: In which case, the sort method sorts the elements of the array in alphabetical
    order (this includes numbers, numbers will be sorted as if they are strings of numbers as in 1, 5, 29 sorted as 1, 29, 5). 
    You can use this method with a function parameter which teaches the sort method how to sort.  This function takes two parameters which are then used to
    show how the list shoud be sorted.  
    If the internal function returns a number less than 0, the item comes before the next item.
    If the internal function returns a number greater than 0, the item comes after the next item.
    If the interal function returns a '0', the item is equal to the next item.
    
2. Does it edit the current array?
    YES, the current array is editted.

3. What does it return?
    The sort method returns the original array sorted according to the specified (or default if not specified) sort order.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    We might have a list of countries that we need to sort by the number of customers our company has in each country. (Example with a function)
    We might want to sort books in our library by alphabetical order

5. Build your real world example.
    See the example below.
*/

//First example that uses a function to sort.
//Countries a company does business in
var countriesWeDoBusinessIn = [{
        name: "Japan",
        numberOfCustomers: 20000
    },
    {
        name: "U.S.",
        numberOfCustomers: 30000
    },
    {
        name: "China",
        numberOfCustomers: 10000

    },
    {
        name: "Mexico",
        numberOfCustomers: 5000
    },
    {
        name: "Canada",
        numberOfCustomers: 5000
    }
];

//After the sort the order should be Canada, Mexico, China, Japan, U.S.

countriesWeDoBusinessIn.sort(function (a, b) {
    if (a.numberOfCustomers == b.numberOfCustomers) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        }
        //The last case is the names are exactly the same
        return 0;
    }

    return a.numberOfCustomers - b.numberOfCustomers;
});

for (var i = 0; i < countriesWeDoBusinessIn.length; i++) {
    console.log("Sorted List: " + countriesWeDoBusinessIn[i].name);
}

//Second Example that does not use a funciton to sort
//Books in a library
var booksInMyLibrary = ["The Book of Mormon", "7 Habits of Highly Effective People", "How to Read a Book", "Happiness Advantage", "Animal Farm"];
//The order should be "7 Habits of Highly Effective People, Animal Farm, Happiness Advantage, How to Read a Book, The Book of Mormon".
console.log("Pre-Sort:" + booksInMyLibrary);
console.log("Post-Sort: " + booksInMyLibrary.sort());

/*
The "concat" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The concat method concatenates whatever the parameters are to the end of the array.  The parameters can be values and/or other arrays. When other arrays are
    concatenated, they are NOT added to the new array at one location (as an array of arrays), but the values of the parameter array are added to and become a part of
    the current array. 
    
2. Does it edit the current array?
    NO, current array is not changed.

3. What does it return?
    The concat method returns a combination of the current array and the parameters added (individual items and arrays of items). 

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    If a company downsizes and combines two teams into 1, a concat method can be used on the record of employees on each team.  In the 
    example, the advertising and socialMedia teams are being combined into a marketing team.

5. Build your real world example.
    See the example below.
*/

var advertisingTeam = ["Susie", "Carlos", "Jeff"];
var socialMediaTeam = ["Stephanie", "Kara", "George"];
var marketingTeam = advertisingTeam.concat(socialMediaTeam);
console.log(marketingTeam);

/*
The "forEach" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The forEach method executes a function "for-each" element of an array.  The parameters are 1. the callback function to be executed on each element of the array, and
    2. the object to which "this" refers.
    The callback function will take 3 optional parameters: 1. the value of the current element, the index of the current element, and the entire array we are working on.
    Adding these additional parameters allows us to manipulate the data in more ways as we loop through each element.
    
2. Does it edit the current array?
    The array is not necessarily changed, but it can be if changes are made to it durring the forEach execution.
    As in:

    myArray.forEach(function(value, index, array) {
        array[index] = value + 2;
    });

3. What does it return?
    There is no return value for the forEach method. 

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    There are many applications in which a forEach can be applied. One example would be to generate a sublist
    of people who have certain attributes, so we can better understand a population.

5. Build your real world example.
    See the example below.
*/

var samplePopulation = [{
        name: "Gary",
        age: 67
    },
    {
        name: "Harry",
        age: 21
    },
    {
        name: "Mary",
        age: 74
    },
    {
        name: "Barry",
        age: 47
    },
    {
        name: "Sherrie",
        age: 34
    }
];

var seniorCitizens = [];

samplePopulation.forEach(function (value) {
    if (value.age >= 65) {
        seniorCitizens.push(value);
    }

});

seniorCitizens.forEach(function (value) {
    console.log(value.name);
});

/*
The "includes" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The includes method searches the array for a certain element, and it returns true if the element exists in the array and false otherwise.
    There are two parameters, one required, and one optional.
    Required Parameter: Must include the item that you are searching for
    Optional Parameter: The index from which to start searching. This defaults to 0.  If a negative index is used, the array will be searched starting with the 
    index equal to (array.length - (number specified)), so if I put a -1, I will only check the last value of the array, if I put a -2 it will start with the last 
    element of the array and work backwards towards the front checking the last then the second to last.
    
2. Does it edit the current array?
    No, the current array remains the same.

3. What does it return?
    It returns true if the value is found, false if it is not found.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    In a library, you might want to know if we have a certain book.  You would probably want to search by ISBN and by book title.

5. Build your real world example.
    See the example below.
*/

var universityLibrary = [{
        title: "Hard Times",
        author: "Charles Dickens",
        ISBN: "9780486419206"
    },
    {
        title: "The Odyssey",
        author: "Homer",
        ISBN: "9780140268867"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        ISBN: "0486284735"
    },
    {
        title: "Much Ado About Nothing",
        author: "William Shakespeare",
        ISBN: "9780486282725"
    }
];

function bookExistsSearchingByTitle(title) {
    var titleArray = [];
    universityLibrary.forEach(function (value) {
        titleArray.push(value.title);
    });
    return titleArray.includes(title);
}

function bookExistsSearchingByISBN(ISBN) {
    var ISBNArray = [];
    universityLibrary.forEach(function (value) {
        ISBNArray.push(value.ISBN);
    });
    return ISBNArray.includes(ISBN);
}

console.log("Do we have 'Hard Times'?: " + bookExistsSearchingByTitle('Hard Times'));
console.log("Do we have book with ISBN 9780486282725?: " + bookExistsSearchingByISBN('9780486282725'));
console.log("Do we have 'A Christmas Carol'?: " + bookExistsSearchingByTitle('A Christmas Carol'));


/*
The "every" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The every method determines if every element of an array meets a certain criteria determined by a callback function. The parameters are the callback function
    defining what to check and an optional parameter is the object that we wish to refer to when using the "this" key word.
    The parameters of the callback are as follows:
    1. the value of the element in the array (this is required)
    2. the index of the element in the array (this is optional)
    3. the array itself (this is optional)

2. Does it edit the current array?
    No, the current array remains the same.

3. What does it return?
    It returns true if every value meets the conditions of the callback function and false otherwise.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Applicants are applying for an internship at a business you own before you go through your list of applications,
    you want to make sure that all applicants have followed the guidelines and have a gpa in a certain region.

5. Build your real world example.
    See the example below.
*/

var applicants = [{
        name: "Zachary",
        gpa: 4.0
    },
    {
        name: "Henry",
        gpa: 3.5
    },
    {
        name: "John",
        gpa: 3.68
    },
    {
        name: "Martha",
        gpa: 3.91
    }

];
//Here the correct gpa range is being defined as 3.5 - 4.0
var allWithinCorrectGpaRange = applicants.every(function (value) {
    return value.gpa >= 3.5;
});
console.log("Were they all in the correct range?");
console.log(allWithinCorrectGpaRange ? "YES" : "NO");

/*
The "some" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The some method determines if at least one element of an array meets a certain criteria determined by a callback function. The parameters are the callback function
    defining what to check and an optional parameter is the object that we wish to refer to when using the "this" key word.
    The parameters of the callback are as follows:
    1. the value of the element in the array (this is required)
    2. the index of the element in the array (this is optional)
    3. the array itself (this is optional)

2. Does it edit the current array?
    No, the current array remains the same.

3. What does it return?
    It returns true if at least one value meets the conditions of the callback function and false otherwise.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Applicants are applying for an internship at a business you own before you go through your list of applications,
    you are curious to know if there are any 4.0 students applying.

5. Build your real world example.
    See the example below.
*/

//For this example, I will be using the list of applicants used in the example above.

var perfectScoresExist = applicants.some(function (value) {
    return value.gpa == 4.0;

});

console.log('Are there any applicants with a 4.0 gpa?');
console.log(perfectScoresExist ? "YES" : "NO");


/*
The "filter" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The filter method takes as a parameter a callback function which contains some sort of boolean expression which acts as a filter for the array, and returns
    a new array with all the elements of the original array which satisfy that boolean expression.
    The filter method has another optional parameter and that is the object we want to refer to with the "this" keyword.
    The callback function has 3 parameters.
    1. the value of the item in the array (required)
    2. The index of the item in the array (optional)
    3. The array itself (optional)

2. Does it edit the current array?
    No, the current array remains the same.

3. What does it return?
    It returns the filtered array.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might have a list of teachers and want to know which teachers are only teaching one class.

5. Build your real world example.
    See the example below.
*/

var teachers = [{
        name: "Mr. Smith",
        numberOfClasses: 1
    },
    {
        name: "Mrs. Gold",
        numberOfClasses: 4
    },
    {
        name: "Mr. Awesome",
        numberOfClasses: 10
    },
    {
        name: "Mrs. Teacher",
        numberOfClasses: 1
    }
];

var teachingOnlyOneClass = teachers.filter(function (teacher) {
    return teacher.numberOfClasses == 1;
});

teachingOnlyOneClass.forEach(function (teacher) {
    console.log(teacher.name);
});


/*
The "map" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The map method creates an array in which each element has been updated by a certain callback fuction.
    Parameters:
    1. Callback function with callback function parameters: 1. element of the array (required), 2. index of the element in the array (optional), 3. the array itself (optional)
    2. What we mean when we use the "this" key word (optional).

2. Does it edit the current array?
    No, the current array remains the same.

3. What does it return?
    It returns the updated array.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might want to update a student database with updated gpas after the semester ends.

5. Build your real world example.
    See the example below.
*/

var StudentDatabaseAllSemesters = [{
        id: 123456789,
        name: "bobby",
        gpa: 3.5,
        accumulatedCredits: 100
    },
    {
        id: 2345678891,
        name: "beth",
        gpa: 3.8,
        accumulatedCredits: 34
    },
    {
        id: 345678912,
        name: "nate",
        gpa: 2.9,
        accumulatedCredits: 78
    },
    {
        id: 456789123,
        name: "ryan",
        gpa: 3.9,
        accumulatedCredits: 23
    }
];

var studentDatabaseThisSemester = [{
        id: 123456789,
        name: "bobby",
        gpa: 2.9,
        credits: 17
    },
    {
        id: 2345678891,
        name: "beth",
        gpa: 3.5,
        credits: 12
    },
    {
        id: 345678912,
        name: "nate",
        gpa: 4.0,
        credits: 11
    },
    {
        id: 456789123,
        name: "ryan",
        gpa: 3.2,
        credits: 16
    }
];


var updatedDatabaseRecords = StudentDatabaseAllSemesters.map(function (student) {
    var studentThisSemester = studentDatabaseThisSemester.find(function (thisSemesterStudent) {
        return thisSemesterStudent.id == student.id;
    });

    var updatedGpa = (student.accumulatedCredits * student.gpa + studentThisSemester.gpa * studentThisSemester.credits) / (studentThisSemester.credits + student.accumulatedCredits);
    var updatedCredits = studentThisSemester.credits + student.accumulatedCredits;

    var newStudent = {
        id: student.id,
        name: student.name,
        gpa: updatedGpa,
        accumulatedCredits: updatedCredits
    };
    return newStudent;
});

updatedDatabaseRecords.forEach(function (student) {
    console.log("Name: " + student.name + " gpa: " + student.gpa.toPrecision(4) + " credits: " + student.accumulatedCredits);
});

/*
The "reduce" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The reduce function takes an array and computes an output based on the callback function parameter.
    The parameters include a callback function and an optional intital value input.  The intial value input acts as the starting point for the accumulator in the callback function.
    The callback function has 4 possible parameters:
    1. the accumulator can start as the initial value, but otherwise it is the returned value from the last run of the callback function (required)
    2. the current value is the current value we are working with in the array (required)
    3. the current index is the index of the current value we are working with in the array (optional)
    4. the array itself (optional)

2. Does it edit the current array?
    No, the current array remains the same.

3. What does it return?
    It returns the calculated value

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might be running a food drive and want to sum up the pounds of food donated (will use accumulator).
    OR, I might have an array of text that I want to put all together into one string.

5. Build your real world example.
    See the example below.
*/

//Example with a starting accumulator
var donationsStationA = [{
        name: "ryan",
        foodInPounds: 30
    },
    {
        name: "gabe",
        foodInPounds: 10
    },
    {
        name: "alfred",
        foodInPounds: 23
    }
];

var donationsStationB = [{
        name: "vicky",
        foodInPounds: 4
    },
    {
        name: "bruce",
        foodInPounds: 16
    },
    {
        name: "stephanie",
        foodInPounds: 23
    }
];

var poundsOfFoodBeforeDrive = 500;


var totalPounds = donationsStationB.reduce(function (total, currentDonation) {
    return total + currentDonation.foodInPounds;
}, donationsStationA.reduce(function (total, currentDonation) {
    return total + currentDonation.foodInPounds;
}, poundsOfFoodBeforeDrive));

console.log(totalPounds); //should be 606

//Example without a starting accumulator
var text = ["And", "it", "came", "to", "pass", "that", "I", "Nephi", "said", "unto", "my", "Father", "I", "will", "go", "and", "do"];
var sentance = text.reduce(function (accumulator, word) {
    return accumulator + " " + word;
});
console.log(sentance);

/*
The "slice" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The slice method creates a subarray from the original array.  It takes two parameters.
    The first parameter is the index from which to start the extraction. (optional)
    The second parameter is the index that will be just 1 outside of the extraction. (optional)
    (To sum it up, the first parameter value is included, and the last value is not included) [x, y)


2. Does it edit the current array?
    No, the current array remains the same.

3. What does it return?
    It returns the extracted array.

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might have a list of studnets and want to break them up into groups.  I could slice the original array to accomplish this.

5. Build your real world example.
    See the example below.
*/

var studentsToBreakIntoGroups = ["nicki", "jeff", "greg", "chris", "savanah", "esther", "maria", "tommy", "roy"];
var groups = [];
groups[0] = studentsToBreakIntoGroups.slice(0, 3);
groups[1] = studentsToBreakIntoGroups.slice(3, 6);
groups[2] = studentsToBreakIntoGroups.slice(6);

groups.forEach(function (group) {
    console.log(group);
});

/*
The "splice" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The splice method can remove elements from an array and/or add new elements to any location in the array.  If I needed to replace a list of elements in the array
    with a new list of items for a certain part of the array, the splice method would be a good option.
    The parameters are:
    1. A start value, the place in the array to start at
    2. the number of elements to delete from the start place (optional, but if not included all elements from start to the end of the array will be deleted)
    3. a single item or list of items to add to the array at the start place (optional)

2. Does it edit the current array?
    YES

3. What does it return?
    An array of the deleted values

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    You might be running a local restaurant and an employee wants to come in for work in the place of another employee
    To update the schedule, you could use a splice

5. Build your real world example.
    See the example below.
*/

var shift1 = ['bob', 'barry', 'barbara', 'becky', 'beth', 'brandon'];
console.log(shift1);

function substitute(employeeOff, employeeFillingIn, workShift) {
    workShift.splice(workShift.indexOf(employeeOff), 1, employeeFillingIn);
}
substitute('barry', 'brenda', shift1);
console.log(shift1);
console.log('brenda should have replaced barry');

/*
The "entries" method

1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The entries puts all the elements in the array into an iterator object.

2. Does it edit the current array?
    No

3. What does it return?
    An iterator full of values which consist of mini two dimentional arrays with the index of the original array and the value of the original array as inputs

4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    I might be debuging some code, and want to see an entire picture of the array, so I could put the array into an iterator and display keys with values.

5. Build your real world example.
    See the example below.
*/

//using the shift1 array from the last example
var myIterator = shift1.entries();

for (let element of myIterator) {
    console.log(element);
}