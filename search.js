
$(document).ready(function(){
    $("#searchbox").on("keyup", function() {
        var query = this.value.toLowerCase();

        $('.ut-accordion').each(function() {
            var section = $(this),
                header = section.prev('h3');

            section.find('.accordion-toggle').each(function() {
                var currentElement = $(this);

                if ( currentElement.text().toLowerCase().indexOf(query) !== -1 ) {
                    currentElement.show();
                } else {
                    currentElement.hide();
                }
            });

            if ( section.find('.accordion-toggle:visible').length === 0 ) {
              if ( header.text().toLowerCase().indexOf(query) === -1 ) {
                header.hide();
              } else {
                section.prev('h3').show();
                section.find('.accordion-toggle').filter(':hidden').show();
              }
            } else {
                if ( !header.is(':visible') ) {
                  section.prev('h3').show();
                }
            }
        });

    }); 
});
