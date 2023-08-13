var loadFile = function (event) {
    var preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.onload = function () {
        URL.revokeObjectURL(preview.src); // free memory
    };
};
document.addEventListener('DOMContentLoaded', () => {


    var new_post_form = document.getElementById("new_post_form");
    var new_post_btn = document.getElementById("new_post_btn");
    var post_btn = document.getElementById("post_btn");
    

    new_post_btn.addEventListener("click", () => {

        if (new_post_form.style.display === "none") {
            new_post_form.style.display = "flex";
        }
        else {
            new_post_form.style.display = "none";
        }
        console.log("hi");
    });

   
    // Function to handle the form submission and append content to the page
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the user-entered text from the text input
        const textInput = document.getElementById('text_form').value;

        // Get the uploaded image file
        const imageInput = document.getElementById('image_form').files[0];
        const imageURL = URL.createObjectURL(imageInput);

        // Create a new div element to hold the posted content
        const newPostDiv = document.createElement('div');
        newPostDiv.classList.add('posted-content');

        // Create an image element and set its source to the uploaded image URL
        const imageElement = document.createElement('img');
        imageElement.src = imageURL;
        imageElement.alt = 'User Image';

        // Create a paragraph element to display the user-entered text
        const textElement = document.createElement('p');
        textElement.textContent = textInput;

        // Append the image and text elements to the new post div
        newPostDiv.appendChild(imageElement);
        newPostDiv.appendChild(textElement);

        // Append the new post div to the temp-card div
        const postedContentWrapper = document.getElementById('posted_content_wrapper');
        postedContentWrapper.appendChild(newPostDiv);
    }

    // Attach the handleFormSubmit function to the form's submit event
    document.getElementById('post_btn').addEventListener('click', handleFormSubmit);




    

});