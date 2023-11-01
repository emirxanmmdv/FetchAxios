// let card = document.getElementById("card");
// function getdata() {
//   fetch("https://api.tvmaze.com/shows")
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((element) => {
//         card.innerHTML += `
//         <div class="card" style="width: 18rem;height:;" >
        
//             <img class="card-img-top" src="${element.image.medium}"
           
//             <div class="card-body">
//               <h5 style="font-size:20px;">${element.name}</h5>
//               <h6 style="font-size:15px;">${element.language}</h6>
//               <p class="card-text">imdb:${element.rating.average}</p>
//             </div>
//           </div>
//           `;
//       });
//     });
// }
// getdata();

async function GetAxios() {
    const response = await axios('https://api.tvmaze.com/shows')
    response.data.forEach(element => {
        card.innerHTML += `
        <div class="card" style="width: 18rem;height:;" >
        
            <img class="card-img-top" src="${element.image.medium}"
           
            <div class="card-body">
              <h5 style="font-size:20px;">${element.name}</h5>
              <h6 style="font-size:15px;">${element.language}</h6>
              <p class="card-text">imdb:${element.rating.average}</p>
            </div>
          </div>
          `;
        
    })
}
GetAxios()

