console.log("Hello");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    addBook(book) {
        let tableBody = document.getElementById("tableBody");
        let domui = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                     </tr>`;
        tableBody.innerHTML += domui;
    };
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    };
    validate(book) {
        if (book.name.length > 2 && book.author.length > 2) {
            return true;
        } else {
            return false;
        };
    };
    show(alert, showMessage) {
        let message = document.getElementById("message");
        let warning;
        if (alert === 'success') {
            warning = 'Success';
        } else {
            warning = 'Error!';
        }
       let info = `<div class="alert alert-${alert} alert-dismissible fade show" role="alert">
                <strong>${warning}!</strong> ${showMessage}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        message.innerHTML = info;
        setTimeout(function () {
            message.innerHTML = ''
        }, 1000);
    }



}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", formSubmit);

function formSubmit(e) {
    console.log("Form Submitting");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(name, author, type);

    let display = new Display();


    if (display.validate(book)) {

        display.addBook(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
        // console.log("SUCCESS");
    } else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
        // console.log("ERROR");
    }


    e.preventDefault();
}