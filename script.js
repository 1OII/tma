document.getElementById('popupButton').addEventListener('click', function() {
    var hiddenText = document.getElementById('hiddenText');
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        document.getElementById('popupButton').textContent = "Hide Text";
    } else {
        hiddenText.style.display = "none";
        document.getElementById('popupButton').textContent = "Show More";
    }
});
