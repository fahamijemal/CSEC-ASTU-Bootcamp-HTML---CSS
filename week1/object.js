const jsonString = `
[
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }
]
`;

const todos = JSON.parse(jsonString);

const titlesOnly = todos.map((todo) => ({ title: todo.title }));
console.log(titlesOnly);
todos.push({ userId: 1, id: 5, title: "new todo", completed: false });
console.log(todos);
