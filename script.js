document.getElementById("blog-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
  
    if (title && content) {
      const post = document.createElement("div");
      post.classList.add("post");
      post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
      document.getElementById("blog-list").appendChild(post);
  
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
    }
  });
  