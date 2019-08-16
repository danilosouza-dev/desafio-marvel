const API_URL = "https://gateway.marvel.com/v1/public/";
const PUBLIC_KEY = "ddfa6540e9809454422adbbc86404b98";
// const PRIVATE_KEY = "3a4a152ffc232222d3b3d87e64b3281fbd6ccb3d";
const HASH = "3b42cb401c6c9cdbeda467907bccf983";
const TS = "1565802859";
let offset = 0;

  fetch(`${API_URL}comics?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}&limit=10&offset=${offset}&orderBy=-onsaleDate&dateDescriptor=thisWeek`, {
    method: "GET"      
  })
  .then(response => response.json(), {
  })
  .then(cards => {
    createCads(cards);
   })
  .catch(err => console.log(err)
  )
