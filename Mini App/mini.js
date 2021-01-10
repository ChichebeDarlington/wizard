const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});


//add book-list

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
e.preventDefault();

const value = addForm.querySelector('input[type="text"]').value;

const li = document.createElement('li');
const bookName = document.createElement('span');
const deletebtn = document.createElement('span');

li.appendChild(bookName);
li.appendChild(deletebtn);

list.appendChild(li)

deletebtn.textContent = 'delete';
bookName.textContent = value;
deletebtn.classList.add('delete');
bookName.classList.add('name')
});


const hidebox = document.querySelector('#hide');
hidebox.addEventListener('change', function(e){
    if(hidebox.checked){
        list.style.display = 'none';
    } else{
        list.style.display = 'block';
    }
});


//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    });
});