function fetchPromoData() {
    return [
        {
            id: 1,
            image: 'https://fileinfo.com/img/ss/xl/jpg_44-2.jpg',
            title: 'Promo Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: '#',
            buttonText: 'CTA #1'
        },
        {
            id: 2,
            image: 'https://fileinfo.com/img/ss/xl/jpg_44-2.jpg',
            title: 'Promo Title 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: '#',
            buttonText: 'CTA #2'
        },
        {
            id: 3,
            image: 'https://fileinfo.com/img/ss/xl/jpg_44-2.jpg',
            title: 'Promo Title 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: '#',
            buttonText: 'CTA #3'
        }
    ];
}

function renderPromoTiles(promoTilesData) {
    const $promoSection = $('#promo-tiles-section');
    $promoSection.empty(); 

    promoTilesData.forEach(promo => {
        const promoTile = `
            <div id="${promo.id}" class="col-12 promo-tile d-flex align-items-center mb-4">
                <div class="promo-image">
                    <img src="${promo.image}" alt="${promo.title}" class="img-fluid">
                </div>
                <div class="promo-content ml-4">
                    <h3></h3>
                    <p>${promo.title}: ${promo.description}</p>
                    <a href="#" class="btn btn-link" data-toggle="modal" data-target="#promoModal" data-description="${promo.description}">More information</a>
                    <a href="${promo.link}" class="btn btn-danger" data-promo-tile-id="${promo.id}">${promo.buttonText}</a>
                </div>
            </div>
        `;
        $promoSection.append(promoTile);
    });

    $('.promo-tile a[data-toggle="modal"]').on('click', function(event) {
        event.preventDefault();
        const description = $(this).data('description');
        $('#promoModal .modal-body').text(description);
    });
}

$(document).ready(function() {
    const promoTilesData = fetchPromoData();
    renderPromoTiles(promoTilesData);

    function movePromoTileToTop(promoTileId) {
        var $promoTile = $('#' + promoTileId);
        $promoTile.prependTo('#promo-tiles-section');
    }

    $('#promo-tiles-section').on('click', '.btn-danger', function() {
        var promoTileId = $(this).data('promo-tile-id');
        movePromoTileToTop(promoTileId);
    });
});

