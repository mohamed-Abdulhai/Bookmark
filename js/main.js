var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var btnSubmitInput = document.getElementById("btnSubmit");
var visiteBtn = document.getElementById("visiteBtn");
var deleteBtn = document.getElementById("deleteBtn");
var btnSubmit = document.getElementById("btnSubmit")
var deleteBtn = document.getElementById("deleteBtn")
var bookmarksList = []; 


// local stoage condation 
if (localStorage.getItem("bookmarks") != null) {
    bookmarksList = JSON.parse(localStorage.getItem('bookmarks'))
    displySaites(bookmarksList)
}

// Disply function
function displySaites() {
    var table = '';
    for (var i = 0; i < bookmarksList.length; i++) {
        table += `
            <tr>
                <td>${Number(i + 1)}</td>
                <td>${bookmarksList[i].siteName}</td>
                <td><button class="btn btnVisit"><i class="fa-solid fa-eye mx-1"></i><a href="${bookmarksList[i].siteurl}" target="_blank">Visit</a></button></td>
                <td><button class="btn btnDelete" onclick="deleteData(${i})"><i class="fa-solid fa-trash mx-1"></i>Delete</button></td>
            </tr>
        `;
    }
    document.getElementById("tableBody").innerHTML = table;
}

// delete function
    function deleteData() {
    

}
// clear form
function clearData() {
    siteNameInput.value='';
    siteURLInput.value='';
}

// the submit button
btnSubmit.onclick = function () {
    if (siteNameInput.value == "" || siteURLInput.value == "") {
        
    }
    else {
        var saite = {
        siteName: siteNameInput.value,
        siteurl: siteURLInput.value
    }
        bookmarksList.push(saite);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarksList));
        displySaites();
        clearData();
    }

}
// Delete function
function deleteData(x) {
    bookmarksList.splice(x, 1)
    localStorage.setItem("bookmarks",JSON.stringify(bookmarksList))
        displySaites()

}

