const speakersArry = [
  {
    photo: 'images/macron.jpeg',
    name: 'Macron',
    job: 'France Prisedant',
    says: 'One of Ethiopia national wonders is its famous rock-hewn churches of Lalibela.',
  },
  {
    photo: 'images/bob.jpeg',
    name: 'BOB',
    job: 'Musician',
    says: 'One of Ethiopia’s national wonders is its famous rock-hewn churches of Lalibela.',
  },
  {
    photo: 'images/mandela.jpeg',
    name: 'Mndela',
    job: 'S.A Prisedant',
    says: 'One of Ethiopia’s national wonders is its famous rock-hewn churches of Lalibela.',
  },
  {
    photo: 'images/sayat.jpeg',
    name: 'Sayat',
    job: 'Model',
    says: 'One of Ethiopia’s national wonders is its famous rock-hewn churches of Lalibela.',
  },
  {
    photo: 'images/rita.jpeg',
    name: 'Rita',
    job: 'Musician',
    says: 'One of Ethiopia’s national wonders is its famous rock-hewn churches of Lalibela.',
  },
  {
    photo: 'images/nati.jpeg',
    name: 'Nati',
    job: 'Musician',
    says: 'One of Ethiopia’s national wonders is its famous rock-hewn churches of Lalibela.',
  },
];
const speakersContainer = document.querySelector('.speakers-container');

const addSpeaker = () => {
  for (let i = 0; i < speakersArry.length; i += 1) {
    const speaker = document.createElement('div');
    speaker.innerHTML = `<div  class='speakers-container-item'><img class='speaker-image' src='${speakersArry[i].photo}' alt=''>
    <div class='separetor'>
        <p >${speakersArry[i].name}</p>
        <p class='speaker-job'>${speakersArry[i].job}</p>
        <p class='speaker-says'>${speakersArry[i].says}</p>
    </div>`;
    speakersContainer.appendChild(speaker);
    if (i >= 2) {
      speaker.classList.add('more');
    }
  }
};

window.addEventListener('load', addSpeaker);
