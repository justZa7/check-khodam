document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let result = document.getElementById('result');
    
    let khodams = [
        'Kucing mewing', 
        'Slamet kopling', 
        'Izul prasmanan', 
        'Yoga warteg', 
        'Ubi jalar',
        'Lato lato mojokerto',
        'Supra 2000cc braktaktak',
        'Puding cokelat hambali',
        'Laba laba sunda',
        'Anggrek mekar pontianak',
        'Kapal karam',
        'Zeus',
        'Suki liar',
        'Kicau mania',
        'Juna bin junaide',
        'Gilang ojol',
        'Kak gem',
        'Kereta argo ngawi jesgejes',
        'Pokemon bogor',
        'Icikiwir',
        'Bayi kokonut',
        'Tung tung sahur',
        'Brr brr patapim',
        'Boneka Ambalabu',
        'lirili larila',
        'Ubi hitam sahroni',
        'Bahlil hitam',
    ];
    let randomIndex = Math.floor(Math.random() * khodams.length);
    let khodam = khodams[randomIndex];
    
    result.textContent = `${khodam}`;
});


