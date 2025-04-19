
async function fetchBooks() {
    try
    {
        let option = getOptionForGet()
        let response = await fetch('http://localhost:3000/api/book/all', option); // 
        let data = await response.json();  // 
        localStorage.setItem('books', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching books:', error); // 
    }  
    return null;       
}

async function fetchBookById(bookId) {
    try
    {
        debugger;
        let option = getOptionForGet()
        let response = await fetch(`http://localhost:3000/api/book/byid/${bookId}`, option); // 
        let data = await response.json();  // 
        localStorage.setItem('book', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching book:', error); // 
    }
    return null;
}

async function fetchAuthors() {
    try
    {
 //       debugger;
        let option = getOptionForGet()
        let response = await fetch('http://localhost:3000/api/author/all', option); // 
        let data = await response.json();  // 
        localStorage.setItem('authors', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching authors:', error); // 
        return null;
    }  
}

async function fetchAuthorById(authorId) {
    try
    {
        let option = getOptionForGet()
        let response = await fetch(`http://localhost:3000/api/author/byid/${authorId}`, option); // 
        let data = await response.json();  // 
        localStorage.setItem('author', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching authors:', error); // 
    }
    return null;
}

async function fetchCategories() {
    try
    {
 //       debugger;
        let option = getOptionForGet()
        let response = await fetch('http://localhost:3000/api/category/all', option); // 
        let data = await response.json();  // 
        localStorage.setItem('categories', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching categories:', error); // 
        return null;
    }  
}

async function fetchCategoryById(categoryId) {
    try
    {
        let option = getOptionForGet()
        let response = await fetch(`http://localhost:3000/api/category/byid/${categoryId}`, option); // 
        let data = await response.json();  // 
        localStorage.setItem('category', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching category:', error); // 
    }
    return null;
}

async function getBookCategoryList(bookId) {
    try
    {
        let option = getOptionForGet()
        let response = await fetch(`http://localhost:3000/api/category/bybookid/${bookId}`, option); // 
        let data = await response.json();  // 
        localStorage.setItem('bookcategories', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching book categories:', error); // 
    }
    return null;
}

async function getBookStateList(bookId) {
    try
    {
        let option = getOptionForGet()
        let response = await fetch(`http://localhost:3000/api/state/historybybookid/${bookId}`, option); // 
        let data = await response.json();  // 
        localStorage.setItem('bookstates', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching book states:', error); // 
    }
    return null;
}

async function getBookState(bookId) {
    try
    {
        let option = getOptionForGet()
        let response = await fetch(`http://localhost:3000/api/state/bybookid/${bookId}`, option); // 
        if (response.status && response.status == 404)
            return {bookId:bookId, readingStateId: null, page: null};
        let data = await response.json();  // 
        localStorage.setItem('bookstate', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching book state:', error); // 
    }
    return null;
}

async function fetchStates() {
    try 
    {
        let option = getOptionForGet()
        let response = await fetch('http://localhost:3000/api/state/all', option) // 
        let data = await response.json();  // 
        localStorage.setItem('states', JSON.stringify(data));
        return data;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching states:', error); // 
        return null;
    }  
}

function getOptionForGet() {
    let user = JSON.parse( localStorage.user );
    return {
        method: 'GET',
        headers: {
            Authorization: user.token
        }
      };    
}

function getOptionForPost() {
    let user = JSON.parse( localStorage.user );
    return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: user.token
        }
      };    
}

function getOptionForDelete() {
    let user = JSON.parse( localStorage.user );
    return {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: user.token
        }
      };    
}


async function deleteBookFromServer(bookId) {
    try 
    {
        debugger;
        const option = getOptionForDelete();
        let response = await fetch(`http://localhost:3000/api/book/${bookId}`, option) // 
        debugger;
        let result = null;
        if (response.status != 400)
        {
            debugger;
            result = await response.json();  // 
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error deleting book: ${bookId}`, error); // 
        return error;
    }  
}

async function deleteAuthorFromServer(authorId) {
    try 
    {
 //       debugger;
        const option = getOptionForDelete();
        let response = await fetch(`http://localhost:3000/api/author/${authorId}`, option) // 
 //       debugger;
        let result = null;
        if (response.status != 400)
        {
//            debugger;
            result = await response.json();  // 
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error deleting author: ${authorId}`, error); // 
        return error;
    }  
}

async function deleteCategoryFromServer(categoryId) {
    try 
    {
//        debugger;
        const option = getOptionForDelete();
        let response = await fetch(`http://localhost:3000/api/category/${categoryId}`, option) // 
//        debugger;
        let result = null;
        if (response.status != 400)
        {
//            debugger;
            result = await response.json();  // 
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error deleting category: ${categoryId}`, error); // 
        return error;
    }  
}

async function deleteBookCategoryFromServer(bookId,categoryId) {
    try 
    {
        debugger;
        const option = getOptionForDelete();
        let response = await fetch(`http://localhost:3000/api/book/deleteFromCategory/${bookId}/${categoryId}`, option) // 
//        debugger;
        let result = null;
        if (response.status != 400)
        {
//            debugger;
            result = await response.json();  // 
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error deleting category: ${categoryId}`, error); // 
        return error;
    }  
}

async function login(userName, password) {
    try 
    {
//        debugger;
        const option = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                userName : userName,
                password : password
            })
          }
        let response = await fetch('http://localhost:3000/api/login', option) // 
        let user = null;
        if (response.status != 400)
            user = await response.json();  // 
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
    catch(error)
    {
        debugger;
        console.error('Error fetching states:', error); // 
        return null;
    }  
}

async function saveBookToServer (book) {
    try 
    {
        debugger;
        const option = getOptionForPost();
        option.body = JSON.stringify(book)
        let response = await fetch(`http://localhost:3000/api/book`, option) // 
        debugger;
        let result = null;
        if (response.status != 400)
        {
            debugger;
            result = await response.json();  // 
            book.bookId = result.insertId;
            return book;
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error saving author: ${author.authorId}`, error); // 
        return error;
    }  
}

async function saveAuthorToServer (author) {
    try 
    {
//        debugger;
        const option = getOptionForPost();
        option.body = JSON.stringify(author)
        let response = await fetch(`http://localhost:3000/api/author`, option) // 
//        debugger;
        let result = null;
        if (response.status != 400)
        {
//            debugger;
            result = await response.json();  // 
            author.authorId = result.insertId;
            return author;
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error saving author: ${author.authorId}`, error); // 
        return error;
    }  
}

async function saveCategoryToServer (category) {
    try 
    {
//        debugger;
        const option = getOptionForPost();
        option.body = JSON.stringify(category)
        let response = await fetch(`http://localhost:3000/api/category`, option) // 
//        debugger;
        let result = null;
        if (response.status != 400)
        {
//            debugger;
            result = await response.json();  // 
            category.categoryId = result.insertId;
            return category;
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error saving category: ${category.categoryId}`, error); // 
        return error;
    }  
}


async function saveBookCategoryToServer(bookCategory) {
    try 
    {
//        debugger;
        const option = getOptionForPost();
        option.body = JSON.stringify(bookCategory)
        let response = await fetch(`http://localhost:3000/api/book/addToCategory`, option) // 
//        debugger;
        let result = null;
        if (response.status == 200)
        {
//            debugger;
            result = await response.json();  // 
            bookCategory.bookCategoryId = result.insertId;
            return bookCategory;
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error saving category: ${category.categoryId}`, error); // 
        return error;
    }  
}


async function updateReadingState(newState) {
    try 
    {
//        debugger;
        const option = getOptionForPost();
        option.body = JSON.stringify(newState)
        let response = await fetch(`http://localhost:3000/api/book/updatestate`, option) // 
//        debugger;
        let result = null;
        if (response.status == 200)
        {
//            debugger;
            result = await response.json();  // 
            newState.bookReadingStateId = result.insertId;
            return newState;
        }
        return response;
    }
    catch(error)
    {
        debugger;
        console.error(`Error updateing state: ${newState.bookId}`, error); // 
        return error;
    }  
}
