/* SportsPress TV admin scripts */
( function ($) {
	$('body').on( 'change', '.sportspress-tv-region', function() {
		$(this).closest('.sportspress-tv-settings').find('.sportspress-tv-uuid optgroup').addClass('hidden');
		$(this).closest('.sportspress-tv-settings').find('.sportspress-tv-uuid optgroup[data-region="' + this.value + '"]').removeClass('hidden');
	});
})( jQuery );
