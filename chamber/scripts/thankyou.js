const params = new URLSearchParams(window.location.search);

const firstName = params.get('firstName');
const lastName = params.get('lastName');
const orgTitle = params.get('orgTitle');
const email = params.get('email');
const orgName = params.get('orgName');
const level = params.get('level');
const orgDescription = params.get('orgDescription');

const joiningInfo = document.querySelector('#joiningInfo');

joiningInfo.innerHTML = `Congratulation ${firstName} ${lastName}, you just made a apply request to the Villa Elisas's Chamber of Commerce for the company ${orgName}. <br>
In the next 48hs we will be sending more information to you and beging the procces to be fully a member of ${level} level. <br>
Thank you again Mr/Ms. ${orgTitle}, we will contact you soon through the email ${email}. If you think some of this data isn't right, we can change it later in our conversations.`;