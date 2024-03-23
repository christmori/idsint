const assert = require('assert');

const comments = ['This is a comment.', 'This is another comment.'];

assert.ok(comments.length > 0); // This assertion will pass because the comments array has a length greater than 0.

assert.ok(comments.length === 0); // This assertion will fail because the comments array does not have a length of 0.
