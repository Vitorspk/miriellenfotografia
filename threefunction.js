$(document).ready(function () {

  (function (b) {
    var o = document.getElementsByTagName(b),
      a = Array.prototype;
    a.map.call(o, function (m) {
      m.draggable = false;
      m.style.pointerEvents = 'none';
    });
  }('img'));

  var createCopyrightMenu = function createCopyrightMenu(e) {
    e.preventDefault();
    $("<div class='copyright-tooltip'>&copy; " + $('.mh__logo img').attr('alt') + "</div>")
      .appendTo("body").css({
        position: 'absolute',
        top: e.pageY + "px",
        left: e.pageX + "px",
        zIndex: 5,
        display: 'inline-block',
        padding: 10,
        fontSize: '1rem',
        color: '#fafafa',
        backgroundColor: 'rgba(0, 0, 0, .76)',
        borderRadius: 2
      });
  }

  var removeCopyrightMenu = function removeCopyrightMenu() {
    $("div.copyright-tooltip").remove();
  }

  $(document).bind("contextmenu", createCopyrightMenu);
  $(document).bind("mousedown", removeCopyrightMenu);
});