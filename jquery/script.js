$(document).ready(function() {
            // your code here
            // 1) 

    var $body = $('body');
    var bodyChildren = $body.children();

    bodyChildren.each(function(index, element) {
        var $el = $(element);
        
        if (!$el.is('script')) {
            // console.log(element.tagName, $el.text());
        }
    });
    // $body.find('*')
    
    // .children() (not script)
    // ! .is('script')
    // 

    var $button = $('<button>Click me!</button>');

    $button.one('click', function() {
        alert('Thanks!');
    });

    $body.append($button);

    // 3 _______________

    var form = $('<form></form>'),
        input = $('<input type="text"/>'),
        button = $('<button>click</button>');

    form.append(input);
    form.append(button);

    form.on('submit', function(e) {
        e.preventDefault();

        alert('Value is: ' + input.val());
    });

    $body.append(form);


    // 4 ___________

    $body.on('click', '.button', function() {
        console.log('!!!');
    });


    // var el = document.getElementById('root');

    // el.addEventListener('click', function(event) {
    //     console.log('event', event);
    // });

    // var listeners = {};

    // function addListener(event, callback) {
    //     listeners[event] = callback;
    // }

    // function callListener(event) {
    //     listeners[event]({
    //         event: event,
    //         setiings: {}
    //     });
    // }

    // addListener('click', function(e) {
    //     console.log('im collback function', e);
    // });

    // callListener('click');
    // // callListener('click');
    // // callListener('click');

    // addListener('hover', function(event) {
    //     console.log('hover callback', event);
    // });

    // callListener('hover');

    // function loadData(callback) {
    //     setTimeout(function() {
    //         var data = {title: 'data'};

    //         callback(data);
    //     }, 5000);
    // }

    // loadData(function(data) {
    //     console.log('data  is here')
    // });

    // function parseData(data) {
    //     console.log('parsing data', data);
    // }

    // loadData(parseData);


    function initCircle() {
        var circle = $('.circle');

        $(document).on('click', function(event) {
            var clientX = event.clientX,
                clientY = event.clientY;

            circle.removeClass('hidden');

            circle.css({
                top: clientY + 'px',
                left: clientX + 'px'
            });
        })
    }

    // var list = new List($('ul.list'));

    // var task = new Task('Learn jQuery');

    // list.addTask(task);

    // list.removeTask(task.id);

    // list.toggleTask(task.id);


    function List(selector, initialTasks) {
        this.tasks = initialTasks || [];
        this.listHTML = selector;
    }

    List.prototype = {
        constructor: List,
        addTask: function(task) {
            this.tasks.push(task);

            this.render();
        },
        render: function() {
            this.listHTML.empty();

            for (var i = 0; i < this.tasks.length; i++) {
                this.renderTask(this.tasks[i]);
            }
        },
        renderTask(task) {
            var li = $('<li>'+task.title+'</li>');

            this.listHTML.append(li);
        }
    }

    function Task(title, isDone) {
        this.title = title;
        this.isDone = isDone || false;
        this.id = Date.now(); 
    }

    var ul = $('.list');

    var tasksList = new List(ul);

    tasksList.addTask(new Task('Learn JS'));
    tasksList.addTask(new Task('Learn jQuery'));

});