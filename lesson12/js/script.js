function fillArea(elem, q) {
    elem.innerHTML = '';

    for (var i = 0; i < q; i++) {
        var div = document.createElement('div');

        div.addEventListener('mousemove', function(e) {
            if (e.target.parentNode.classList.contains('active')) {
                var color = document.querySelector('input[type="color"]');

                e.target.style.backgroundColor = color.value;
            }
        });
        
        elem.appendChild(div);
    }
}

(function() {
    var area = document.getElementById('area'),
        clearBtn = document.getElementById('clear');

    fillArea(area, 4000);

    clearBtn.addEventListener('click', function() {
        fillArea(area, 4000);
    });

    area.addEventListener('mousedown', function(e) {
        area.classList.add('active');
    });

    area.addEventListener('mouseup', function(e) {
        area.classList.remove('active');
    });
})();