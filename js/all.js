// initial data
let user_input_task = "";
let task_list_data = [
    "小明：被檢舉騷擾，趕快找地方躲起來",
    "小明：去「漂亮阿姨」工作的地方接她下班",
];


// link variable to html tag
let input_task_field = document.querySelector("#input_task");
let add_task_btn = document.querySelector("#add_task_btn");
let task_list_view = document.querySelector("#task_list");


// add input_tag, btn_tag event listener
input_task_field.addEventListener("input", assignTaskData);
add_task_btn.addEventListener("click", addToTaskList);


// Start: declare task operate data function
function assignTaskData(e) {
    user_input_task = e.target.value;
}


function addToTaskList(e) {
    if (user_input_task != "") {
        task_list_data.push(user_input_task);
        renderTaskListView();
    }
}


function removeSingleTask(index) {
    task_list_data.splice(index, 1);
    renderTaskListView();
}


function clearAllTask() {
    task_list_data = [];
    renderTaskListView();
}
// End: declare task operate data function


// Start: declare operate list view function
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
    let cbox = input_element.nextElementSibling;
    if (input_element.checked) {
        cbox.classList.add("del_span");
    }
    else {
        cbox.classList.remove("del_span");
    }
}


function renderTaskListView() {
    let result = '';
    task_list_data.forEach((item, index) => {
        result += getListItemView(item, index);
    });
    task_list_view.innerHTML = result + getListFooterView();
}
// End: declare operate list view function


// initial render task-list-view
renderTaskListView();