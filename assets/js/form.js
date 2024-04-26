const SubmitButton = document.getElementById('SubmitButton')

const myUsername = document.getElementById('username');
console.log(myUsername);
const myTitle = document.getElementById('Title');
console.log(myTitle);
const myContent = document.getElementById('Content')
console.log(myContent)


SubmitButton.addEventListener('click', function () {

    const username = myUsername.value;
    const title = myTitle.value;
    const content = myContent.value;

    if (!username || !title || !content)
        return;


  const Blog = {
    Username: myUsername, 
    Title: myTitle,
    Content: myContent,
  };

    let BlogsString = localStorage.getItem("Blogs");
    if (BlogsString === null) {
        BlogsString = "[]"
    }
  const Blogs = JSON.parse(BlogsString);
  Blogs.push(Blog);
  localStorage.setItem("Blogs", JSON.stringify(Blogs));


});


  

