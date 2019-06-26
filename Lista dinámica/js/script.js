
var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'La siguiente es una lista dinámica, preciona en cualquier lado fuera de la lista para añadir un nuevo elemento, si quieres editar algunos presionalo.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function () {
    var listItem = document.createElement('li');
    var listContent = prompt('Agrega un nuevo elemento a la lista');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function (e) {
        e.stopPropagation();
        var listContent = prompt('Ingresa el nuevo valor del elemento.');
        this.textContent = listContent;
    }
}