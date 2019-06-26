let input = document.querySelector('input#input');


function addingEventListener() {

    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });

}

addingEventListener();
