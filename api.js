const postsCont = document.querySelector("#posts");

const users = [
  "Cynthia",
  "Frankline",
  "Precious",
  "David",
  "Kelvine",
  "Bright",
  "Kamso",
  "Jude",
  "Micheal",
  "Success",
];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.map(function (post) {
      const postDiv = document.createElement("div");
      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p>Written by: ${users[post.userId - 1]}</p>
        `;
      postsCont.appendChild(postDiv);
    });
  });
