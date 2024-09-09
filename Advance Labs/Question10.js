/*. Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in
the comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.*/

import fetch from 'node-fetch'; // Required for Node.js environment

async function fetchURLData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}
// Test the promise-based function
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Promise-based:', data))
    .catch(error => console.error('Promise-based Error:', error.message));

// Test the async/await function
(async () => {
    try {
        const data = await fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Async/Await:', data);
    } catch (error) {
        console.error('Async/Await Error:', error.message);
    }
})();
// Test the promise-based function
fetchURLData('https://invalid.url')
    .then(data => console.log('Promise-based:', data))
    .catch(error => console.error('Promise-based Error:', error.message));

// Test the async/await function
(async () => {
    try {
        const data = await fetchURLData('https://invalid.url');
        console.log('Async/Await:', data);
    } catch (error) {
        console.error('Async/Await Error:', error.message);
    }
})();
