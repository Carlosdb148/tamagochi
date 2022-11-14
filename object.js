var form;

function target(idObject){
    form = idObject;
}

function createCheckBox (n){
    let div = document.createElement('div');
    for (let i = 0; i < n; i++) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = "ch" + i;
        checkbox.style.visibility = "hidden";
        div.appendChild(checkbox);
        let label = document.createElement('label');
        label.for = "ch" + i;
        label.innerHTML = 'Feed';
        div.appendChild(label);
        div.addEventListener("click", () => {
            if(checkbox.checked == true){
                checkbox.checked = false;
            }else{
                //animation
                checkbox.checked == true;
            }
        });
    }
    form.appendChild(div);
}

function createProgressBar(n){
    for (let i = 0; i < n; i++) {
        let bar = document.createElement('input');
        bar.type = 'range';
        bar.min = 0;
        bar.max = 100;
        form.appendChild(bar);
    }
    
}

function createButton(n){
    for (let i = 0; i < n; i++) {
        let button = document.createElement('button');
        button.style = "width:60px; height:30px;"
        button.innerHTML = "Submit";
        form.appendChild(button);
    }
    
}


formUI.target = target;
formUI.createCheckBox = createCheckBox;
formUI.createProgressBar = createProgressBar;
formUI.createButton = createButton;

export default formUI;