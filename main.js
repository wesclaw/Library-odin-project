const plus_add = document.querySelector('.add-book')
const form = document.getElementById('form')

plus_add.addEventListener('click',()=>{
  form.style.display = 'flex'
})

const input_title = document.getElementById('input-title')
const input_author = document.getElementById('input-author')
const body = document.querySelector('body')

const remove_x = document.getElementById('remove_x').addEventListener('click',()=>{
  form.style.display = 'none'
})


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const title_text = input_title.value;
  const author_text = input_author.value;
  const bookShelf = document.querySelector('.bookShelf')
  bookShelf.classList.add('bookShelf')
  const book_el = document.createElement('div')
  bookShelf.appendChild(book_el)
  book_el.classList.add('book')
  const p_title = document.createElement('p')
  p_title.textContent = title_text;
  book_el.appendChild(p_title)
  const p_author = document.createElement('p')
  p_author.textContent = author_text;
  input_title.value = "";
  input_author.value = "";
  const remove_btn = document.createElement('button')
  remove_btn.textContent = 'Remove'
  remove_btn.classList.add('remove_btn_el')
  book_el.addEventListener('mouseenter',()=>{
    book_el.append(remove_btn)
  })
  book_el.addEventListener('mouseleave',()=>{ 
    remove_btn.remove()
  }) 
  book_el.appendChild(p_author)
  body.append(bookShelf)
  form.style.display = 'none'
  remove_btn.addEventListener('click',()=>{
    book_el.remove()
  })
})

