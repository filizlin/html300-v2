//find the form 
const form = document.getElementById('form');

//add submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('class', 'btn btn-primary mb-3');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('data-bs-toggle', 'collapse');
submitButton.setAttribute('data-bs-target', '#collapse');
submitButton.setAttribute('aria-expanded', 'false');
submitButton.setAttribute('aria-controls', 'collapse');
submitButton.textContent='Submit';
form.appendChild(submitButton);


//add the collapse when hitting submit
const collapse = document.createElement('div');
collapse.setAttribute('class', 'collapse');
collapse.setAttribute('id', 'collapse');
form.appendChild(collapse);
const collapsecontent = document.createElement('div');
collapsecontent.setAttribute('class', 'card card-body');
collapsecontent.textContent='Your form has been submitted!';
document.getElementById('collapse').appendChild(collapsecontent);

//Use jQuery and refactor the form submission.

$( "form" ).submit(function(run) {
    console.log($(this).serializeArray());
    run.preventDefault();
})
