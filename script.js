document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Adjust a specific date element to include the year
    var dateElement = document.querySelector('time.dt-published.blog-meta-item.blog-meta-item--date span');
    if (dateElement) {
        var publishedDate = document.querySelector('meta[itemprop="datePublished"]').content;
        var postYear = publishedDate.slice(0, 4);
        dateElement.innerText += ', ' + postYear;
    }

    // Step 2: Convert date formats on grid cards
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var gridCardDates = document.querySelectorAll('time.blog-date');
    
    gridCardDates.forEach(function(dateElement) {
        var dateText = dateElement.innerText; // e.g., "4/2/24"
        var dateParts = dateText.split('/'); // Split the date text by '/'
        
        if (dateParts.length === 3) {
            // Convert the month number to month name, adjusting for array index starting at 0
            var monthName = months[parseInt(dateParts[0], 10) - 1];
            
            // Convert year from "YY" to "YYYY" format, assuming 2000s
            var year = parseInt(dateParts[2], 10);
            year += (year < 100) ? 2000 : 0;
            
            // Construct the new date string in "Month Day, Year" format
            var formattedDate = `${monthName} ${parseInt(dateParts[1], 10)}, ${year}`;
            
            // Update the element's innerText with the new date format
            dateElement.innerText = formattedDate;
        }
    });
});
