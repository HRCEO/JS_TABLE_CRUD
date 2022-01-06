let selectedRow = null;

function onSubmitForm() {
    let formData = formValues();
    if (selectedRow == null)
        newRecords(formData);
    else
        onUpdate(formData)
    resetForm();
}

function formValues() {
    let formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["sex"] = document.getElementById("sex").value;
    formData["age"] = document.getElementById("age").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function newRecords(data) {
    const table = document.getElementById("list").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let c1 = newRow.insertCell(0);
    c1.innerHTML = data.name;
    let c2 = newRow.insertCell(1);
    c2.innerHTML = data.sex;
    let c3 = newRow.insertCell(2);
    c3.innerHTML = data.age;
    let c4 = newRow.insertCell(3);
    c4.innerHTML = data.address;
    let c5 = newRow.insertCell(4);
    c5.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                    <a onclick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("sex").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sex").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}

function onUpdate(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.sex;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td) {
    if (confirm("데이터를 삭제 하시겠습니까?")) {
        let row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
    }

}