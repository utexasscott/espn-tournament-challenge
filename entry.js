$('.actual.selectedToAdvance.winner').each(function() {
	$(this).parents('.matchup').addClass('visible_win');
});
$('.bracket.locked .mW .matchup .slots .slot .actual+.picked.selectedToAdvance.correct').each(function() {
	$(this).parents('.matchup').addClass('visible_win');
});
$('.bracket.locked .mW .matchup .slots .slot .actual.selectedToAdvance.loser .abbrev, .bracket.locked .mW .matchup .slots .slot .actual.selectedToAdvance.loser .name').each(function() {
	$(this).parents('.matchup').addClass('visible_loss');
});
$('.bracket.locked .mW .matchup .slots .slot .actual+.picked.selectedToAdvance.incorrect').each(function() {
	$(this).parents('.matchup').addClass('visible_loss');
});
