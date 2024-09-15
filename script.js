function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable")
    let newRow = table.insertRow(0)
	let cell1= newRow.insertCell()
	let cell2= newRow.insertCell()
	cell1.innerText="NewCell1"
	cell2.innerText="NewCell2"
}	