const blogs = [{
    id: 1,
    question: "Difference between var let and const",
    answer: "var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope. But while var variables are initialized with undefined , let and const variables are not initialized.",
    author: {
        name: "Anik",
        date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
    }
},
{
    id: 2,
    question: "Difference Between Regular Functions and Arrow Functions",
    answer: " Regular functions are constructible, they can be called using the new keyword. However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword",
    author: {
        name: "Anik",
        date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
    }
},
{
    id: 3,
    question: "Difference between map filter and foreach",
    answer: " The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.",
    author: {
        name: "Anik",
        date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
    }
},
{
    id: 4,
    question: "Why do we use template string in JavaScript?",
    answer: "Template strings are a powerful feature of modern JavaScript released in ES6. It lets us insert/interpolate variables and expressions into strings without needing to concatenate like in older versions of JavaScript. It allows us to create strings that are complex and contain dynamic elements",
    author: {
        name: "Anik",
        date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
    }
},
];
// crate blogs dynamicaly start
const blog_section = document.getElementById('blogs');
blogs.forEach(item => {
const blog = document.createElement("div");
blog.classList.add("my-2", "p-3", "bg-white", "shedow-lg", "rounded")
blog.innerHTML = `
            <h1>${item.question}</h1>
            <small>By <strong>${item.author.name}</strong></small>
            <br>
            <small>${item.author.date}</small>
            <p class="my-3">${item.answer}</p>
            `;
blog_section.appendChild(blog);
});

// crate blogs dynamicaly end