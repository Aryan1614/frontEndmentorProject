var step1 = document.getElementById("stepOne");
var step2 = document.getElementById("step-two");
var step3 = document.getElementById("step-three");
var step4 = document.getElementById("step-four");
var step5 = document.getElementById('step-five');

// form elements 
var formName = document.querySelector(".inputName");
var formEmail = document.querySelector(".inputMail");
var formNumber = document.querySelector(".inputTel");

// buttons
var btn1 = document.querySelector(".step1-btn");
var btn2 = document.querySelector(".step2-btn");
var btn3 = document.querySelector(".step3-btn");
var btn4 = document.querySelector(".step4-btn");
var changeBtn = document.querySelector(".changePack"); 

// boxes
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");

var cost = 0;

var presentStep = step1;

function formValidity(){
    // if(formName.value && formEmail.value && formNumber.value){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return true;
}

// move to next steps
function moveForward(presentStep){

    if(presentStep === step1){
        if(formValidity() == true){
            presentStep = step2;
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            two.classList.add('present-state');
            one.classList.remove('present-state');
        }
        else{
            alert("please fill out the detailed to move forward");
        }
    }

    else if(presentStep === step2){
        presentStep = step3;
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
        three.classList.add('present-state');
        two.classList.remove('present-state');
    }

    else if(presentStep === step3){
        presentStep = step4;
        step3.classList.add('hidden');
        step4.classList.remove('hidden');
        four.classList.add('present-state');
        three.classList.remove('present-state');
    }

    else if(presentStep === step4){
        presentStep = step5;
        step4.classList.add('hidden');
        step5.classList.remove('hidden');
    }

    return presentStep;
}

btn1.addEventListener('click',function (){
    presentStep = moveForward(presentStep);
});

btn2.addEventListener('click',function (){
    if(step3Select != ''){
        presentStep = moveForward(presentStep);
    }
    else{
        alert('select pack!! to move forward');
    }
    console.log(step3Select);
    cost = costHandler(step3Select);
});

btn3.addEventListener('click',function (){
    presentStep = moveForward(presentStep);
});

btn4.addEventListener('click',function (){
    presentStep = moveForward(presentStep);
});


changeBtn.addEventListener('click',function (){
    presentStep = step2;
    step4.classList.add('hidden');
    step2.classList.remove('hidden');
    four.classList.remove('present-state');
    two.classList.add('present-state');
});


function backWard(presentStep){

    if(presentStep == step2){
        presentStep = step1;
        step1.classList.remove('hidden');
        step2.classList.add('hidden');
        two.classList.remove('present-state');
        one.classList.add('present-state');
    }

    else if(presentStep == step3){
        presentStep = step2;
        step2.classList.remove('hidden');
        step3.classList.add('hidden');
        three.classList.remove('present-state');
        two.classList.add('present-state');
    }

    else if(presentStep == step4){
        presentStep = step3;
        step3.classList.remove('hidden');
        step4.classList.add('hidden');
        four.classList.remove('present-state');
        three.classList.add('present-state');
    }

    return presentStep;
}

// back button 

var step2Back = document.querySelector(".step2-backbtn");
var step3Back = document.querySelector(".step3-backbtn");
var step4Back = document.querySelector(".step4-backbtn");

step2Back.addEventListener('click',function (){
    presentStep = backWard(presentStep);
});

step3Back.addEventListener('click',function (){
    presentStep = backWard(presentStep);
});

step4Back.addEventListener('click',function (){
    presentStep = backWard(presentStep);
});


// making the add ons functionable

var check1 = document.getElementById("step3-one");
var check2 = document.getElementById("step3-two");
var check3 = document.getElementById("step3-three");

var checkBox1 = document.querySelector(".checkBox1");
var checkBox2 = document.querySelector(".checkBox2");
var checkBox3 = document.querySelector(".checkBox3");

var AddOnOne = document.querySelector(".checkOne");
var AddOnTwo = document.querySelector(".checkTwo");
var AddOnThree = document.querySelector(".checkThree");


var addOns = [];

function removeArrayHandler(checkStep){
    var indexOfRemoveStep = addOns.indexOf(checkStep);

    if(indexOfRemoveStep !== -1){
        addOns.splice(indexOfRemoveStep,1);
    }
}

function checkboxHandler(step){
    if(step == step1){
        if(check1.checked){
            addOns.push('step1');
            checkBox1.classList.add("step3-select");
            AddOnOne.innerHTML = '<p>Online Services</p><br><p class="rate1">+$1/mo</p>';
            cost = cost + 1;
        }
        else{
            let index = addOns.indexOf('step1');
            addOns.splice(index,1);
            removeArrayHandler(check1);
            checkBox1.classList.remove("step3-select");
            AddOnOne.innerHTML = '';
            cost = cost - 1;
        }
    }
    else if(step == step2){
        if(check2.checked){
            addOns.push('step2');
            checkBox2.classList.add("step3-select");
            AddOnTwo.innerHTML = '<p>Large Storage</p><br><p class="rate2">+$2/mo</p>';
            cost = cost + 2;
        }
        else{
            let index = addOns.indexOf('step2');
            addOns.splice(index,1);
            removeArrayHandler(check2);
            checkBox2.classList.remove("step3-select");
            AddOnTwo.innerHTML = '';
            cost = cost - 2;
        }
    }
    else if(step == step3){
        if(check3.checked){
            addOns.push('step3');
            checkBox3.classList.add("step3-select");
            AddOnThree.innerHTML = '<p>Customizable Profits</p><br><p class="rate3">+$2/mo</p>';
            cost = cost + 2;
        }
        else{
            let index = addOns.indexOf('step3');
            addOns.splice(index,1);
            removeArrayHandler(check3);
            checkBox3.classList.remove("step3-select");
            AddOnThree.innerHTML = '';
            cost = cost - 2;
        }
    }

}

check1.addEventListener('change',function (){
    checkboxHandler(step1);
});

check2.addEventListener('change',function (){
    checkboxHandler(step2);
});

check3.addEventListener('change',function (){
    checkboxHandler(step3);
});


var step3Select = '';
var SelectedPack = document.querySelector(".selected-type-step4");
var SelectedPackRate = document.querySelector(".PackRate");

var btn1Step2 = document.querySelector(".step2-btn1");
var btn2Step2 = document.querySelector(".step2-btn2");
var btn3Step2 = document.querySelector(".step2-btn3");

function selectedPackHandler(button){

    if(button == btn1Step2){
        step3Select = btn1Step2;
        btn1Step2.classList.add('select');
        if(btn2Step2.classList.contains('select')){
            btn2Step2.classList.remove('select');
        }
        if(btn3Step2.classList.contains('select')){
            btn3Step2.classList.remove('select');
        }
        SelectedPack.innerHTML = 'Arcade';
        SelectedPackRate.innerHTML = '+$9/mo';
    }
    else if(button == btn2Step2){
        step3Select = btn2Step2;
        btn2Step2.classList.add('select');
        if(btn1Step2.classList.contains('select')){
            btn1Step2.classList.remove('select');
        }
        if(btn3Step2.classList.contains('select')){
            btn3Step2.classList.remove('select');
        }
        SelectedPack.innerHTML = 'Advanced';
        SelectedPackRate.innerHTML = '+$12/mo';
    }
    else if(button == btn3Step2){
        step3Select = btn3Step2;
        btn3Step2.classList.add('select');
        if(btn1Step2.classList.contains('select')){
            btn1Step2.classList.remove('select');
        }
        if(btn2Step2.classList.contains('select')){
            btn2Step2.classList.remove('select');
        }
        SelectedPack.innerHTML = 'Pro';
        SelectedPackRate.innerHTML = '+$15/mo';
    }

}

btn1Step2.addEventListener('click',function (){
    selectedPackHandler(btn1Step2);
});

btn2Step2.addEventListener('click',function (){
    selectedPackHandler(btn2Step2);
});

btn3Step2.addEventListener('click',function (){
    selectedPackHandler(btn3Step2);
});


var totalCost = document.querySelector(".footer-rate");

function costHandler(step3Select){
    if(step3Select.classList.contains('step2-btn1')){
        cost = cost + 9;
    }
    else if(step3Select.classList.contains('step2-btn2')){
        cost = cost + 12;
    }
    else if(step3Select.classList.contains('step2-btn3')){
        cost = cost + 15;
    }

    return cost;
}

totalCost.innerHTML = `+${cost}/mo`;