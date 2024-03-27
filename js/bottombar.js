document.addEventListener("DOMContentLoaded", function() {
    const reasonContainer = document.getElementById("bottombar");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "bottom_bar.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            reasonContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
