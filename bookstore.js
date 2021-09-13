
//Objects array
let bookList = [
    {id: 1, bookTitle: "Start with why", author: "Simon Sinek", price: 80.0, quantity: 13},
    {id: 2, bookTitle: "But how do it know", author: "J. Clark Scott", price: 59.9, quantity: 22},
    {id: 3, bookTitle: "Clean Code", author: "Robert Cecil Martin", price: 50, quantity: 5},
    {id: 4, bookTitle: "Zero to One", author: "Peter Thiel", price: 45, quantity: 12},
    {id: 5, bookTitle: "You don't know JS", author: "Kyle Simpson", price: 39.9, quantity: 9}
]
//Search book id, if 
let searchBookId = id => {
    let book = bookList.find(bookList => bookList.id === id);
    if(book != undefined)
        return bookList.findIndex(bookList => bookList.id === id);
    return undefined;
}

let searchBookTitle = title => {
    let book = bookList.find(bookList => bookList.bookTitle === title);
    if(book != undefined)
        return bookList.findIndex(bookList => bookList.bookTitle === title);
    return undefined;
}

let searchBookAuthor = author => {
    let book = bookList.find(bookList => bookList.author === author);
    if(book != undefined)
        return bookList.findIndex(bookList => bookList.author === author);
    return undefined;
}

let searchBookQuantity = (book, quantity) => {
    let bookQuantityRef = bookList[searchBookTitle(book)].quantity;
    if (quantity <= bookQuantityRef)
        return bookQuantityRef -= quantity;
    return "Not enough books in stock to fulfil your order.";
}

let checkCost = (book, quantity, balance) => {
    let bookCostRef = bookList[searchBookTitle(book)].price;
    bookCostRef *= quantity;
    if (balance >= bookCostRef)
        return "Success"
    return "404";
}

let receipt = (title, quantity, balance) => {
    let bookCostRef = bookList[searchBookTitle(title)].price;
    bookCostRef *= quantity;
    if(searchBookTitle(title) != undefined && !isNaN(searchBookQuantity(title, quantity)) && isNaN(checkCost(title, quantity, balance))) {
    let change = balance - bookCostRef;
        return `
                Bookstore
        -------------------------
        ${title}     ${bookCostRef / quantity}SAR
        Qty:               ${quantity}
        -------------------------
        TOTAL:             ${bookCostRef}SAR
        -------------------------
        CASH               ${balance}SAR
        CHANGE:            ${change.toFixed(2)}SAR
        -------------------------
        Paid with CASH
        =========================
            T H A N K   Y O U
             HAVE A NICE DAY
        `;
    }
    return "Something went wrong, I will make it more specific soon :3";
}


console.log(receipt("But how do it know", 2, 500));



//checking
// console.log(checkCost("Clean Code", 3, 500));
// console.log(searchBookId(1)); //search by id
// console.log(searchBookTitle("But how do it know")); //search by book title
// console.log(searchBookAuthor("Simon Sinek")); //search by book author
// console.log(searchBookQuantity("Clean Code", 3)); //test quantity changing
// console.log(bookList[0].id); //returns id
// console.log(!isNaN(5)); //returns true


/* First uncompleted attempt */

// let bookList = [
//     [ 1, "Start with why", "Simon Sinek", 80.0, 13],
//     [ 2, "But how do it know", "J. Clark Scott", 59.9, 22],
//     [ 3, "Clean Code", "Robert Cecil Martin", 50, 5],
//     [ 4, "Zero to One", "Peter Thiel", 45, 12],
//     [ 5, "You don't know JS", "Kyle Simpson", 39.9, 9]
// ]

// function search(bookInfo) {
//     for (let x = 0; x < bookList.length; x++) {
//         for (let y = 0; y < bookList[x].length; y++) {
//             if (bookInfo == bookList[x][y]) {
//                 let valueX = bookList.indexOf(bookList[x]);
//                 let valueY = bookList.indexOf(bookList[y]);
//                 console.log(valueX);
//             }
//         }
//     }
// }
// search("Clean Code");

// function buy(bookTitle, quantity, balance) {
//     let bookTitle = bookList(bookTitle);
//     if ()
// }