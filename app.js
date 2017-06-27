<script>
$( "p" ).click(function() {
  $( this ).slideUp();
});
</script>
<script>
$( document.body ).click(function() {
  $( "div:hidden:first" ).fadeIn( "slow" );
});
</script>
