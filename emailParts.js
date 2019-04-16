// Return username and password.

function emailParts(email) {
    let username = [];
    let password = [];
    let lowerCase = email.toLowerCase();
    let newArray = email.split("@");
    username.push(newArray[0]);
    password.push(newArray[1]);
    return `Username: ${username}. Domain: ${password}.`;
}
