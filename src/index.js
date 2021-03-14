import { showLists } from './dom';

const TodoItem = (title, description, dueDate = new Date(), priority = 2) => {
    let done = false;
    let prio = priority;
    const id = Math.round(Math.random() * 10000 + 1);
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPrio = () => prio;
    const setPrio = num => (prio = num);
    const getId = () => id;
    const toggleComplete = () => (done = !done);

    return {
        getTitle,
        getDescription,
        getDueDate,
        getPrio,
        setPrio,
        getId,
        toggleComplete,
    };
};

const TodoList = (name, description) => {
    let todoItems = [];
    const getName = () => name;
    const getDescription = () => description;
    const addTodoItem = TodoItem => todoItems.push(TodoItem);
    const deleteTodoItem = id =>
        (todoItems = todoItems.filter(item => id !== item.getId()));
    const getList = () => todoItems;

    return { getName, getDescription, addTodoItem, deleteTodoItem, getList };
};

const testList = TodoList('TestList', 'This is a list used to test stuff');
for (let i = 0; i < 3; i++) {
    testList.addTodoItem(TodoItem(`Title${i}`, `description${i}`));
}

showLists(testList);

// TEMP TEST STUFF
// const testitem = TodoItem('hej', 'jag sager hej', 2012, 1);
// const testitem2 = TodoItem('NEJA', 'ALDRIG I LIVET', 2023, 2);

// todoList.addTodoItem(testitem);
// todoList.addTodoItem(testitem2);

// console.log(todoList.getList());

// console.log(todoList.getList()[0].getId());
// console.log(todoList.getList()[1].getId());

// const btn = document.querySelector('#test');
// btn.addEventListener('click', () => {
//     const itemId = todoList.getList()[1].getId();
//     todoList.deleteTodoItem(itemId);
//     console.log(todoList.getList());
//     console.log(todoList.getList()[0].getId());
// });

// console.log(todoList.getList());
