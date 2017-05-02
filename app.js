$(document)
    .ready(function () {
        $('#todo')
            .click(function () {
                $('.app, .web').show('slow');
            });
        $('#app').click(function () {
            $('.app').show('slow');
            $('.web').hide('slow');
        });
        $('#web').click(function () {
            $('.web').show('slow');
            $('.app').hide('slow');
        });
    });