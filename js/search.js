const search = document.querySelector(".search_input");

search.addEventListener("input", function() {
  offset = 0;
const character = search.value;

  fetch(`${API_URL}characters?name=${character}&apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}&limit=100&offset=${offset}`, {
    method: "GET"    
  })
  .then(response => response.json(), {
  })
  .then(cards => {
    const idCharacter = cards.data.results[0].id

      fetch(`${API_URL}comics?characters=${idCharacter}&apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}&limit=10&offset=${offset}`, {
        method: "GET"      
      })
      .then(response => response.json(), {
      })
      .then(cards => {

        if (cards.data.results == 0) {
          return
        }        
        clearCards();        
        createCads(cards);    
      })
      .catch(err => console.log(err)
      )

const btnVerMais = document.querySelector(".btn-vermais");
btnVerMais.addEventListener("click", function() {
  offset = offset + 10;
  
  fetch(`${API_URL}comics?characters=${idCharacter}&apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}&limit=10&offset=${offset}`, {
    method: "GET"    
  })
  .then(response => response.json(), {
  })
  .then(cards => {
    clearCards();
    createCads(cards)
  })
  .catch(err => console.log(err)
  )
  });
})
.catch(err => console.log(err)
)
})

    
    
