// =============喜歡的主題tab==============

function openTopic(evt, topicName) {

    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tabBtn" and remove the class "tabOn"
    const tabBtn = document.getElementsByClassName("tabBtn");
    for (let i = 0; i < tabcontent.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" tabOn", "");
    }

    // Show the current tab, and add an "tabOn" class to the link that opened the tab
    document.getElementById(topicName).style.display = "block";
    evt.currentTarget.className += " tabOn";
}