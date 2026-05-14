const movies = [];

const newFilmNameNode = document.querySelector('.js-add-input');
const addNewFilmBtnNode = document.querySelector('.js-add-btn');
const filmListNode = document.querySelector('.js-film-list');

function getFilmName() {
    filmName = newFilmNameNode.value;
    return filmName;
};

function addToFilmList() {
    if (!getFilmName()) {
        return;
    }
    filmName = getFilmName();
    movies.push({name: filmName, watched: false});
};

function renderFilmList(movies) {
    let itemsHTML = '';
    movies.forEach((element, index) => {
        const itemHTML = `<li id="" class="js-film-item film-list__item ${element.watched ? 'watched' : ''}">
    <input type="checkbox" 
        name="" 
        id="filmname" 
        class="js-checkbox checkbox"
        ${element.watched ? 'checked' : ''}>
    <label for="filmname" class="film__title">
        ${element.name}
    </label>
    <div id="" class="js-delete-btn delete-btn">
        <img class="js-delete-btn" src="resources/delete-btn.png" alt="">
    </div>
</li>` 
        itemsHTML = itemHTML + itemsHTML;
    });

    filmListNode.innerHTML = `<ul>${itemsHTML}</ul>`;
};

filmListNode.addEventListener('click', function(event) {
    const deleteBtn = event.target.closest('.js-delete-btn');
    if (deleteBtn) {
        const listItem = deleteBtn.closest('.js-film-item');
        const index = Array.from(listItem.parentNode.children).indexOf(listItem);

        movies.splice(index, 1);
        listItem.remove();
    }

    const checkbox = event.target.closest('.js-checkbox');
        if (checkbox) {
            const listItem = checkbox.closest('.js-film-item');
            const index = Array.from(listItem.parentNode.children).indexOf(listItem);
            movies[index].watched = checkbox.checked;
            listItem.classList.toggle('watched', checkbox.checked);
    }
});

addNewFilmBtnNode.addEventListener('click', function() {
    addToFilmList();
    renderFilmList(movies);

    newFilmNameNode.value = '';
});