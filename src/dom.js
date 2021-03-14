const showLists = TodoList => {
    const listOfLists = document.querySelector('#lists');

    const h1 = document.createElement('h1');
    h1.textContent = TodoList.getName();

    const desc = document.createElement('div');
    desc.textContent = TodoList.getDescription();

    const thisList = document.createElement('div');
    thisList.className = 'list';

    thisList.appendChild(h1);
    thisList.appendChild(desc);
    listOfLists.appendChild(thisList);
};

export { showLists };
