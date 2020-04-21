// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const myHeader = document.createElement('div');
    myHeader.classList.add('header');

    const myDate = document.createElement('span');
    myDate.classList.add('date');
    myDate.textContent = 'SMARCH 28, 2019';
    myHeader.appendChild(myDate);

    const myTitle = document.createElement('h1');
    myTitle.textContent = 'Lambda Times';
    myHeader.appendChild(myTitle);

    const myTemp = document.createElement('span');
    myTemp.classList.add('temp');
    myTemp.textContent = '98';
    myHeader.appendChild(myTemp);

    return myHeader;

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());