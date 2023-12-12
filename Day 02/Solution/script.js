// Helper method for taskOne
function checkObjects(obj1, obj2) {
    if (Object.keys(obj1).length != Object.keys(obj2).length)
        return false;

    let flag = true;
    Object.keys(obj1).forEach(k => {
        if (!obj2.hasOwnProperty(k))
            flag = false;
        // return false 
        // A function to execute for each element in the array. Its return value is discarded. 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    });
    return flag;
}

function taskOne(obj = {}) {
    let defaultObj = {
        courseName: "Default Name",
        courseDuration: 0
        // courseOwner: "Owner Name"
        // courseCode: "Default code"
    }
    if (checkObjects(defaultObj, obj) == false)
        throw "BadObjError - Object passed to Method is incompatible.";
    // if (Object.keys(obj).length != 3 || !obj.hasOwnProperty('courseName') || !obj.hasOwnProperty('courseDuration') || !obj.hasOwnProperty('courseOwner'))
    // throw "Object Passed to Method is incompatible";
    else {
        let res = Object.assign(defaultObj, obj);
        console.log(res);
        // return res;
    }
}

// taskOne({courseName: "course 01", courseDuration: 12});


// ============================================================================

let ourDiv = document.getElementById("result");
let bandsElm = document.getElementById("band");
let artistsElm = document.getElementById("artists");
let data;

function taskTwo() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./rockbands.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                data = JSON.parse(xhr.responseText);
                Object.keys(data).forEach(k => {
                    bandsElm.innerHTML += `<option value="${k}">${k}</option>`;
                });
            }
        }
    }
    xhr.send('');
}


function selectArtist() {
    let artists = data[bandsElm.value];
    artistsElm.innerHTML = '';
    artistsElm.innerHTML += `<option selected disabled>Please Select ar artist</option>`
    for (let i = 0; i < artists.length; i++) {
        artistsElm.innerHTML += `<option value="${artists[i].name}">${artists[i].name}</option>`
    }
}

function displayInfo() {
    let artists = data[bandsElm.value]
    let artName = artists[artistsElm.selectedIndex - 1].name
    let artSite = artists[artistsElm.selectedIndex - 1].value
    // console.log(`Opening ${artName}'s website [${artSite}]`);
    // window.location.assign(artSite);
    ourDiv.innerHTML = '';
    ourDiv.innerHTML += `<h1>Name: ${artName}</h1>`;
    ourDiv.innerHTML += `<h1>Website: <a target="_blank" href="${artSite}">${artSite}</a></h1>`;
}