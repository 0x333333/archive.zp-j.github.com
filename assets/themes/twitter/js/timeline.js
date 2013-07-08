$(function () {
	$('#timeline-navbar a').on('click', function(event) {
		var selectedFilter = $(this).parent();
		if (selectedFilter.hasClass('active')) {
			return;
		}
		
		// Update navbar filter selected state.
		$('#timeline-navbar li').removeClass('active');
		selectedFilter.addClass('active');
		
		var filter = $(this).data('filter');
		if (filter == 'all') {
			$('#timeline li').show("slow");
		} else {
			$('#timeline li.' + filter).show("slow");
			$('#timeline li:not(.' + filter + ')').hide("slow");
		}
	});
});
