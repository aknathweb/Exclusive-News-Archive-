// async function for load category data from api start
async function load_news_category() {
    const url = "https://openapi.programming-hero.com/api/news/categories";
    try {
        const res = await fetch(url);
        const data = await res.json();
        show_news_category(data.data.news_category);
    } catch (error) {
        console.log(error);
    }
}
// async function for load category data from api end

// async function for load category news data from api start
async function load_category_news(category_id) {
    loading(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const Information = data.data;
        Information.sort((a, b) => b.total_view - a.total_view);
        show_news(Information);
    } catch (error) {
        console.log(error);
    }
}
// async function for load category news data from api end

//function for show categories start
function show_news_category(datas) {
    const news_category_location = document.getElementById('news_category');
    for (const data of datas) {

        const new_category_button = document.createElement("div");
        new_category_button.innerHTML = `
<button type="button" class="btn btn-outline-secondary m-2" onclick="load_category_news('${data.category_id}')">${data.category_name}</button>
`;
        news_category_location.appendChild(new_category_button);
    }
}
//function for show categories end

//function for show categories all news start
function show_news(news_collection) {
    const category_news_item = document.getElementById('category_items');
    category_news_item.innerText = `${news_collection.length == 0 ? "No" : news_collection.length} items found`
    const news_elements_location = document.getElementById('news_elements');
    news_elements_location.innerHTML = '';
    for (const news of news_collection) {
        const news_element = document.createElement("div");
        news_element.classList.add("row", "p-3", "bg-white", "rounded", "my-3", "shadow-sm");
        news_element.innerHTML = `
<div class="col"><img src=${news.thumbnail_url} class="img-fluid w-100 w-md-75 mx-auto p-1 p-md-3 my-3 my-md-0" alt=" ...">
</div>
<div class="col-md-8 col-12  my-auto">
    <h3>${news.title}</h3>

    <div class="col overflow-hidden my-3 h-100">
        <p>
            ${news.details.length > 500 ? news.details.slice(0, 500) + "..." : news.details}
        </p>
    </div>

    <div>
        <div class="d-block d-md-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
                <img src=${news.author.img} class="img-fluid rounded-circle" style="height:3rem; width:3rem ;" alt="...">
                <strong>${news.author.name == null ? "Name Not Found" : news.author.name}</strong>
            </div>
            <div class="d-flex align-items-center gap-2">
                <span><i class="fa-regular fa-eye"></i></span>
                <strong>${news.total_view == null ? "View Not Found" : news.total_view}</strong>
            </div>
            <div class="d-flex align-items-center gap-2">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star-half-stroke"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
            </div>
            <button type="button" class="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target=#a${news._id}><i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
</div>


<div class="modal fade" id=a${news._id} tabindex="-1" aria-labelledby=exampleModalLabel aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title" id=exampleModalLabel>${news.title}</h5>
                </div>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div class="modal-body">
                <img src=${news.image_url} class="img-fluid w-100" alt=" ...">
                <div class="d-flex justify-content-between align-items-center gap-2 py-2">


                    <div>
                        <strong>Author:</strong>
                        <br>
                        <img src=${news.author.img} class="img-fluid rounded" style="width:2rem ;">
                        <p><strong>Name :</strong>${news.author.name == null ? "Name Not Found" : news.author.name}</p>
                        <small> <strong>Published Date:</strong> ${news.author.published_date} </small>
                    </div>
                    <div class="fw-bolder text-warning fs-4 p-5">
                        <p>${news.rating.number}</p>
                        <p>${news.rating.badge}</p>
                    </div>

                </div>
                <p>${news.details}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
`;
        news_elements_location.appendChild(news_element);
    }
    loading(false);
}
//function for show categories all news end

//function call for show all categories start
load_news_category();
//function call for show all categories end

//function call for show default first categories news start
load_category_news("01")
//function call for show default first categories news end

// loading spinner start
function loading(condition) {
    if (!condition)
        document.getElementById('spinner-load').classList.add('d-none');
    else
        document.getElementById('spinner-load').classList.remove('d-none');
}
// loading spinner end