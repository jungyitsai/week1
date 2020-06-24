let curr_task_txt = "";
let task_list_data = [
    "小明：被檢舉騷擾，趕快找地方躲起來",
    "小明：去「漂亮阿姨」工作的地方接她下班",
];



let input_task = document.querySelector("#input_task");
let add_task_btn = document.querySelector("#add_task_btn");
let task_list = document.querySelector("#task_list");


input_task.addEventListener("input", updateTask);
add_task_btn.addEventListener("click", addTask);



function updateTask(e) {
    curr_task = e.target.value;
}


function addTask(e) {
    task_list_data.push(curr_task);
    // console.log(task_list_data);
    renderTaskList();
}


function getListItemView(task_content, index) {
    let template = `
    <div id="task_list_item" class="list-group-item list-group-item-action">
        <input type="checkbox" class="form-check-input" onclick="addLineThrough(this)">
        <span class="label label-default">${task_content}</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="removeSingleTask(${index})">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `;
    return template
}


function getListFooterView() {
    let template = `
    <div id="task_list_footer" class="list-group-item list-group-item-action">
        <span class="label label-default">還有 ${task_list_data.length} 筆任務</span>
        <button type="button" class="btn btn-link" onclick="clearAllTask()">清除所有任務</button>
    </div>
    `;
    return template
}


function addLineThrough(input_element) {
    if (input_element.checked) {
        input_element.nextElementSibling.classList.add("del_span");
    }
    else {
        input_element.nextElementSibling.classList.remove("del_span");
    }
}


function removeSingleTask(index) {
    task_list_data.splice(index, 1);
    renderTaskList();
}


function clearAllTask() {
    task_list_data = [];
    renderTaskList();
}


function renderTaskList() {
    let result = '';
    task_list_data.forEach((item, index) => {
        result += getListItemView(item, index);
    });
    task_list.innerHTML = result + getListFooterView();
}

renderTaskList();