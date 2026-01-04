function findLargest() {
    let input = document.getElementById("arrayInput").value;
    let resultDiv = document.getElementById("result");

    if (input === "") {
        resultDiv.innerHTML = " Please enter some numbers";
        return;
    }

    // Convert input string to array of numbers
    let numbers = input.split(",").map(Number);

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    resultDiv.innerHTML = "Largest Number is: <b>" + largest + "</b>";
}
