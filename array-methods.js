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