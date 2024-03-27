$(function() {
	$(".seminar-container").paginathing({
		perPage: 6,
		prevText:"前へ",
		nextText:"次へ",
    firstLast: false,
    liClass: 'page-item',
    linkClass: 'page-link',
		activeClass: "active",
	})
  function scrollToTopOnClick(event) {
    if (event.target.classList.contains('page-link')) {
      event.preventDefault();
      window.scrollTo(0, 0);
    }
  }
  var paginationContainer = document.querySelector('.pagination-container');
  paginationContainer.addEventListener('click', scrollToTopOnClick);
});