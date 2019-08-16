const btnVerMais = document.querySelector(".btn-vermais");
const comics = document.querySelector(".comics"); 
btnVerMais.addEventListener("click", function() {
 event.preventDefault();
  offset = offset + 10;
  fetch(`${API_URL}comics?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}&limit=10&offset=${offset}`, {
    method: "GET"    
  })
  .then(response => response.json(), {
   })
   .then(cards => {
      comics.innerHTML = "";
      createCads(cards)
    })
    .catch(err => console.log(err)
    )
  });