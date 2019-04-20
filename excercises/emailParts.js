// Return username and password.

function emailParts(email) {
    let username = [];
    let password = [];
    let lowerCase = email.toLowerCase();
    let newArray = lowerCase.split("@");
    username.push(newArray[0]);
    password.push(newArray[1]);
    return `Username: ${username}. Domain: ${password}.`;
    // return `Username: ${username.push(newArray[0])}. Domain: ${password.push(newArray[1])}.`; // Returns 2, why?
}

console.log(emailParts("EDUARDO@HERNANDEZ.COM"));

