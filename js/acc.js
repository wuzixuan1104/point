/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  $('figure').imgLiquid ({ verticalAlign:'center' });
  $('#acc-info').each (function () {
    var $that = $(this);
    var ori = $that.find ('#edit-acc').text ();
    
    $that.find ('#edit-acc').click (function () {
      if ($that.hasClass ('edit')) {
        $that.removeClass ('edit');
        $(this).text (ori);

        $that.find ('.data > div').each (function () {
          var $week = $(this);
          var $span = $week.find ('>span');
          var val = $span.find ('>input').val ();
          $span.text (val);
        });
      } else {
        $that.addClass ('edit');
        $(this).text ('儲存');

        $that.find ('.data > div').each (function () {
          var $week = $(this);
          var $span = $week.find ('>span');
          var text = $span.text ();
          $span.empty ().append ($('<input />').val (text).attr ('name', $week.attr ('class')));
        });
      }
    });
  });

});