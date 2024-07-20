function cekKhodam(event){
    event.preventDefault();
    let nama = $('#search').val();
    if(nama == ''){
        alert('Isi Nama blokkk')
    }else{
        let status = [
            'isi',
            'kosong'
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if(randomStatus == 0){
            let khodam = [
                'Mio karbu',
                'Sepuh IT',
                'Beruang Ponorogo',
                'Naga hitam',
                'Buaya putih',
                'Harimau mewing',
                'Kominfo',
                'Wewe gombel',
                'Panda ngemis',
                'Ambatron',
                'Ambaruwo',
                'Cewe chindo',
                'Roro jonggrang',
                'Macan putih',
                'Banci hijrah',
                'Asep icikiwir',
                'Stasiun lempuyangan',
                'Garpu somay',
                'KING EISTEIN',
                'Kaisar jepang'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }else{
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function (){
    $('#btn-search').click(cekKhodam);
})
