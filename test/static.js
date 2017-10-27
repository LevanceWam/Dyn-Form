const form = require('../src/formTool.js');


const data = form.gen([
  { type: 'text', title: 'name'},
  { type: 'text', title: 'school'},
  { type: 'text', title: 'degree'},
  { type: 'text', title: 'grade'},
  { type: 'text', title: 'age'},n
]);

console.log(data);
