articles = document.querySelector(".forum__container");
preloader = document.querySelector(".preloader");

window.addEventListener("load", function load() {

    let random = Math.floor(Math.random() * (2));
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status.toString());
            }
        })
        .then((articles) => {
            let start_index = Math.floor(Math.random() * (articles.length - 30));
            articles = articles.slice(start_index, start_index + 30);
            articles.forEach(function (article) {
                if (article.id % 2 === random) {
                    insertArticle(article);
                }
            });
            preloader.style.display = "none";
        }).catch((e) => {
        insertError(e.message)
    });
});

function insertError(message) {
    let errorText = "Что-то пошло не так";
    if (message === "500" || message === "404") {
        errorText = "Сеть перестала быть доступна и запрос не был выполнен";
    }
    document.querySelector(".forum__error").textContent = errorText;
}

function insertArticle(article) {
    articles.insertAdjacentHTML("beforeend",
        `<div class="forum__text">
                <div class="forum__text-title">${article.title}</div>
                <div class="forum__text-body">${article.body}</div>   
                <div class="forum__text-author">user${article.userId}</div>      
              </div>`
    );
}


