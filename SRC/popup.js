document.addEventListener("DOMContentLoaded", async () => {
    const newsList = document.getElementById("news-list");
    const categorySelect = document.getElementById("category");
  
    categorySelect.addEventListener("change", async () => {
      const category = categorySelect.value;
  
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=ed2aa0a0e3c4480aabed2ebeabcf3573`
        );
        const data = await response.json();
  
        if (data.articles) {
          newsList.innerHTML = ""; // Clear previous list items
  
          data.articles.forEach((article) => {
            const listItem = document.createElement("li");
            const title = document.createElement("a");
            title.textContent = article.title;
            title.href = article.url;
            title.target = "_blank";
            listItem.appendChild(title);
            newsList.appendChild(listItem);
          });
        } else {
          newsList.textContent = "No articles found.";
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        newsList.textContent = "Error fetching news.";
      }
    });
  });
  