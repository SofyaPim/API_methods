const postsListContainer = document.querySelector(".posts-list-container");

// fetch using XHR
function fetchUsingXHR(params) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data.json");
  xhr.responseType = "json";
  xhr.send();
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
      // console.log(xhr);
    } else {
      console.log("some error ocurred");
    }
  };
}

// fetch using Fetch Method

function fetchUsingFetchMethod() {
  const fetchRequest = fetch("./data.json", {
    method: "GET",
  });
  fetchRequest
  .then((response) => response.json())
  .then((result) => displayResults(result))
  .catch(e => console.log(e));
}
// fetch using Async Await

async function fetchUsingAsyncAwaitMethod(){
   const response = await fetch("./data.json", {
      method: "GET",
   });
   const result = await response.json();
   //  console.log('==============================================');
   //  console.log(result);
   //  console.log('================================================');
   displayResults(result);
   
}

// fetch using XHR and Async Await
function handlerMethod(method, url) {
   const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.send();
      xhr.onload= () => {
         if(xhr.status === 200){
            resolve(xhr.response)
         } else {
            reject(xhr.response)
         }
      }

   })
   return promise;
}
async function fetchUsingXHRAndAsyncAwaitMethod(){
   const response = await handlerMethod('GET', "./data.json");
   // console.log('==============================================');
   // console.log(response);
   // console.log('================================================');
   displayResults(response);
}

function displayResults(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (postItem) =>
        `
      <div class="post-item">
      <h3>${postItem.title}</h3>
      <p>${postItem.body}</p>
      </div>
      `
    )
    .join(" ");
}
// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetchUsingAsyncAwaitMethod();
fetchUsingXHRAndAsyncAwaitMethod();