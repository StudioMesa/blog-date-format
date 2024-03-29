document.addEventListener('DOMContentLoaded', function() {
var dateElement = document.querySelector('time.dt-published.blog-meta-item.blog-meta-item--date span');
if (dateElement) {
var publishedDate = document.querySelector('meta[itemprop="datePublished"]').content;
var postYear = publishedDate.slice(0, 4);
dateElement.innerText += ', ' + postYear;
}
});
