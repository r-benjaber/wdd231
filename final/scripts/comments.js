const jsonFile = "data/comments.json";
    
async function fetchComments() {
    let response = await fetch(jsonFile);
    let data = await response.json();
    return data.comments;
}

const commentSection = document.querySelector("#comments");

async function displayComments() {
    const comments = await fetchComments();

    comments.forEach(comment => {
        let commentCard = document.createElement("section");
        
        let user = document.createElement("p");
        user.setAttribute("class", "user");
        user.innerHTML = "by " + comment.user;

        let topic = document.createElement("h3");
        topic.setAttribute("class", "topic");
        topic.innerHTML = comment.topic;

        let content = document.createElement("p");
        content.setAttribute("class", "comment");
        content.innerHTML = comment.comment;

        commentCard.appendChild(topic);
        commentCard.appendChild(user);
        commentCard.appendChild(content);

        commentSection.appendChild(commentCard);
    });
}

displayComments();