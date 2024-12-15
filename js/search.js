const dropdown = document.getElementById('dropdown');
const searchInput = document.getElementById('search-input');
const clearIcon = document.querySelector('.clear-icon');

clearIcon.style.display = 'none';

function filterResults() {
    const query = searchInput.value.toLowerCase();
    dropdown.innerHTML = '';

    if (query) {
        clearIcon.style.display = 'block';
        const results = [
            { text: query, label: 'in Experiences', url: `https://www.roblox.com/discover/?Keyword=${query}`, icon: 'experiences.png', class: 'experience-item' },
            { text: query, label: 'in People', url: `https://www.roblox.com/search/users?keyword=${query}`, icon: 'people.png', class: 'people-item' },
            { text: query, label: 'in Groups', url: `https://www.roblox.com/search/groups?keyword=${query}`, icon: 'groups.png', class: 'groups-item' },
            { text: query, label: 'in Marketplace', url: `https://www.roblox.com/catalog?CatalogContext=1&Keyword=${query}`, icon: 'marketplace.png', class: 'marketplace-item' }
        ];

        results.forEach(result => {
            const div = document.createElement('div');
            div.className = `dropdown-item ${result.class}`;
            div.innerHTML = `<img src="images/${result.icon}" class="dropdown-icon"> <span class="search-text">${result.text}</span> <span>${result.label}</span>`;

            div.onclick = () => {
                window.location.href = result.url;
            };
            dropdown.appendChild(div);
        });

        dropdown.style.display = 'block';
    } else {
        clearIcon.style.display = 'none';
        dropdown.style.display = 'none';
    }
}

searchInput.addEventListener('focus', () => {
    if (searchInput.value) {
        dropdown.style.display = 'block';
        clearIcon.style.display = 'block';
    }
});

window.onclick = function(event) {
    if (!event.target.matches('#search-input') && !event.target.closest('.search-container')) {
        dropdown.style.display = 'none';
    }
};

function clearSearch() {
    searchInput.value = '';
    dropdown.innerHTML = '';
    dropdown.style.display = 'none';
    clearIcon.style.display = 'none';
}

clearIcon.onclick = clearSearch;