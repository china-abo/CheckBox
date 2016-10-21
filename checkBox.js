
// Abooptions 是一个包含 string 的数组
// 本函数对每个 string 生成一个复选框和文本
// append 到 body 中
var addCheck = function(options) {
    var check = ''
    for (var i = 0; i < arr.length; i++) {
        var t = `
            <input class='check-cell' type="checkbox"  name="name" value="">${arr[i]}<br>
        `
        check += t
    }
    return check
}

var Abooption = function(arr) {
    $('.checkbox').append(addCheck(arr))
}


// options 是一个包含 string 的数组
// 本题和作业 1 一样的功能 只是多了 2 个按钮
// 全选 和 反选
var addBtn = function() {
    log('addbtn')
    var t = `
        <div id="btn-checked">
            <button class="btn-checked" data-type="all" type="button" name="button">全选</button>
            <button class="btn-checked" data-type="invert" type="button" name="button">反选</button>
        </div>
    `
    return t
}
// 全选或反选
/*
    通过JQ的$.map()来遍历checkbox. 更改checked
*/
var Abooptions = function(options) {
    $('.checkbox').append(addCheck(options))
    $('.checkbox').append(addBtn())
    $('.btn-checked').on('click', function() {
        if($(this).data('type') == 'all') {
            $.map($('.check-cell'), function(check) {
                check.checked = true
            })
        } else {
            $.map($('.check-cell'), function(check) {
                check.checked = false
            })
        }
    })
}
