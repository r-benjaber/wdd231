const params = new URLSearchParams(window.location.search);

const username = params.get("username");
const email = params.get("email");
const type = params.get("type");

const heading = document.querySelector("#thankyouHeading");
const message = document.querySelector("#thankyou");

if (type === "login") {
    heading.innerHTML = `Welcome ${username}!!`;
    message.textContent = "Enjoy your visit to the page."
}
else if (type === "signup") {
    heading.innerHTML = `Thank you for joining ${username}!!`;
    message.innerHTML = `We hope you feel comfortable in our community. <br> There's one step left before you continue to use the page.
     We need to confirm your email to ensure you subscribed correctly. <br> We've sent a confirmation email to ${email}. Once you confirm it, you can enjoy the page!`;
}
else if (type === "comment") {
    heading.innerHTML = `Thank you ${username}!!`;
    message.textContent = "We've submitted your comment..";
}
else {
    heading.textContent = "Oops...";
    message.textContent = "It looks like something went wrong, try going back to the community page."
}