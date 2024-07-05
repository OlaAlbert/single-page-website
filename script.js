document.addEventListener('DOMContentLoaded', function() {
    // Get current UTC time
    var currentDate = new Date();
    var currentTimeUTC = currentDate.toUTCString();
    document.getElementById('currentTimeUTC').textContent = currentTimeUTC;
    
    // Get current day of the week
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDayIndex = currentDate.getUTCDay();
    var currentDayOfWeek = daysOfWeek[currentDayIndex];
    document.getElementById('currentDay').textContent = currentDayOfWeek;
});
