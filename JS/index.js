
var siteName = document.getElementById('sitename')
var siteUrl = document.getElementById('siteurl')
var bookMarks = [];

function submit() {
    
       if(validateform(siteName)&&validateform(siteUrl)){
        var bookmark = {
            name: siteName.value,
            url: siteUrl.value,

        }
        bookMarks.push(bookmark)

        console.log(bookMarks);
        clearform()
        display()
       }
   
        else {
            Swal.fire(` Site Name or Url is not valid, Please follow the rules below :
    
        Site name must contain at least 3 characters
        Site URL must be a valid one
    `);
        }
}

function clearform() {
    siteName.value = null;
    siteUrl.value = null;
}

function display() {
    var cartona = '';
    for (var i = 0; i < bookMarks.length; i++) {
        cartona += `<tr>
                        <th>${i + 1}</th>
                        <th>${bookMarks[i].name}</th>
                        <th><a href="https://${bookMarks[i].url}"><button class="btn btn-success">Visit</button></a></th>
                        <th><button onclick='deletebookmark(${i})' class="btn btn-danger">Delete</button></th>
                    </tr>`
    }
    document.getElementById('tableContent').innerHTML = cartona

}
function deletebookmark(deleted) {
    bookMarks.splice(deleted, 1)
    display()

}

function validateform(ele) {
    var regex = {
        sitename: /^[a-z]{3,20}$/i,
        siteurl: /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/


    }
    if (regex[ele.id].test(ele.value)) {
        ele.classList.remove('is-invalid')
        ele.classList.add('is-valid')
        return true;

    }
    else {
        ele.classList.remove('is-valid')
        ele.classList.add('is-invalid')
        return false;

    }
}