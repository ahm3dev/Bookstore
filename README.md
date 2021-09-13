# Bookstore
Contains an array of objects (Books). Each object contains the follwing: 
- Book Id
- Book Title
- Author
- Price
- Quantity

The ability to search objects by:
- Book Id
using searchBookId(), takes one argument: a number -> id
- Title
using searchBookTitle(), takes one argument: a string -> title
- Author
using searchBookAuthor(), takes one argument: a string -> author

The ability to purchase books and get a receipt. 
using receipt(), takes 3 arguments -> title, quantity, balance and it checks the following:
- If the book is available
- If there are available number of books
- If user has enough balance
