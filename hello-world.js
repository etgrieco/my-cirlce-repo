require('axios');

console.log('hello world');

axios.get('http://www.google.com').then(res => console.log(res));