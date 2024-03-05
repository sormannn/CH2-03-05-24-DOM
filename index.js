// test1 - Memanipulasi HTML

document.getElementById("test1").innerHTML = "Muhammad Suryandoko";

// test2 - Tambah elemen dalam html menggunakan createElement

const divDemo = document.getElementById("test2");
const paragraph = document.createElement("p");

paragraph.innerHTML = "Suryandoko Muhammad";
divDemo.append(paragraph);

// test3 - hapus elemen html

const test3 = document.getElementById("test3");
test3.remove();

// test4 - mengganti gambar yg baru menggunakan dom

document.getElementById("gambarganti").src = "burung.png";

// test5 - kita mengambil nilai dari sebuah input
// dan menampilkannya dengan console.log()!

const name = document.getElementById("name").value;
console.log(name);
// tulis console.log(name); pada console lalu akan muncul "Ninja Ken"


//test6 - mengubah css (warna tulisan contohnya)

document.getElementById("test6").style.color = "#FF00FF"

//test7 - mengubah tulisan button saat di klik menggunakan function

function test7(obj){
    obj.innerHTML = "Suryandoko";
    obj.style.color = "blue";
}

//test8 - menambah/menghapus

// Beberapa event yang sering digunakan di dalam halaman web adalah:
// onclick - ketika sebuah element HTML diklik.
// onmouseover dan onmouseout - ketika cursor berada di atas sebuah element HTML atau ketika cursor tidak lagi berada di atasnya.
// onchange - ketika sebuah nilai pada sebuah element input berubah.

// Selain menggunakan onclick atau event lainnya, Kita juga bisa
// menambahkan sebuah event pada element dengan
// element.addEventListener(nama event, function) atau menghapus
// sebuah event dengan element.removeEventListener(nama event, function).
