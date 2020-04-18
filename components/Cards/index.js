// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function buildCard(article){
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    const authorImage = document.createElement('img');
    authorImage.src = article.authorPhoto;
    imageContainer.appendChild(authorImage);
    author.appendChild(imageContainer);

    const authorName = document.createElement('span');
    authorName.textContent = article.authorName;
    author.appendChild(authorName);

    card.appendChild(author);

    return card;




    
}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response) => {
        
        for (let article in response.data.articles){
            
            response.data.articles[article].map((item)=>{
                console.log(item);
                const newArticle = document.querySelector('.cards-container');
                newArticle.appendChild(buildCard(item));
            })
        }
        
    })
    .catch((err) => { // Somthing bad happen
        console.log(err);
    })
