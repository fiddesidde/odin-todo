import { showListItems, showLists } from './dom';

export const allLists = [];

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
    const isComplete = () => done;

    return {
        getTitle,
        getDescription,
        getDueDate,
        getPrio,
        setPrio,
        getId,
        toggleComplete,
        isComplete,
    };
};

const TodoList = name => {
    const id = Math.round(Math.random() * 10000 + 1);
    let todoItems = [];
    const getName = () => name;
    const getId = () => id;
    const addTodoItem = TodoItem => todoItems.push(TodoItem);
    const deleteTodoItem = id =>
        (todoItems = todoItems.filter(item => id !== item.getId()));
    const getListItems = () => todoItems;

    return {
        getName,
        addTodoItem,
        deleteTodoItem,
        getListItems,
        getId,
    };
};

export const createTodoList = name => {
    const list = TodoList(name);
    allLists.push(list);
    showLists();
    return list;
};

// TEST STUFF

const testList = createTodoList('TestList');
for (let i = 0; i < 3; i++) {
    testList.addTodoItem(TodoItem(`Title${i}`, `description${i}`));
}

const testList2 = createTodoList('New testList');
testList2.addTodoItem(
    TodoItem('awsome thing', 'yes do this awsome thing', '2023-01-25', 1)
);

// TEST STUFF END

// showLists();
showListItems(allLists[0]);
