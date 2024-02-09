var mainContainer = document.createElement("div");
mainContainer.setAttribute("class","container");
mainContainer.innerHTML = "<h1 style = 'text-align:center'>Form submission</h1>";

var fName = document.createElement("label");
fName.setAttribute("class","form-label");
fName.innerHTML = "<h3>Enter your First Name</h3>";
mainContainer.append(fName);

var fNameInput = document.createElement("input");
fNameInput.setAttribute("class","form-control");
fNameInput.setAttribute("id","fname");
fNameInput.setAttribute("type","text");
fNameInput.setAttribute("required", true);
mainContainer.append(fNameInput);

// var br = document.createElement("br");
// mainContainer.append(br);

var lName = document.createElement("label");
lName.setAttribute("class","form-label");
lName.innerHTML = "<h3>Enter your Last Name</h3>";;
mainContainer.append(lName);

var lNameInput = document.createElement("input");
lNameInput.setAttribute("class","form-control");
lNameInput.setAttribute("type","text");
lNameInput.setAttribute("id","lname");
lNameInput.setAttribute("required", true);
mainContainer.append(lNameInput);

// var br = document.createElement("br");
// mainContainer.append(br);

var address = document.createElement("label");
address.setAttribute("class","form-label");
address.innerHTML = "<h3>Enter your Address </h3>";
mainContainer.append(address);

var addInput = document.createElement("textarea");
addInput.setAttribute("class","form-control");
addInput.setAttribute("id","addres");

// addInput.innerHTML = `<textarea id="exampleFormControlTextarea1" rows="3"></textarea>`
mainContainer.append(addInput);

var pincode = document.createElement("label");
pincode.setAttribute("class","form-label");
pincode.innerHTML = "<h3>Enter your Pincode </h3>";
mainContainer.append(pincode);

var pincodeInput = document.createElement("input");
pincodeInput.setAttribute("class","form-control");
pincodeInput.setAttribute("id","pinum");
pincodeInput.setAttribute("type","number"); 
mainContainer.append(pincodeInput);

var gender = document.createElement("label");
gender.setAttribute("class","form-label");
gender.innerHTML = "<h3>Select your Gender</h3>";
mainContainer.append(gender);

var genderInput = document.createElement("div");
genderInput.setAttribute("id","gen");
genderInput.innerHTML = `<div class="form-check">
<input class="form-check-input" type="radio" name="gender" id="female" value="female">
<label class="form-check-label" for="female">
  Female
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="gender" id="male" value="male" >
<label class="form-check-label" for="male">
  Male
</label>
</div>`;
mainContainer.append(genderInput);

var foodChoice = document.createElement("label");
foodChoice.setAttribute("class","form-label");
foodChoice.innerHTML = "<h3>Select your Food choice </h3>";
mainContainer.append(foodChoice);

var foodInput = document.createElement("div");
foodInput.setAttribute("id","choosefood");
foodInput.innerHTML = `<div class="form-check">
<input class="form-check-input" type="checkbox" value="South Indian" id="SouthIndian">
<label class="form-check-label" for="SouthIndian">
  South Indian
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="North Indian" id="NorthIndian">
<label class="form-check-label" for="NorthIndian">
  North Indian
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="Italian" id="Italian">
<label class="form-check-label" for="Italian">
  Italian
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="Chinese" id="Chinese">
<label class="form-check-label" for="Chinese">
Chinese
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="Arabian" id="Arabian">
<label class="form-check-label" for="Arabian">
  Arabian
</label>
</div>`;
mainContainer.append(foodInput);

var state = document.createElement("label");
state.setAttribute("class","form-label");
state.innerHTML = "<h3>Enter your State </h3>";
mainContainer.append(state);

var stateInput = document.createElement("input");
stateInput.setAttribute("class","form-control");
stateInput.setAttribute("id","state");
stateInput.setAttribute("type","text");
mainContainer.append(stateInput);


var Country = document.createElement("label");
Country.setAttribute("class","form-label");
Country.setAttribute("id","country");
Country.innerHTML = "<h3>Enter your Country</h3>";
mainContainer.append(Country);


var countryInput = document.createElement("input");
countryInput.setAttribute("class","form-control");
countryInput.setAttribute("id","countryname");
countryInput.setAttribute("type","text");
mainContainer.append(countryInput);

var button =  document.createElement("div");
// button.setAttribute("class","btn btn-primary");
// button.setAttribute("id","entry");
button.innerHTML = `<button type="button" class="btn btn-primary" onclick = "addData()">Submit</button>`;
mainContainer.append(button);

var tableName = document.createElement("div");
tableName.setAttribute("class","container");
tableName.innerHTML = "<h1 style ='text-align:center'>Data Added in Table</h1>";
mainContainer.append(tableName);

var table = document.createElement("table");
table.setAttribute("class","table");
table.setAttribute("id","display");
table.innerHTML = `<thead>
<tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Address</th>
    <th scope="col">Pincode</th>
    <th scope="col">Gender</th>
    <th scope="col">Choice of Food</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>

</tr>
</thead>`;





// var entry = document.getElementById("entry");
// entry.addEventListener("click", addData);

var row =1;

function addData(){
    var name1 = document.getElementById("fname").value;
    var name2 = document.getElementById("lname").value;
    var contactadd = document.getElementById("addres").value;
    var pinnumber = document.getElementById("pinum").value;
    // var gen = "";
    var genders = document.querySelector('input[name="gender"]:checked').value;
    // genders.forEach(function(input){
        // gen +=input.value + " ";
    // });
    var food = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(function(element){
        return element.value;
    }).join(', ');
    var states = document.getElementById("state").value;
    var countries = document.getElementById("countryname").value;

    // console.log(name1);
    // console.log(name2);

    // if(!name1 && !name2 && !contactadd && !pinnumber && !genders && !food && !states && !countries){
    //     alert("Please fill all the data");
    //     return;
    // }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = name1;
    cell2.innerHTML = name2;
    cell3.innerHTML = contactadd;
    cell4.innerHTML = pinnumber;
    cell5.innerHTML = genders;
    cell6.innerHTML = food;
    cell7.innerHTML = states;
    cell8.innerHTML = countries;

    row++;


}

mainContainer.append(table);    

document.body.append(mainContainer);