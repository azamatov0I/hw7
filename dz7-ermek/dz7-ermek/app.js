async function getNews() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const newsContainer = document.getElementById('news-container');
    
    data.forEach(item => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      
      const newsImage = document.createElement('img');
      newsImage.src = 'https://picsum.photos/300/200';
      
      const newsTitle = document.createElement('h2');
      newsTitle.textContent = item.title;
      
      const newsDescription = document.createElement('p');
      newsDescription.textContent = item.body;
      
      newsCard.appendChild(newsImage);
      newsCard.appendChild(newsTitle);
      newsCard.appendChild(newsDescription);
      
      newsContainer.appendChild(newsCard);
    });
  }
  
  getNews();
  
  
  