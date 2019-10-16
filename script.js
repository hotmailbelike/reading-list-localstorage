let books = []; // array containing book objects {title: '', author: ''}

/* Check localStorage for books */
if (window.localStorage.getItem("bookRow")) {
  books = JSON.parse(window.localStorage.getItem("bookRow"));
}
/* Check if books is empty and show/hide relevant message */

/* If books is not emply, populate view with book details in #list */

if (books.length != 0) {
  $("#empty").hide();
  books.forEach(e => {
    let item = $("<li>").text(e.title + " - " + e.author);
    $("#list").append(item);
  });
}

/* Add a book button click should reveal the form */
$("#show-add").click(e => {
  $("#addForm").show();
  $(this).hide();
});
/* On ADD button click, 
    ensure the input fields contain values, 
    then add the book to HTML view 
    also save updated books array to localStorage 
*/

$("#add").click(e => {
  var title = $("#title").val();
  var author = $("#author").val();
  if (title && author) {
    let item = $("<li>").text(title + " - " + author);
    $("#list").append(item);
    books.push({ title: title, author: author });
    window.localStorage.setItem("bookRow", JSON.stringify(books));
  } else {
    alert("Fields Empty!!");
    console.log("Fields Empty!!");
  }
});

/* Refreshing the page, should show all the stored books */
