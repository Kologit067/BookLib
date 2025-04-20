
function fillUserTable(users)
{
    debugger;
    var results = $('#usertable');  // 
    results.empty();                    // clear element
    results.append('<thead><tr><th>Id</th><th>Name</th><th>Role</th></thead><tbody>')
    for (var i = 0; i < users.length; i++) {
        results.append('<tr><td>' + users[i].userId + '</td> <td>' + users[i].userName +
            '</td> <td>' + users[i].role + '</td><tr/>'); 
    }
}