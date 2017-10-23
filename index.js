$(function() {
  var $a1 = $('#a1'),
    $a2 = $('#a2'),
    $a3 = $('#a3'),
    $b = $('#b'),
    a = {};

  $b.on('click', function() {
    a = {
        data: $a1.val()+','+ $a2.val()+','+$a3.val(),
        sheetUrl: 'https://docs.google.com/spreadsheets/d/1OwRtOAEUC-SqVk1brdcSTUs1PF771c2ZpnpAPmO-NZg/edit#gid=0',
        sheetTag: '工作表1'
    };
    console.log(a);
    $.get('https://script.google.com/macros/s/AKfycbwiGylWzpnSq5slt1InVQgPclfM76rn2CpROORHm7CIPblfuTax/exec', a);
  });
});
