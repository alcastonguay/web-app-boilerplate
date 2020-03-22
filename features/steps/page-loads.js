const {Then, When} = require('cucumber');

When('I request the path {string}', requestPath);
Then('it has the response code {int}', checkCode);

function requestPath(path){
    return 'pending';
}

function checkCode(code){
    return 'pending';
}
