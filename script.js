(function($) { 
    "use strict";
  
    // Page cursors
    document.body.addEventListener("mousemove", function(event) {
      const cursorElements = [cursor, cursor2, cursor3];
      cursorElements.forEach(cursor => {
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
      });
    });
  
    const cursor = document.getElementById("cursor"),
          cursor2 = document.getElementById("cursor2"),
          cursor3 = document.getElementById("cursor3");
  
    function addHoverClass() {
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
    }
  
    function removeHoverClass() {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    }
  
    removeHoverClass();
  
    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach(target => {
      target.addEventListener("mouseover", addHoverClass);
      target.addEventListener("mouseout", removeHoverClass);
    });
  
    let pos = 0;
    window.setInterval(function() {
      pos++;
      document.querySelector('.moving-image').style.backgroundPosition = pos + "px 0px";
    }, 18);
  
    $(document).ready(function() {
      const caseStudyNames = $('.case-study-name');
      const caseStudyImages = $('.case-study-images li');
  
      caseStudyNames.each(function(index) {
        $(this).on('mouseenter', function() {
          $('.case-study-name.active').removeClass('active');
          caseStudyImages.removeClass("show");
          caseStudyImages.eq(index).addClass("show");
          $(this).addClass('active');
        });
      });
  
      // Trigger the first case study by default
      caseStudyNames.first().trigger('mouseenter');
    });
  })(jQuery);
  