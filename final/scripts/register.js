const params = new URLSearchParams(window.location.search);

const form = document.querySelector("#register");

function logIn() {
    let userLabel = document.createElement("label");
    userLabel.innerHTML = "Your username: ";
    userLabel.setAttribute("for", "username");

    let username = document.createElement("input");
    username.setAttribute("type", "text");
    username.setAttribute("name", "username");
    username.setAttribute("id", "username");

    let passLabel = document.createElement("label");
    passLabel.innerHTML = "Your password: ";
    passLabel.setAttribute("for", "password");

    let password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("id", "password");

    let logIn = document.createElement("button");
    logIn.innerHTML = "Log In";
    logIn.setAttribute("type", "submit");

    let typeInput = document.createElement("input");
    typeInput.setAttribute("type", "hidden");
    typeInput.setAttribute("name", "type");
    typeInput.setAttribute("value", "login");

    let notRegistered = document.createElement("a");
    notRegistered.innerHTML = "Not Regitered? Sign Up Here";
    notRegistered.setAttribute("href", "?type=signup");

    form.appendChild(userLabel);
    form.appendChild(username);
    form.appendChild(passLabel);
    form.appendChild(password);
    form.appendChild(typeInput);
    form.appendChild(logIn);
    form.appendChild(notRegistered);
    
}

function signUp() {

    let userLabel = document.createElement("label");
    userLabel.innerHTML = "Create an username: ";
    userLabel.setAttribute("for", "username");

    let username = document.createElement("input");
    username.setAttribute("type", "text");
    username.setAttribute("name", "username");
    username.setAttribute("id", "username");

    let passLabel = document.createElement("label");
    passLabel.innerHTML = "Create a password: ";
    passLabel.setAttribute("for", "password");

    let password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("id", "password");
    password.setAttribute("pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$");
    password.setAttribute("title", "Must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number");

    let emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Write your Email: ";
    emailLabel.setAttribute("for", "email");
    
    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("id", "email");

    let signUp = document.createElement("button");
    signUp.innerHTML = "Sign Up";
    signUp.setAttribute("type", "submit");

    let typeInput = document.createElement("input");
    typeInput.setAttribute("type", "hidden");
    typeInput.setAttribute("name", "type");
    typeInput.setAttribute("value", "signup");

    let alrdyRegistered = document.createElement("a");
    alrdyRegistered.innerHTML = "Have an account? Login Here!"
    alrdyRegistered.setAttribute("href", "?type=login");


    form.appendChild(userLabel);
    form.appendChild(username);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(passLabel);
    form.appendChild(password);
    form.appendChild(typeInput);
    form.appendChild(signUp);
    form.appendChild(alrdyRegistered);

}

function comment() {

    let topicLabel = document.createElement("label");
    topicLabel.innerHTML = "Comment Topic: ";
    topicLabel.setAttribute("for", "topic");
    
    let topic = document.createElement("input");
    topic.setAttribute("type", "text");
    topic.setAttribute("name", "topic");
    topic.setAttribute("id", "topic");

    let commentLabel = document.createElement("label");
    commentLabel.innerHTML = "Your comment: ";
    commentLabel.setAttribute("for", "comment");

    let comment = document.createElement("textarea");
    comment.setAttribute("name", "comment");
    comment.setAttribute("rows", "4");
    comment.setAttribute("placeholder", "Write your comment here...");

    let typeInput = document.createElement("input");
    typeInput.setAttribute("type", "hidden");
    typeInput.setAttribute("name", "type");
    typeInput.setAttribute("value", "comment");

    let commentBtn = document.createElement("button");
    commentBtn.innerHTML = "Comment"
    commentBtn.setAttribute("type", "submit")

    form.appendChild(topicLabel);
    form.appendChild(topic);
    form.appendChild(commentLabel);
    form.appendChild(comment);
    form.appendChild(typeInput);
    form.appendChild(commentBtn);
}

const type = params.get("type");

if (type === "login") logIn();
else if (type === "signup") signUp();
else comment();
