function createCads(cards) {
  cards.data.results.map(card => {
    function createCard() {
      const divCard = document.createElement("article");
      divCard.classList.add("cards");
      divCard.innerHTML = "";
       divCard.innerHTML = ` 
            <a href="${card.urls[0].url}" target="_black">
              <haeder>
                <img src="${card.thumbnail.path}.${card.thumbnail.extension}" class="card-img-top sombraCards" alt="thumbnail card">
              </header>
            </a> 
            <footer class="footerCards">
              <a href="${card.urls[0].url}" target="_black">
                <label class="cta-card">READ NOW</label>
                <label class="title">${card.title}</label>
              </a>
              <p class="author">
                <small>
                  ${card.creators.items.map(author => {        
                    if (author.role == "writer" ) {
                      return `${author.name}`
                    }
                  }).join('')}
                </small>
              </p>  
            </footer>`;
      return divCard;
    }
    comics.appendChild(createCard());
  });
}

function clearCards() {
  comics.innerHTML = "";
}