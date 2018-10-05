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
The "every" method

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