$(function() {
  let $list, $newItemForm, $newItemButton;
  let item = '';
  $list = $('ul');
  $newItemForm = $('#newItemForm');
  $newItemButton = $('#newItemButton');

  $('li').hide().each(function(index) {
    $(this).delay(500 * index).fadeIn(1500);
  });

  function updateCount() {
    let items = $('li[class!=complete]').length;
    $('#counter').text(items);
  }
  updateCount();

  $newItemButton.show();
  $newItemForm.hide();
  $('#showForm').on('click', function() {
    $newItemButton.hide();
    $newItemForm.show();
  });

  $('#add').on('click', function(e) {
    e.preventDefault();
    let text = $('input:text').val();
    $list.append('<li class=\"task\">' + text + '</li>');
    $('input:text').val('');
    updateCount();
  });
  
  $list.on('click', 'li', function() {
    let $this = $(this);
    let complete = $this.hasClass('complete');

    if (complete === true) {
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        $this.remove();
      });
    } else {
      item = $this.text();
      $this.remove();
      $list
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);
      updateCount();
    }
  });

});