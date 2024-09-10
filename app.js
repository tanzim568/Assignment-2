fetch(
  `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=`
)
  .then((res) => res.json())
  .then((data) => {

    displaydata(data);
  });

document.getElementById("btn").addEventListener("click", (event) => {
  const playerName = document.getElementById("meal-input").value;
  mealContainer.innerHTML = "";
  // console.log(mealName);
  //search by player name api inserted
  fetch(
    `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`
  )
    .then((res) => res.json())
    .then((data) => {

      displaydata(data);
    })
    .catch((err) => {
      console.log();
    });
});

const mealContainer = document.getElementById("meal-list");
const displaydata = (meal) => {
  document.getElementById("meal-input").value = "";

  // const {idMeal}=meal

  // const {idMeal}
  // console.log(meal);
  // for (values in meal) {
  //   console.log(values)
  // }

  // meal.map
  //meal object iterate kore
  for (let key in meal) {
    // console.log(key);
    // console.log(meal[key])  //values
    if (meal[key] == null) {
      const div = document.createElement("div");
      div.classList.add("err");

      div.innerHTML = `
       <h1  border border-primary">No Player Found</h1>
       <p  border border-primary">Try Again</p>`;
      mealContainer.appendChild(div);
    } else
      {
      // console.log(meal[key])
      meal[key].forEach((meal) => {
        // console.log(meal.idPlayer);
        //object can be found here
        // let db = "https://www.facebook.com/El-Fardou-Ben-Mohamed-1490981157814031/"
        //                   www.facebook.com/El-Fardou-Ben-Mohamed-1490981157814031/
        let db=meal.strFacebook
        const div = document.createElement("div");
        div.classList.add("meal-count");
        // let fdb = ;
//         www.facebook.com/El-Fardou-Ben-Mohamed-1490981157814031/
//  "http://www.facebook.com/El-Fardou-Ben-Mohamed-1490981157814031/";

        http: div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${meal.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Name :${meal.strPlayer}</h5>
        <p class="card-text">Team :${meal.strTeam}</p>
        <p class="card-text">Nationality :${meal.strNationality}</p>
        <p class="card-text">Sports :${meal.strSport}</p>
        <p class="card-text">Status :${meal.strStatus}</p>
        <p class="card-text icon">  
        <a href="http://${meal.strFacebook}" target="_blank" class="card-text"><i class="fa-brands fa-facebook"></i></a>
      <a href="http://${meal.strTwitter}" target="_blank" class="card-text"><i class="fa-brands fa-twitter"></i></a>
      <a href="http://${meal.strInstagram}" target="_blank" class="card-text "><i class="fa-brands fa-instagram"></i></a>
    </p> 
    <button type="button" class="btn btn-primary" onclick="detailModal(${meal.idPlayer})" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
    <button type="button" class="btn btn-primary" onclick="handlecart('${meal.strPlayer}')">Add to group</button>
  </div>
</div>`;
        console.log(meal.strFacebook)
        
        mealContainer.appendChild(div);
      });
    }
  }
};


const handlecart = (name) => {
  // console.log(name); // For debugging, remove it if unnecessary
  
  const p = document.createElement("p");
  p.classList.add("cart-inner-name");

  p.innerText = `Player Name: ${name}`;

  // Ensure the correct cart section ID is referenced
  const cart = document.getElementById("cart-section");
  
  let cartCount = cart.querySelector("h3 span");
  // if()
  if (cartCount.textContent >= 11)
    {
      alert("Can't add more than 11 players ")
    }
    else {
      // console.log(cartCount.textContent);
      cart.appendChild(p);
      cartCount.textContent = parseInt(cartCount.textContent) + 1;
  
  }
  // Update the cart counter
  

};



const modal = document.getElementById("modal-part");
const detailModal = (id) => {
 
  //fetching from id lookup

fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
  .then((res) => res.json())
  .then((data) => {

    for (key in data) {
      // console.log(data[key])
      data[key].forEach(player => {
       
        const div = document.createElement("div")
        div.classList.add("individual-player")

        div.innerHTML = `
       <div class="card border-0 " style="width: 18rem;">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title ">Name :${player.strPlayer}</h5>
          <p class="card-text">Team :${player.strTeam}</p>
          <p class="card-text">Nationality :${player.strNationality}</p>
          <p class="card-text">Sports :${player.strSport}</p>
          <p class="card-text">Salary :${player.strWage}</p>
          
     
       
        </div>
      </div>
        `;
        modal.appendChild(div)
        
      });
    }
 
  });

modal.innerHTML=""

}

const modalClosed = () => {
  modal.innerHTML=""
};

// let count = 0;
