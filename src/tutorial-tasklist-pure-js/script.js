let tasks = ['Я хочу сделать список задач'];

const btnAdd = document.querySelector('.add-btn');
const input = document.querySelector('input');
const ul = document.createElement('ul');
document.body.appendChild(ul);

const handleClickAdd = () => {
    if (input.value.trim()) {
        tasks.push(input.value);
    }
}

const handleClickRemove = (indexClicked) => {
    tasks = tasks.filter((item, index) => indexClicked !== index );
    render();
}

btnAdd.addEventListener('click', () => {
    handleClickAdd();
    render();
});


const render = () => {
    ul.innerHTML = ''

     ul.innerHTML = tasks.map(todo => `<li>${todo} <button class='remove-btn'>x</button></li>`).join('');

    input.value = '';

    const removeBtn= document.querySelectorAll('.remove-btn');

    removeBtn.forEach((li, index) => li.onclick = () => handleClickRemove(index));
  
}

window.onload = render;