import { allLists } from './index';

const showLists = () => {
    for (const list of allLists) {
        const listOfLists = document.querySelector('#lists');

        const h1 = document.createElement('h1');
        h1.textContent = list.getName();

        const desc = document.createElement('div');
        desc.textContent = list.getDescription();

        const thisList = document.createElement('div');
        thisList.id = list.getId();
        thisList.className = 'list';

        thisList.appendChild(h1);
        thisList.appendChild(desc);
        thisList.addEventListener('click', e => {
            const listOfTodos = document.querySelector('#todos');
            listOfTodos.innerHTML = '';
            const listId = e.target.id;
            const hit = allLists.find(list => list.getId() == listId);
            // console.log(`Target id: ${e.target.id}`);
            showListItems(hit);
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

export { showLists, showListItems };
