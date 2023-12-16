function* fib(n) {
    n ??= 0;
    var x = 0;
    var y = 0; // = 1
    var sum = 1; // = x+y
    while (n > 0) {
        yield sum;
        n--;
        x = y;
        y = sum;
        sum = x + y;
    }
}

// var Fib = fib(5);
// console.log(Fib.next());
// console.log(Fib.next());
// console.log(Fib.next());

// ==================================================

var obj = {
    name: "Ahmed",
    age: 30,
    address: "123 St",
    phone: "01012345678",
    [Symbol.iterator]: function* () {
        var objValues = Object.values(this);
        var counter = 0;
        while (counter < objValues.length) {
            yield objValues[counter++];
        }
    }
};

// var iterator = obj[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());

// ==================================================

var controller = {
    set: function (obj, prop, val) {
        if (prop == "name") {
            if (typeof val == 'string' && val.length == 7)
                obj[prop] = val;
            else
                throw "Name must be 7 a characters string!"

        } else if (prop == 'age') {
            if (typeof val == 'number' && val >= 25 && val <= 60)
                obj[prop] = val;
            else
                throw "Age must be between 25-60!";

        } else if (prop == "address") {
            if (typeof val == "string" && val != "")
                obj[prop] = val;
            else
                throw "Address must be a valid string!";
        } else {
            throw "Please Enter valid Properties! [name - address - age]"
        }
    }
}

var myProxy = new Proxy({}, controller);
// myProxy.age = 24;
// myProxy.age = "24";
// myProxy.name = "Ahmed";
// myProxy.address = 123;
// myProxy.address = "";
// =========================
// myProxy.name = "Ahmeddd";
// myProxy.age = 25;
// myProxy.address = "123 St";
// =========================


// ==================================================

var myPromise = new Promise(
    function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        // xhr.open("GET", "https://jsonplaceholder.typicode.com/userz");
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
        xhr.onreadystatechange = function () {
            // console.log(xhr.readyState, xhr.status)
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject("Failed");
                }
            }
            // else
            // {
            //     reject("Failed");
            // }
        }
        // xhr.onerror = function () {
        //     reject("Failed");
        // }
        xhr.send('');
    }
)
var ourDiv1 = document.getElementById("uDiv1");
var ourDiv2 = document.getElementById("uDiv2");
var usersElm;
var data;

myPromise.then(function (val) {
    // console.log(val);
    data = val;
    usersElm = document.getElementById("users");
    for (var i = 0; i < data.length; i++) {
        usersElm.innerHTML += `<option value="${i + 1}">${i + 1}</option>`
    }
}).catch((val) => {
    // console.log(val);
    ourDiv1.innerHTML = '<h1>Error Getting Users Data!</h1>';
})

function selectUser() {
    ourDiv2.innerHTML = '';
    for (key in data[usersElm.selectedIndex - 1]) {
        var info = data[usersElm.selectedIndex - 1][`${key}`];
        if(typeof info == 'object')
            info = JSON.stringify(info);
        ourDiv2.innerHTML += `<h4>${key}: ${info}</h1>`;
    }
}