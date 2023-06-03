// var boxBtn = document.getElementsByClassName("box-wraper")[0];

// boxBtn.getElementsByClassName('box-btn')[0].style.height = '200';
// boxBtn.getElementsByClassName('box-btn')[0].style.display = 'block';

// var boxBtn = $('.box-wraper');
// boxBtn.find('.box-btn').css('height', 200);

// var theH3 = $('h3');
// theH3.css('color', 'red');

// var input = document.getElementsByTagName('input');
// console.log(input[0].value);

// var input = $('input');
// console.log(input.val('noi dung duoc thay doi'));
var swiper = new Swiper(".mySwiper", {});


$('#form').hide();
$('#form').validate();
$("#form").on('submit', (e) => {
    e.preventDefault();
    console.log(e);
    let tensinhvien = $('#tensinhvien').val();
    let lop =  $('#lop').val();
    let namsinh =  $('#namsinh').val();
    let newData = {
        tensinhvien,
        lop,
        namsinh
    }

    axios.post('http://localhost:3333/sinhviens', newData)
    .then(function (response) {
        console.log(response);
        // $('#tensinhvien, #lop, #namsinh').val('');
        // window.location.href = '/';
    })
    .catch(function (error) {
        console.log(error);
    });

    // console.log(e)

    // https://axios-http.com/vi/docs/example
    // https://www.npmjs.com/package/json-server
    // https://jqueryui.com/

    // C -> POST
    // R -> GET
    // U -> PUT
    // D -> DELETE

})

$('.showform').on('click', () => $('#form').toggle())

