//api key
const newsdata_api = "pub_69488c042c584e95264197ca3cb9ee325c365";
const query = "pizza";
const url = "https://newsdata.io/api/1/latest";
const request = `${url}?apikey=${newsdata_api}&q=${query}`;
console.log(request);
// window.addEventListener("DOMContentLoaded", ()=> {
//     fetchNews();
// });

// async function fetchNews(){
//     const response = await fetch(request);
//     console.log(response, typeof response);
// }
