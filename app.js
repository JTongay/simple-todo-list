(function() {

    $(function() {
        //Create the title
        //Create Text box
        //Need to create ul and create li's on click or enter key of button
        //set input type to text
        //when you click on edit button, a textbox should appear with a button saying submit
        //when you click on x button, it should delete the li

        var $body = $('body');
        var $title = $('<h1>To-Do App</h1>');
        var $form = $("<form>")
        var $textBox = $("<input type='text' placeholder='What to do?' id='textBox'>");
        var $subButton = $("<button type='submit' id='add_todo'>Add</button>")
        var $taskList = $('<ul>');




        $body.append($title);
        $form.append($textBox);
        $form.append($subButton);
        $body.append($form)
        $body.append($taskList)


        //Event Handlers
        $(document)
            .on('click', '#add_todo', addListItem)
            .on('click', '.delete', deleteListItem)
            .on('click', '.edit', editListItem)
            .on('click', '.confirm', confirmEdit)


        function addListItem(event) {
            event.preventDefault();
            var $listItem = $("<li class='tasks'>");
            var text = $textBox.val();
            var $deleteBtn = $("<button class='delete'>X</button>")
            var $editBth = $("<button class='edit'>Edit</button>")
            if (text.trim().length === 0) {
                alert("you gotta add something!")
                return;
            }
            $listItem.html(text)
            $textBox.val("")
            $listItem.append($deleteBtn)
            $listItem.append($editBth)
            $taskList.append($listItem)
        }

        function deleteListItem() {
            $(this).parent().remove()
        }

        function editListItem() {
            var $editBox = $("<input type='text' class='editBox' placeholder='Make Changes?'><button class='confirm'>Confirm</button>")

            var listText = $(this).parent().html($editBox)

        }

        function confirmEdit() {
            text = $('.editBox').val();
            var $listItem = $("<li class='tasks'>");
            var $deleteBtn = $("<button class='delete'>X</button>")
            var $editBth = $("<button class='edit'>Edit</button>")
            $listItem.html(text)
            $listItem.append($deleteBtn)
            $listItem.append($editBth)
            $taskList.append($listItem)
            $(this).parent().replaceWith($listItem)


        }





    })
})();
