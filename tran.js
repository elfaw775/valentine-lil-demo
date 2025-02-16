let pic = document.getElementById('pict')
let btnl = document.getElementById('btnl')
let btnr = document.getElementById('btnr')
let ask = document.getElementById('ask')

let count = 1
let imagearray = ["./pic/1.jpg", "./pic/2.jpg", "./pic/3.jpg",
    "./pic/4.jpg", "./pic/5.jpg",
]
let par = ["", "? 你认真的吗", "要不再想想", "不许选这个!", "我会很伤心..."]
let move = 20




btnl.addEventListener('click', function() {
    pic.src = "./pic/6.jpg";
    ask.innerHTML = "!!!喜欢你!!(>„<)♡。";
    btnr.style.display = "none";
    btnl.style.display = "none";
})

btnr.addEventListener('click', function(event) {
    if (count <= 4) {
        pic.src = imagearray[count];
        btnr.innerHTML = par[count++];

        // 添加动画
        btnl.style.transform = `translateX(${move}px) scale(${1 + count * 0.2})`;
        btnr.style.transform = `translateX(${move * 2}px) scale(${1 - count * 0.1})`;
        move += 20;

        if (count === 4) {
            btnl.style.transform = 'translateX(0) scale(2)';
            btnr.style.transform = 'translateX(100px) scale(0.5)';
        }
    }
    //添加功能




})
