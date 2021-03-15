import { allLists, createTodoList } from './index';

const showLists = () => {
    const listOfLists = document.querySelector('#lists');
    const lists = document.querySelectorAll('.list');
    for (const list of lists) {
        listOfLists.removeChild(list);
    }

    for (const list of allLists) {
        const thisList = document.createElement('div');
        thisList.id = list.getId();
        thisList.className = 'list';
        thisList.textContent = list.getName();

        thisList.addEventListener('click', e => {
            const listOfTodos = document.querySelector('#todos');
            listOfTodos.innerHTML = '';
            const clickedListId = e.target.id;
            const foundList = allLists.find(
                list => list.getId() == clickedListId
            );
            showListItems(foundList);
        });
        listOfLists.appendChild(thisList);
    }
};

const showListItems = list => {
    for (const todo of list.getListItems()) {
        const listOfTodos = document.querySelector('#todos');

        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox-div';
        const checkbox = document.createElement('input');
        if (todo.isComplete()) checkbox.checked = true;
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', () => {
            todo.toggleComplete();
            console.log(todo.isComplete());
        });

        const title = document.createElement('div');
        title.textContent = todo.getTitle();

        const dueDate = document.createElement('div');
        dueDate.textContent = todo.getDueDate();

        const prio = document.createElement('div');
        switch (todo.getPrio()) {
            case 1:
                prio.textContent = 'high';
            case 2:
                prio.textContent = 'normal';
            case 3:
                prio.textContent = 'low';
            default:
                prio.textContent = 'normal';
        }

        const thisTodo = document.createElement('div');
        thisTodo.className = 'todo';

        checkboxDiv.appendChild(checkbox);
        thisTodo.appendChild(checkboxDiv);
        thisTodo.appendChild(title);
        thisTodo.appendChild(dueDate);
        thisTodo.appendChild(prio);
        listOfTodos.appendChild(thisTodo);
    }
};

const input = document.querySelector('#new-list-input');
const btn = document.querySelector('#new-list-button');
btn.addEventListener('click', () => {
    console.log(input.value);
    createTodoList(input.value);
});

export { showLists, showListItems };
