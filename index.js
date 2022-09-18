function addition(){
    var botvalue =[number1.value || number2.value]
    if(number1.value =="" || number2.value ==""){
        alert("enter number")
    } 
    myTable.innerHTML = " "
    for (var i = 1; i <= number1.value; i++) {
        result = `<tr>`;
        for (var j = 1; j <= number2.value; j++) {
            result += `
            <td> ${i}+${j}=${i+j} </td>
            `
        }
        result += `</tr>`
        myTable.innerHTML += result
    }
}
function subtraction(){
    var botvalue =[number1.value || number2.value]
    if(number1.value =="" || number2.value ==""){
        alert("enter number")
    }
    myTable.innerHTML = ""
    for (var i = 1; i <= number1.value; i++) {
        result = `<tr>`;
        for (var j = 1; j <= number2.value; j++) {
            result += `
            <td> ${i}-${j}=${i-j} </td>
            `
        }
        result += `</tr>`
        myTable.innerHTML += result
    }
}
function multiply(){
    var botvalue =[number1.value || number2.value]
    if(number1.value =="" || number2.value ==""){
        alert("enter number")
    }
    myTable.innerHTML = ""
    for (var i = 1; i <= number1.value; i++) {
        result = `<tr>`;
        for (var j = 1; j <= number2.value; j++) {
            result += `
            <td> ${i}*${j}=${i*j} </td>
            `
        }
        result += `</tr>`
        myTable.innerHTML += result
    }
}
function division(){
    var botvalue =[number1.value || number2.value]
    if(number1.value =="" || number2.value ==""){
        alert("enter number")
    }
    myTable.innerHTML = ""
    for (var i = 1; i <= number1.value; i++) {
        result = `<tr>`;
        for (var j = 1; j <= number2.value; j++) {
            result +=
                "<td> "+i+"/"+j+"="+parseFloat(i/j).toFixed(2)+" </td>"
        }
        result += `</tr>`
        myTable.innerHTML += result
    }
}