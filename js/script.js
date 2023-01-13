const speaker = [
  {
    id: '1',
    name: 'Lorem Ipsum',
    namedesk: 'Tonic',
    shortDescription: 'A daily selection of privately personalized',
    shortDescriptiondesk: 'A daily selection of privately personalized reads',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s.`,
    longDescriptiondesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'img/speaker_01.png',
    image1: 'img/speaker_03.png',
  },
  {
    id: '2',
    name: 'Lorem Ipsum',
    namedesk: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized',
    shortDescriptiondesk: 'Experimental content creation feature that allows 360 ',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s.`,
    longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s.`,
    image: 'img/speaker_02.png',
    image1: 'img/speaker_04.png',
  },
  {
    id: '3',
    name: 'Lorem Ipsum',
    namedesk: 'Facebook 360',
    shortDescription: 'A daily selection of privately personalized',
    shortDescriptiondesk: 'Exploring the future of media in Facebooks 360 photos ',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s.`,
    longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s.`,
    image: 'img/speaker_05.png',
    image1: 'img/speaker_06.png',
  },
];

const main = document.querySelector('.my-menu');
const dynamicWork = document.querySelector('.works');
function openMain() {
  main.style.visibility = 'visible';
}

function closeMain() {
  main.style.visibility = 'hidden';
}
openMain();
closeMain();
for (let i = 0; i < speaker.length; i += 1) {
  let visibleImg = 'show';
  if (i > 0) {
    visibleImg = 'hide';
  }
  dynamicWork.innerHTML += `<div id  class="featured-speakers-row">
          <div class="featured-speakers-column">
            <img src=${speaker[i].image} class="featured-speakers-image"></img>
            <div class="featured-speakers-info">
              <div class="featured-speakers-name">${speaker[i].name}</div>
              <div class="featured-speakers-description">${speaker[i].shortDescription}</div>
              <div class="featured-speakers-line"></div>
              <div class="featured-speakers-year">${speaker[i].longDescription}</div>
            </div>
            </div>
          <div class="featured-speakers-column1">
          <img src=${speaker[i].image1} class="featured-speakers-image1"></img>
            <div class="featured-speakers-info">
              <div class="featured-speakers-name">${speaker[i].name}</div>
              <div class="featured-speakers-description">${speaker[i].shortDescription}</div>
              <div class="featured-speakers-line"></div>
              <div class="featured-speakers-year">${speaker[i].longDescription}</div>
            </div>
          </div>
          
          <div class="${visibleImg} speakers featured-speakers-column-m">
          <img src=${speaker[i].image} class="featured-speakers-image"></img>
            <div class="featured-speakers-info">
              <div class="featured-speakers-name">${speaker[i].name}</div>
              <div class="featured-speakers-description">${speaker[i].shortDescription}</div>
              <div class="featured-speakers-line"></div>
              <div class="featured-speakers-year">${speaker[i].shortDescriptiondesk}</div>
            </div>
        </div>
             

  `;
}
const moreBtn = document.querySelector('.btn-more');
const perImg = document.querySelectorAll('.speakers');
const lessBtn = document.querySelector('.btn-less');
moreBtn.addEventListener('click', () => {
  perImg.forEach((eachspeaker) => {
    eachspeaker.classList.remove('hide');
    moreBtn.classList.add('hide');
    lessBtn.classList.remove('hide');
  });
});
lessBtn.addEventListener('click', () => {
  perImg.forEach((eachspeaker, index) => {
    if (index > 0) {
      eachspeaker.classList.add('hide');
      lessBtn.classList.add('hide');
      moreBtn.classList.remove('hide');
    }
  });
});