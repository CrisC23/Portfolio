(document).ready(function(){
  const zindex = 10;
  
  ("div.card").click(function (e) {
    e.preventDefault();

    const isShowing = false;

    if ((this).hasClass("show")) {
      isShowing = true
    }
    if (("div.cards").hasClass("showing")) {
      // a card is already in view
      ("div.card.show")
        .removeClass("show");

      elseif (isShowing) {
        // this card was showing - reset the grid
        ("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        (this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      ("div.cards")
        .addClass("showing");
      (this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});

function fade($ele) {
  $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
      var $next = $(this).next('.quote');
      fade($next.length > 0 ? $next : $(this).parent().children().first());
 });
}
fade(('.quoteLoop > .quote').first());