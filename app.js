(function(doc) {

    //Create text box --done
    //Need to create ul and create li's on click of button
    //set input type to text
    //when you click on an li, it should add class .completed
    //give submit button an id of #add_todo

    var body = doc.getElementsByTagName('body')[0]
    var title = doc.createElement('h1')
    var textBox = doc.createElement('input');
    var inputForm = doc.createElement('form');
    var subButton = doc.createElement('button');
    var list = doc.createElement('ul');


    //Creates Title
    title.innerText = "Todo App"

    //Sets form actions
    inputForm.setAttribute("action", "index.html")
    inputForm.setAttribute("method", "get")

    //Creates Textbox
    textBox.setAttribute("type", "text");
    textBox.setAttribute("id", "textBox")
    textBox.setAttribute("placeholder", "What to do?");

    //Creates Submit Button
    subButton.setAttribute("type", "submit");
    subButton.setAttribute("id", "add_todo")
    subButton.innerHTML = "Add";


    //Events
    subButton.addEventListener('click', function(event) {
        var text = doc.getElementById('textBox').value;

        //If block checks if textbox is empty
        if (text !== "") {
            //this keeps the page from refreshing
            event.preventDefault();
            //these create the variables I need to use
            var listItem = doc.createElement('li');
            var removeButton = doc.createElement('button')
            var edit = doc.createElement('button')
                //list items
            listItem.className = "tasks"
            listItem.innerHTML = text
                //remove button
            removeButton.innerHTML = "X"
            removeButton.className = "delete"
            removeButton.setAttribute("type", "button")
                //edit button
            edit.innerHTML = "Edit";
            edit.className = "edit";
            //appends element to parent node
            listItem.appendChild(edit)
            listItem.appendChild(removeButton)
            list.appendChild(listItem)
                //sets textbox back to empty when submitted
            doc.getElementById('textBox').value = "";
            //remove button functionality
            removeButton.addEventListener("click", function() {
                    listItem.parentNode.removeChild(listItem)
                })
                //edit button functionality
            edit.addEventListener('click', function() {
                var editBox = "<input type='text' id='editBox' value=" + text + "><button id='update' type='submit'>Update</button>";

                listItem.innerHTML = editBox;
                var update = doc.getElementById("update")
                update.addEventListener("click", function() {
                    text = doc.getElementById("editBox").value;
                    listItem.innerHTML = text;
                    listItem.appendChild(edit);
                    listItem.appendChild(removeButton)


                })
            })
        } else {
            event.preventDefault();
            alert("You have to enter something to do!")
        }
    })


    //Appends elements

    body.appendChild(title)
    inputForm.appendChild(textBox)
    inputForm.appendChild(subButton)
    body.appendChild(inputForm)

    body.appendChild(list)





})(document)
