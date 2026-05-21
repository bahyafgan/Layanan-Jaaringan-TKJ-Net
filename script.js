let nomor = 1;

function hitungTotal(){

    let harga =
    parseInt(
        document.getElementById(
            "paketSelect"
        ).value
    );

    let instalasi = 150000;

    let total =
    harga + instalasi;

    document
    .getElementById(
        "totalBiaya"
    )
    .innerHTML =
    "Total Biaya: Rp " +
    total.toLocaleString(
        "id-ID"
    );
}



document
.getElementById(
    "formPesan"
)
.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let nama =
    document
    .getElementById(
        "nama"
    )
    .value
    .trim();

    let alamat =
    document
    .getElementById(
        "alamat"
    )
    .value
    .trim();

    let paket =
    document
    .getElementById(
        "paketSelect"
    )
    .options[
        document
        .getElementById(
            "paketSelect"
        )
        .selectedIndex
    ]
    .text;

    if(
        nama === "" ||
        alamat === ""
    ){
        alert(
        "Mohon lengkapi data diri dan alamat pemasangan!"
        );
        return;
    }

    alert(
        "Terima kasih, " +
        nama +
        ". Pesanan layanan " +
        paket +
        " Anda sedang kami proses."
    );

    let tabel =
    document
    .getElementById(
        "listPesanan"
    );

    let row =
    tabel.insertRow();

    row.insertCell(0).innerHTML = nomor++;
    row.insertCell(1).innerHTML = nama;
    row.insertCell(2).innerHTML = alamat;
    row.insertCell(3).innerHTML = paket;

    document
    .getElementById(
        "formPesan"
    )
    .reset();

    document
    .getElementById(
        "totalBiaya"
    )
    .innerHTML =
    "Total Biaya: -";

});