let comments = [];
let commentListHTML = '';

function addComment(comment) {
    comments.push(comment);
    saveCommentsToLocalStorage(comments);
}

function editComment(index, comment) {
    comments[index] = comment;
    saveCommentsToLocalStorage(comments);
}

function deleteComment(index) {
    comments.splice(index, 1);
    saveCommentsToLocalStorage(comments);
}

function saveCommentsToLocalStorage() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function getCommentsFromLocalStorage() {
    const commentsString = localStorage.getItem('comments');
    if (commentsString) {
        comments = JSON.parse(commentsString);
        renderComments();
    }
}

function renderComments() {
    const commentList = document.querySelector('#comment-list');
    commentListHTML = '';
    comments.forEach((comment, index) => {
        commentListHTML += `
                <li>
                    <div class="comment">${comment}</div>
                    <div>
                    <button class="edit-button" data-index="${index}">Edit</button>
                    <button class="delete-button" data-index="${index}">Delete</button>
                    </div>
                </li>
                `;
    });
    commentList.innerHTML = commentListHTML;

    // const commentForm = document.querySelector('#comment-form');
    // commentForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const commentInput = document.querySelector('#comment-input');
    //     const comment = commentInput.value.trim();
    //     if (comment !== '') {
    //         addComment(comment);
    //         commentInput.value = '';
    //         renderComments();

    //     }
    // });

    var buttonCmt = document.querySelector("#buttonCmt");
    buttonCmt.onclick = function() {
        const commentInput = document.querySelector('#comment-input');
        const comment = commentInput.value.trim();
        if (comment !== '') {
            addComment(comment);
            commentInput.value = '';
            renderComments();

        }
    }
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            const comment = comments[index];
            const newComment = prompt('Edit comment:', comment);
            if (newComment !== null) {
                editComment(index, newComment);
                renderComments();
            }
        });
    });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            deleteComment(index);
            renderComments();
        });
    });
}

renderComments();
getCommentsFromLocalStorage();
