    var Todo = {
        init: function() {
            this.bindEvents();
        },

        bindEvents: function() {
        	var writeSomething = $('#write-something');

            writeSomething.on('enterKey', this.addTodo);
            writeSomething.on('keypress', this.enterTodo);
        },

        addTodo: function(e) {
            var value = $(this).val();

            e.preventDefault();
            $('<li id="todo-list"><input type="checkbox"><span>' + value + '</span><button class="destroy">Delete</button></li>').appendTo('#todos');
            $(this).val('');
        },

        enterTodo: function(e) {
            if (e.keyCode === 13 && $(this)) {
                $(this).trigger('enterKey');
                e.preventDefault();
            };
        }
    };

    Todo.init();
