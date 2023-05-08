// Get the modal
var modal = document.getElementById("modal");

// When the user clicks the button, open the modal 
function openModal(id) {
  modal.style.display = "block";
  pokeApi.getPokemonById(id).then(pokemon => createModal(pokemon))
}

function closeModal() {
    modal.style.display = "none";
    modal.innerHTML = '';
}

function createModal(pokemon) {
    modal.innerHTML = `
        
    <!-- Modal content -->
    <div class="modal-content ${pokemon.type}">
      <div class="modal-header ${pokemon.type}">
        <div class="header">
          <span class="close" onclick="closeModal()"> <i class="bi bi-arrow-left-short"></i> </span>
          <h2 class="name"> ${pokemon.name} </h2>
          <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
          </ol>
          <div class="pokemon-img">
              <img src="${pokemon.photo}" alt="${pokemon.name}">
          </div>
        </div>
      </div>
      <div class="modal-body">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#base_status">Base Stats</a></li>
          </ul>
        </nav>
        <main> 
          <div id="about">
            <h3> About </h3>
            <ul>
              <li> <label> Height </label> <div> ${pokemon.height} cm </div></li>
              <li> <label> Weight </label> <div> ${pokemon.weight} kg </div></li>
              <li> <label> Abilities </label> <div class="capitalize"> ${pokemon.abilities} </div></li>
            </ul>
          </div>
          <div id="stats">
            <h3> Stats </h3>
            <ul>
              ${pokemon.stats.map(stat => `
                <li class="stat"> <label>${stat.name}</label> 
                ${stat.value}
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${stat.value}" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar ${pokemon.type}" style="width: ${stat.value}%"></div>
                </div>
                </li>`).join('')}
            </ul>
          </div>
        </main>
      </div>
    </div>
    `;
}