// Swap X & Y
function taskOne() {
    var x = 5;
    var y = 10;
    [x, y] = [y, x];
    console.log(x, y);
}


// Get min, max from unknown array size
function taskTwoA() {
    function taskTwo(...numbers) {
        var min = numbers[0];
        var max = numbers[0];
        for (var i = 1; i < numbers.length; i++) {
            if (numbers[i] > max)
                max = numbers[i];
            if (numbers[i] < min)
                min = numbers[i];
        }
        console.log(min, max)
        return [min, max];
    }
    
    var [res1, res2] = taskTwo(...[1, 2, 556, 7854, -4, -18]);
    console.log(res1, res2);
}

function taskTwoB(...numbers) {
    var min = numbers[0];
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max)
            max = numbers[i];
        if (numbers[i] < min)
            min = numbers[i];
        // return [min, max];
    }
    console.log(min, max)
}

// array methods
function taskThree() {
    var fruits = ["apple", "strawberry", "banana", "orange",
        "mango"];
    let res;
    res  = fruits.every(num => typeof num == 'string');
    console.log("Is every item a string?: "+ res);
    res =  fruits.some( fruit =>  fruit[0] == "a");
    console.log("do some elements start with (a): "+ res);
    res = fruits.filter(fruit => (fruit.startsWith("b") || fruit.startsWith("s")));
    console.log("Fruits that starts with (s/b): "+ res);
    res = fruits.map(fruit => "I like "+ fruit);
    // console.log(res);
    res.forEach(fruit => console.log(fruit));
}