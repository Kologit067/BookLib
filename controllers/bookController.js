const mysql = require("mysql2");
const settings = require("../settings.js");

const connectionOption = settings.connectionOption;

exports.getBooks = async function(request, response)
{
    const connection = mysql.createConnection(connectionOption);
    debugger;
    connection.connect();
    const sqlSelect = `SELECT * FROM book`;
    try {
        result = await connection.promise().query(sqlSelect);
        response.send(result[0]);
        return;
    }
    catch (err) {
        console.log(err);
        response.json(err);
    };    
};

exports.postBook = async function(request, response)
{
    const book = request.body;
  
    const connection = mysql.createConnection(connectionOption);
    debugger;
    connection.connect();
    let sql = null;
 
    const sqlSelect = `SELECT * FROM book WHERE title = '${book.title}' and AuthorId = '${book.authorId}'`;
    try 
    {
        if (book.bookId)
        {
            sql = `UPDATE book 
            SET Title = '${book.title}',
            Description = '${book.description}',
            UserId = ${book.userId}
            WHERE Book = ${book.bookId}`;
        }
        else
        {
            let authorResult = await connection.promise().query(`SELECT * FROM Author WHERE AuthorId = '${book.authorId}'`);
            if (authorResult[0].length == 0)
            {
                response.send('Author not found.');
                return;
            }
            result = await connection.promise().query(sqlSelect);
            if (result[0].length > 0)
            {
                response.send('Book is already in list.');
                return;
            }
            sql = `INSERT INTO Book(AuthorId,Title,Description,UserId)
            VALUES('${book.authorId},${book.title}',${book.Description}',${book.userId})`;
        }       
        
        results = await connection.promise().query(sql);
        response.json(result[0]);
        console.log("Book aded/updated");
    
        connection.end(function(err) {
            if (err) {
              return console.log("Error: " + err.message);
            }
            console.log("Connection closed");
        });

    }
    catch (err) {
        console.log(err);
        response.json(err);
    };
    
}

exports.deleteBook = async function(request, response){
     
    const id = request.params.id; 
    debugger;
    const connection = mysql.createConnection(connectionOption);
    const sqlSelect = `SELECT * FROM book WHERE BookId = '${id}'`;
    const sql = `DELETE FROM book WHERE BookId = '${id}'`;
    try {
        result = await connection.promise().query(sqlSelect);
        if (result[0].length == 0)
        {
            response.status(404).send("Book not found");
            console.log("Book not found");
            return;
        }
        results  = await  connection.promise().query(sql);
        response.status(200);
        response.send(results);
        console.log("Book deleted");
        connection.end();
    }
    catch (err) {
        console.log(err);
        response.json(err);
    };    
    
 }

exports.getBookById = async function(request, response){
     
    const id = request.params.id; 
    const connection = mysql.createConnection(connectionOption);
    const sqlSelect = `SELECT * FROM book WHERE BookId = '${id}'`;
    try {
        result = await connection.promise().query(sqlSelect);
        if (result[0].length == 0)
        {
                response.status(404).send("Book not found");
                console.log("Book not found");
                return;
        }
        response.json(result[0]);
        connection.end(function(err) {
            if (err) {
                return console.log("Error: " + err.message);
            }
            console.log("Connection closed");
        });
    }
    catch (err) {
        console.log(err);
        response.json(err);
    };   
    
}

exports.getBooksByAuthor = async function(request, response){
}

exports.getBooksByUser = async function(request, response){
}

exports.getBooksByCategory = async function(request, response){
}

exports.updateState = async function(request, response){
}

exports.addToCategory = async function(request, response){
}

exports.deleteFromCategory = async function(request, response){
}

exports.setContent = async function(request, response){
}