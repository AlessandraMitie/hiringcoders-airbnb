//definir variavel com a api
const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const local = fetch(url)
  .then(response => response.json())
  .then(data => {
      
      for(const hotel of data){
          console.log(hotel.name)
  
      }
  });

