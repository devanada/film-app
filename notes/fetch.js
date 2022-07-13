import axios from "axios";

/*
URL -> Endpoint atau alamat dari API
DATA/BODY -> Data yang akan dikirimkan ke API
CONFIG -> Konfigurasi untuk mengirimkan data ke API

// UNIVERSAL
var config = {
  method: 'get'/'post'/'put'/'delete',
  url: URL,
  headers: {
    'Content-Type': 'application/json', // ngasih info ke BE nya bahwa data yang dikirimkan adalah JSON
    'Authorization': 'Bearer ' + token // JWT
  }
};
axios(config)

// GET
biasa digunakan untuk mengambil data dari server
axios.get(URL, CONFIG)

// POST
biasa digunakan untuk mengirim/membuat data ke server (login, register, create post, create comment, etc)
axios.post(URL, BODY, CONFIG)

// PUT
biasa digunakan untuk mengubah data record yang sudah ada di server (update post, update comment, update profile, etc)
axios.put(URL, BODY, CONFIG)

// DELETE
biasa digunakan untuk menghapus data record yang sudah ada di server
axios.delete(URL, CONFIG)
*/
