window.onload = function() {

	var submit = document.getElementById( 'submit' );
	var task   = document.getElementById( 'task' );
	var form   = document.getElementById( 'main');

	form.addEventListener('submit', clickHandler);

	var data = localStorage.getItem("item");

	if (localStorage.getItem("item")) {
		console.log(data);
	};


	function clickHandler(e) {
		e.preventDefault();

		var text  = document.getElementById( 'item' );
		var entry = document.createElement( 'li' );

		// Store
		localStorage.setItem("item", text.value);

		// generates the todo list using the value of text and creates the delete button
		entry.innerHTML = '<span class="content">' + localStorage.getItem("item") + '</span> ' + ' <button class="btn-delete"> delete </button>';
		task.appendChild( entry );

		// gets the delete button creates a click event and binds/passes the deleteHandler function with value from entry
		var del = entry.querySelector('.btn-delete');
		del.addEventListener('click', deleteHandler.bind(entry));

		// gets the class content which is a span tag and generated when creating a todo item
		// creates a click event with the function of editHandler
		var edit = entry.querySelector('.content');
		edit.addEventListener('click', editHandler);

		// calls the count task function to increment the number of todo items
		countTask();

		// sets the input text field value to blank after entering an todo input
		text.value = '';
		console.log(localStorage.getItem("item"));

	}

	/**
	 * Deletes a task from todo list
	 * calls countTask to update list of task after deleting a task
	 * @param  {event} e event handler
	 * @return {none}
	 */
	function deleteHandler(e) {
		this.remove();
		countTask();
	}

	/**
	 * edits todo item
	 * sets the span elements to have a contenteditable value
	 * @param  {event} e event handler
	 * @return {none}
	 */
	function editHandler (e) {
		console.log(this);
		 this.setAttribute('contenteditable', 'true');
	}

	/**
	 * counts number of todo items
	 * @param  {event} e event handler
	 * @return {none}
	 */
	function countTask (e) {
		var numberOfTask = document.querySelector('.number-of-task');
		numberOfTask.innerText = 'number of task: ' + task.querySelectorAll('li').length;
	}


}