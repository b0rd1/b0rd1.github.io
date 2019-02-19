var works = [{
    id: 1,
    video: 'cacciatrici.mp4',
    image: 'cacciatrici.png',
    category: 'category-1',
    title: 'Cacciatrici del Reale',
    description: 'www.cacciatricidelreale.it',
    modal: 'modalId1'
  },
  {
    id: 11,
    video: 'bookeria.mp4',
    image: 'bookeria.jpg',
    category: 'category-1',
    title: 'La Bookeria',
    description: 'www.labookeria.it',
    modal: 'modalId11'
  }, {
    id: 8,
    video: 'visual_sport.webm',
    image: 'visual_sport.png',
    category: 'category-2',
    title: 'Visual Sport',
    description: 'Gestionale Giocatori di Basket',
    modal: 'modalId8'
  }, {
    id: 12,
    video: 'shiatsu.webm',
    image: 'shiatsu.jpg',
    category: 'category-1',
    title: 'Shiatsu AOI',
    description: 'www.shiatsuaoi.it',
    modal: 'modalId12'
  }, {
    id: 4,
    video: 'focus.mp4',
    image: 'focus.png',
    category: 'category-3',
    title: 'Focus List Replica',
    description: 'Replica del sito focuslist',
    modal: 'modalId4'
  }, {
    id: 3,
    video: 'moviedb.mp4',
    image: 'moviedb.png',
    category: 'category-2',
    title: 'The Movie DB Replica',
    description: 'Utilizzo API The Movie DB',
    modal: 'modalId3'
  }, {
    id: 10,
    video: 'app_book.mp4',
    image: 'app_book.jpg',
    category: 'category-2',
    title: 'Web App La Bokeria',
    description: 'Companion App <br>de "La Bokeria"',
    modal: 'modalId10'
  }, {
    id: 2,
    video: 'gallery.mp4',
    image: 'gallery.png',
    category: 'category-2',
    title: 'jQuery Gallery',
    description: 'Semplice Galleria in jquery',
    modal: 'modalId2'
  }, {
    id: 5,
    video: 'giallozafferano.mp4',
    image: 'giallozafferano.png',
    category: 'category-3',
    title: 'Giallo Zafferano Replica',
    description: 'Replica del sito <br> giallozafferano',
    modal: 'modalId5'
  }, {
    id: 6,
    video: 'hubspot.mp4',
    image: 'hubspot.png',
    category: 'category-3',
    title: 'Hub Spot Replica',
    description: 'Replica del sito hubspot',
    modal: 'modalId6'
  }, {
    id: 7,
    video: 'teambit.mp4',
    image: 'teambit.png',
    category: 'category-3',
    title: 'Team Bit Replica',
    description: 'Replica del sito teambit',
    modal: 'modalId7'
  }, {
    id: 9,
    video: 'whatsapp.webm',
    image: 'whatsapp.png',
    category: 'category-2',
    title: 'Whatsapp Web Replica',
    description: 'Replica di alcune funzionalità<br>di Whatsapp Web',
    modal: 'modalId9'
  }
];

for (var i = 0; i < works.length; i++) {

  var media = works[i];
  var id = media.id;
  var video = media.video;
  var image = media.image;
  var category = media.category;
  var title = media.title;
  var description = media.description;
  var modalId = media.modal;

  $('.portfolio-list').append(`
    <div data-toggle="modal" data-target="#` + modalId + `" div class="col-12 col-md-4 col-lg-3 mix ` + category + `" data-src="images/work/` + video + `" data-id="` + id + `">
      <article class="portfolio-list-items">
        <div class="portfolio-list-img">
          <img src="images/work/` + image + `">
        </div>
        <div class="portfolio-list-mask">
          <h6>` + title + `</h6>
          <p>` + description + `</p>
        </div>
      </article>
    </div>

    <div class="modal fade" id="` + modalId + `" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <video style="width: 100%" src="images/work/` + video + `" muted="muted" autoplay="autoplay"></video>
          </div>
        </div>
      </div>
    </div>
    `)

}