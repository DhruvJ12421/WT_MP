// Fetch data and load category cards
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('card-container');
    data.categories.forEach(category => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${category.name}</h3>`;
      card.onclick = () => {
        alert(`Redirecting to ${category.name} page...`);
      };
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading data:', error));
