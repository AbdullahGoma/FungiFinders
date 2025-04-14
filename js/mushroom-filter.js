const cards = document.querySelectorAll(".mushroom-guide .card");

const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');

const currentFilters = {
    season: "all", 
    edible: "all"
}

// seasonalFilter.addEventListener('change', (event) => {
//     // console.log(event.target.value);
//     currentFilters.season = event.target.value;
// });

// edibleFilter.addEventListener('change', (event) => {
//     currentFilters.edible = event.target.value;
// });

seasonalFilter.addEventListener('change', updateFilter);
edibleFilter.addEventListener('change', updateFilter);

function updateFilter(e) {
    const filterType = e.target.name;
    currentFilters[filterType] = e.target.value;

    filterCards();
}

function filterCards() {
    cards.forEach((card) => {
       const season = card.querySelector("[data-season]").dataset.season; 
       const edible = card.querySelector("[data-edible]").dataset.edible; 

    //    const matchesSeason = currentFilters.season === season;
    //    const matchesEdible = currentFilters.edible === edible;

    //    if ((matchesEdible || currentFilters.edible === "all") && (matchesSeason || currentFilters.season === "all")) {
    //     card.hidden = false; // Remove hidden attribute
    //    } else {
    //     card.hidden = true; // Add hidden attribute
    //    }

    const matchesSeason =
      currentFilters.season === "all" || currentFilters.season === season;
    const matchesEdible =
      currentFilters.edible === "all" || currentFilters.edible === edible;

    card.hidden = !(matchesSeason && matchesEdible);
    });
}