// function getData() {
//     var request = new XMLHttpRequest();

//     var url = 'http://api.icndb.com/jokes/random';

//     request.open('GET', url);
//     request.send();

//     request.onload = function() {
//         console.log(JSON.parse(request.response));
//     }
// }

// $.get('http://api.icndb.com/jokes/random', function(data) {
//     console.log(data);
// })

// $.ajax({
//     method: 'POST',
//     url: 'https://ajax-maks1mp.c9users.io/api/users/',
//     contentType: ' application/x-www-form-urlencoded',
//     data: JSON.stringify({
//             name: 'New Alex',
//             password: '123',
//             login: 'Alex1',
//             online: true,
//             id: 123123222
//         })
//     })



$(document).ready(function() {
    var API_CONSTANTS = {
        URL: 'https://ajax-maks1mp.c9users.io/api/users/',
        headers: {
            contentType: 'application/x-www-form-urlencoded'
        }
    };

    var VIEW = {
        LOADER: '.loader',
        USRS_TABLE: '.users',
        HIDDEN: 'hidden'
    };

    function hide(element) {
        element.addClass(VIEW.HIDDEN);
    }

    function show(element) {
        element.removeClass(VIEW.HIDDEN);
    }

    function fillTable(form, data) {
        form.empty();

        for (var i = 0; i < data.length; i++) {
            form.append(
                '<tr>' +
                    '<td>' +
                    data[i].name + ' ' + data[i].login +
                    '</td>' +
                '</tr>'
            );
        }
    }

    function fetchUsersAndPrint() {
        var loader = $(VIEW.LOADER),
            table = $(VIEW.USRS_TABLE);
        
        hide(table);
        show(loader);


        $.get(API_CONSTANTS.URL, function(data) {
            fillTable(table, data);
            hide(loader);
            show(table);
        });
    }

    function getFormData(form) {
        var data = {
                id: Date.now(),
                online: true
            },
            formData = form.serializeArray();
    
        for (var i = 0; i < formData.length; i++) {
            data[formData[i].name] = formData[i].value;
        }
    
        return data;
    }
    
    function submitForm(form, callback) {    
        var data = getFormData(form);
    
        $.ajax({
            method: 'POST',
            url: API_CONSTANTS.URL,
            data: JSON.stringify(data),
            contentType: API_CONSTANTS.headers.contentType,
            success: function(data) {
                callback(data);
            },
            error: function(e) {
                console.log(e);
            }
        });
    }

    var form = $('#form');

    form.on('submit', function(e) {
        e.preventDefault();

        var target = $(this);

        submitForm(target, function() {
            target.find('input').val('');

            fetchUsersAndPrint();
        });
    }); 

    fetchUsersAndPrint();
});









