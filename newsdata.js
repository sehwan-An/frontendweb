//api key
const api_key = "pub_69488c042c584e95264197ca3cb9ee325c365";
const url = "https://newsdata.io/api/1/latest";
// console.log(request);
// window.addEventListener("DOMContentLoaded", ()=> {
//     fetchNews();
// });

// async function fetchNews(){
//     const response = await fetch(request);
//     console.log(response, typeof response);
// }

//1.DOM 탐색
const newsForm = document.querySelector("#news_form");

newsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let query = document.querySelector("#keyword");
  if (query == "") {
    alert("검색어를 입력해야 합니다");
    query.focus();
    return;
  }
  // let search = document.querySelector("#keyword").value;

  fetchNews(query.value);
});

function fetchNews(keyword) {
  const req_url = `${url}?apikey=${api_key}&q=${query}`;
  const response = fetchNews(req_url);
  {
    console.log(response);
  }
  console.log(keyword, "를 입력했습니다.");
}
