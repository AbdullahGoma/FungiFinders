const cards = document.querySelectorAll(".mushroom-guide .card");

const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');

const noResultMessage = document.querySelector('.no-matches')

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
    let hasVisibleCards = false;
    
    cards.forEach((card) => {
      const season = card.querySelector("[data-season]").dataset.season;
      const edible = card.querySelector("[data-edible]").dataset.edible;

      //    const matchesSeason = currentFilters.season === season;
      //    const matchesEdible = currentFilters.edible === edible;

      //    if ((matchesEdible || currentFilters.edible === "all") && (matchesSeason || currentFilters.season === "all")) {
      //     card.hidden = false; // Remove hidden attribute
      //     hasVisibleCards = true;
      //    } else {
      //     card.hidden = true; // Add hidden attribute
      //    }

      // if (hasVisibleCards)
      //   noResultMessage.hidden = true;
      // else
      //   noResultMessage.hidden = false;

      const matchesSeason =
        currentFilters.season === "all" || currentFilters.season === season;
      const matchesEdible =
        currentFilters.edible === "all" || currentFilters.edible === edible;

      const isVisible = matchesSeason && matchesEdible;
      card.hidden = !isVisible;
      
      if (isVisible) hasVisibleCards = true;
    });
    noResultMessage.hidden = hasVisibleCards;
}