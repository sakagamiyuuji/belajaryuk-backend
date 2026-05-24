const CURRICULUM_SEED = [
  {
    title: 'Matematika',
    description:
      'Mata pelajaran esensial yang disusun berdasarkan standar Kurikulum Merdeka dan persiapan SNBT. Mencakup logika dasar, aljabar linear, dan trigonometri yang berguna untuk pemecahan masalah.',
    iconUrl: '/icons/matematika.png',
    orderIndex: 1,
    chapters: [
      {
        title: 'Bab 1 Trigonometri',
        orderIndex: 1,
        materials: [
          {
            title: '1.1 Pengenalan Sinus, Cosinus, dan Tangen',
            contentType: 'text',
            contentBody: `Pengantar Singkat:
Pernahkah kamu membayangkan bagaimana cara mengukur tinggi sebuah menara tanpa harus memanjatnya? Dalam matematika, kita bisa menggunakan konsep trigonometri untuk menyelesaikan masalah tersebut. Trigonometri berasal dari bahasa Yunani, yaitu "trigonon" (segitiga) dan "metron" (ukuran). Bab ini adalah pondasi penting untuk memahami berbagai perhitungan jarak dan sudut dalam geometri.

Konsep Inti:
Trigonometri berfokus pada hubungan antara sudut dan panjang sisi dalam sebuah segitiga siku-siku. Tiga perbandingan dasar yang wajib dikuasai adalah Sinus (sin), Cosinus (cos), dan Tangen (tan).
1. Sinus (sin) adalah perbandingan antara panjang sisi di depan sudut (depan) dengan panjang sisi miring (miring). (Sin = De/Mi)
2. Cosinus (cos) adalah perbandingan antara panjang sisi di samping sudut (samping) dengan panjang sisi miring (miring). (Cos = Sa/Mi)
3. Tangen (tan) adalah perbandingan antara panjang sisi di depan sudut dengan sisi di samping sudut. (Tan = De/Sa)
Penting untuk mengingat mnemonic "SINDEMI, COSSAMI, TANDESA" guna mempermudah ingatan kamu saat ujian.

Contoh Singkat:
Diketahui sebuah segitiga siku-siku ABC dengan siku-siku di B. Jika panjang sisi tegak (AB) = 3 cm dan sisi mendatar (BC) = 4 cm, berapakah nilai sin A?
Langkah pertama, cari panjang sisi miring (AC) menggunakan teorema Pythagoras: AC = √(3² + 4²) = √(9 + 16) = √25 = 5 cm.
Karena sudut A berhadapan langsung dengan sisi BC, maka:
sin A = Depan / Miring = BC / AC = 4 / 5.
Latihan: Cobalah cari nilai cos A pada segitiga yang sama!

Ringkasan Poin Penting:
- Trigonometri dasar menggunakan prinsip segitiga siku-siku.
- Sinus = Sisi Depan / Sisi Miring (SINDEMI).
- Cosinus = Sisi Samping / Sisi Miring (COSSAMI).
- Tangen = Sisi Depan / Sisi Samping (TANDESA).

Referensi:
- Buku Paket Matematika SMA/MA Kelas X, Kemendikbudristek.`,
            likesCount: 1245,
            orderIndex: 1,
          },
          {
            title: '1.2 Memahami Sudut Istimewa',
            contentType: 'video',
            videoUrl: 'https://www.youtube.com/watch?v=-Y4w7E-cgWU',
            likesCount: 980,
            orderIndex: 2,
          },
          {
            title: '1.3 Aturan Sinus dan Cosinus',
            contentType: 'text',
            contentBody: `Pengantar Singkat:
Jika pada subbab sebelumnya kita hanya bermain dengan segitiga siku-siku, bagaimana jika kita berhadapan dengan segitiga sembarang? Di sinilah "Aturan Sinus" dan "Aturan Cosinus" berperan penting. Aturan ini sangat berguna untuk menentukan panjang sisi atau besar sudut pada segitiga apa pun, baik segitiga lancip maupun segitiga tumpul.

Konsep Inti:
1. Aturan Sinus: Menyatakan bahwa perbandingan antara panjang suatu sisi dengan nilai sinus sudut dihadapannya adalah selalu konstan.
Rumusnya: a / sin A = b / sin B = c / sin C
Aturan ini utamanya digunakan jika diketahui dua sudut dan satu sisi, atau dua sisi dan satu sudut yang saling berhadapan.

2. Aturan Cosinus: Merupakan perluasan dari Teorema Pythagoras untuk segitiga sembarang. Aturan ini menyatakan hubungan antara kuadrat salah satu sisi dengan kuadrat dua sisi lainnya dikurangi dua kali perkalian sisi tersebut dengan cosinus sudut yang diapitnya.
Rumusnya:
a² = b² + c² - 2bc . cos A
b² = a² + c² - 2ac . cos B
c² = a² + b² - 2ab . cos C
Digunakan jika diketahui tiga sisi (SSS) atau dua sisi dan satu sudut apit (SAS).

Contoh Singkat:
Pada segitiga ABC, diketahui panjang b = 8 cm, c = 5 cm, dan sudut A = 60°. Tentukan panjang sisi a!
Kita gunakan Aturan Cosinus karena diketahui dua sisi dan satu sudut apit:
a² = 8² + 5² - 2(8)(5) cos 60°
a² = 64 + 25 - 80(0,5)
a² = 89 - 40 = 49
a = √49 = 7 cm.
Latihan: Cobalah cari nilai sudut B jika menggunakan aturan sinus!

Ringkasan Poin Penting:
- Aturan Sinus dipakai saat sisi dan sudut yang berhadapan telah diketahui.
- Aturan Cosinus dipakai saat kita mengetahui 3 sisi utuh, atau 2 sisi dan 1 sudut yang diapitnya.
- Kedua aturan ini membebaskan kita dari batasan segitiga siku-siku.

Referensi:
- Modul Pengayaan Matematika Umum Kelas X, Erlangga.`,
            likesCount: 850,
            orderIndex: 3,
          },
        ],
      },
      {
        title: 'Bab 2 Sistem Persamaan Linear',
        orderIndex: 2,
        materials: [
          {
            title: '2.1 Konsep Dasar SPLDV',
            contentType: 'text',
            contentBody: `Pengantar Singkat:
Pernahkah kamu berbelanja jajan di kantin sekolah? Misalnya, kamu membeli 2 roti dan 3 es teh seharga Rp12.000, sedangkan temanmu membeli 1 roti dan 2 es teh seharga Rp7.000. Bagaimana cara mengetahui harga masing-masing barang? Nah, masalah kehidupan sehari-hari ini dapat dimodelkan ke dalam matematika menggunakan Sistem Persamaan Linear Dua Variabel (SPLDV).

Konsep Inti:
Persamaan Linear Dua Variabel adalah persamaan yang mengandung dua variabel (biasanya disimbolkan x dan y) dengan pangkat tertinggi dari setiap variabelnya adalah satu. Bentuk umumnya ditulis sebagai ax + by = c, di mana a dan b tidak boleh nol.
Ketika kita memiliki dua persamaan linear yang saling berkaitan dalam satu konteks dan memiliki penyelesaian yang sama, maka kumpulan persamaan tersebut disebut sebagai Sistem Persamaan Linear Dua Variabel (SPLDV).
Bentuk umum SPLDV:
a₁x + b₁y = c₁
a₂x + b₂y = c₂
Penyelesaian SPLDV adalah sepasang titik nilai (x, y) yang jika disubstitusikan akan membuat kedua persamaan di atas menjadi pernyataan yang bernilai benar.

Contoh Singkat:
Tentukan apakah (x=2, y=1) adalah penyelesaian yang sah dari sistem:
1) x + y = 3
2) 2x - y = 3
Langkah: Substitusi (masukkan) nilai x dan y ke kedua persamaan.
Persamaan 1: 2 + 1 = 3 (Benar)
Persamaan 2: 2(2) - 1 = 4 - 1 = 3 (Benar)
Karena memenuhi kondisi dari kedua persamaan, maka (2,1) adalah himpunan penyelesaiannya. Latihan: Buatlah model matematika dari cerita roti dan es teh di bagian pengantar tadi!

Ringkasan Poin Penting:
- SPLDV selalu terdiri dari dua persamaan linear dengan dua variabel yang sama.
- Pangkat tertinggi variabel selalu satu (linear).
- Himpunan penyelesaian adalah titik potong (x, y) yang memenuhi semua persamaan dalam sistem tersebut.

Referensi:
- Matematika SMA/MA Kelas X, Pusat Kurikulum dan Perbukuan.`,
            likesCount: 1120,
            orderIndex: 1,
          },
          {
            title: '2.2 Sistem Persamaan Linear Tiga Variabel (SPLTV)',
            contentType: 'video',
            videoUrl: 'https://www.youtube.com/watch?v=JVANLCfV70w',
            likesCount: 1560,
            orderIndex: 2,
          },
          {
            title: '2.3 Metode Penyelesaian SPL',
            contentType: 'text',
            contentBody: `Pengantar Singkat:
Setelah memahami konsep dasar dari Sistem Persamaan Linear, pertanyaan selanjutnya adalah bagaimana cara menyelesaikannya dengan cepat dan tepat tanpa harus menebak-nebak angka? Ada beberapa metode yang umum diajarkan di kelas, namun yang paling sering digunakan dalam ujian maupun penerapan sehari-hari adalah Metode Substitusi dan Metode Eliminasi.

Konsep Inti:
1. Metode Substitusi: Menyelesaikan SPL dengan cara mengganti (menyubstitusi) salah satu variabel dari satu persamaan ke dalam persamaan lainnya. Cara ini sangat efektif dan cepat jika salah satu persamaan sudah memiliki bentuk eksplisit tunggal, seperti x = ... atau y = ...
2. Metode Eliminasi: Menyelesaikan SPL dengan cara menghilangkan (mengeliminasi) salah satu variabel dengan menjumlahkan atau mengurangkan kedua baris persamaan. Ingat, kita harus menyamakan koefisien dari variabel yang ingin dihilangkan terlebih dahulu dengan cara mengalikan baris persamaan dengan konstanta tertentu.
Seringkali, cara paling praktis di soal SNBT adalah Metode Campuran, yaitu melakukan eliminasi terlebih dahulu untuk mencari satu variabel, lalu menyubstitusikan nilai tersebut untuk mencari sisa variabel lainnya.

Contoh Singkat:
Selesaikan:
2x + y = 5 ... (Persamaan 1)
x - y = 1 ... (Persamaan 2)
Gunakan Eliminasi (jumlahkan kedua persamaan secara vertikal untuk menghilangkan y):
(2x + y) + (x - y) = 5 + 1
3x = 6  =>  x = 2
Kemudian, gunakan Substitusi (masukkan x = 2 ke Persamaan 2):
2 - y = 1  =>  y = 1
Himpunan Penyelesaian = {(2, 1)}.
Latihan: Coba selesaikan sistem persamaan x + 2y = 8 dan 3x - y = 3 dengan memakai cara campuran!

Ringkasan Poin Penting:
- Substitusi berarti mengganti satu variabel dengan sebuah ekspresi aljabar dari persamaan lain.
- Eliminasi berarti menghilangkan total satu variabel menggunakan operasi penjumlahan atau pengurangan.
- Kombinasi/campuran dari keduanya seringkali menjadi cara terkuat untuk menemukan solusi.

Referensi:
- Buku Paket Konsep Matematika Kelas 10, Penerbit Yudhistira.`,
            likesCount: 1400,
            orderIndex: 3,
          },
        ],
      },
      {
        title: 'Bab 3 Fungsi Kuadrat',
        orderIndex: 3,
        materials: [
          {
            title: '3.1 Bentuk Umum dan Grafik Fungsi Kuadrat',
            contentType: 'text',
            contentBody: `Pengantar Singkat:
Ketika kamu melempar bola basket ke dalam ring, lintasan yang dibentuk oleh bola tersebut di udara tidaklah lurus, melainkan melengkung. Bentuk lengkungan mulus inilah yang dalam matematika disebut sebagai kurva parabola. Parabola merupakan representasi grafis dua dimensi dari materi yang akan kita pelajari kali ini, yaitu Fungsi Kuadrat.

Konsep Inti:
Fungsi kuadrat adalah fungsi polinomial yang memiliki variabel dengan pangkat tertingginya adalah dua. Bentuk umumnya selalu ditulis sebagai:
f(x) = ax² + bx + c
dengan syarat wajib yaitu 'a' tidak sama dengan nol (a ≠ 0), serta a, b, dan c merupakan anggota himpunan bilangan real.
- Angka 'a' (koefisien x²) sangat krusial karena menentukan arah bukaan kurva parabola. Jika a > 0 (bernilai positif), grafik parabola akan terbuka ke atas (membentuk seperti mangkuk). Sebaliknya, jika a < 0 (bernilai negatif), grafik parabola akan terbuka ke bawah (membentuk payung).
- Angka 'c' (konstanta) menunjukkan letak titik potong grafik tepat terhadap sumbu Y. Semakin besar nilai c, semakin tinggi titik potongnya di sumbu vertikal.

Contoh Singkat:
Diketahui fungsi kuadrat f(x) = x² - 4x + 3.
- Karena nilai a = 1 (positif), maka kurvanya dipastikan terbuka ke arah atas.
- Titik potong pada sumbu Y dapat dicari secara cepat dengan menetapkan variabel x = 0.
f(0) = (0)² - 4(0) + 3 = 3. Jadi kurva tersebut akan memotong sumbu Y di koordinat titik (0,3).
Latihan: Tentukan arah bukaan kurva dan titik potong sumbu Y untuk fungsi g(x) = -2x² + 5x - 7 secara mandiri!

Ringkasan Poin Penting:
- Bentuk umum fungsi kuadrat adalah f(x) = ax² + bx + c.
- Nilai 'a' menentukan apakah bentuk parabola memeluk ke atas (a > 0) atau ke bawah (a < 0).
- Titik potong terhadap sumbu Y selalu stabil dan bernilai mutlak di titik koordinat (0, c).

Referensi:
- Matematika SMA/MA Kurikulum 2013 Revisi, Kemdikbud.`,
            likesCount: 1780,
            orderIndex: 1,
          },
          {
            title: '3.2 Cara Menggambar Grafik Fungsi Kuadrat',
            contentType: 'video',
            videoUrl: 'https://www.youtube.com/watch?v=IcQAjHTW5z8',
            likesCount: 1900,
            orderIndex: 2,
          },
          {
            title: '3.3 Menentukan Titik Puncak dan Sumbu Simetri',
            contentType: 'text',
            contentBody: `Pengantar Singkat:
Setiap kali kamu melihat sebuah lintasan berbentuk parabola—misalnya kembang api yang diluncurkan tinggi ke udara—pasti ada satu titik tertinggi sesaat sebelum kembang api itu kembali jatuh terbawa gravitasi. Dalam matematika Fungsi Kuadrat, titik ekstrem yang presisi ini disebut sebagai Titik Puncak atau Titik Balik. Bagaimana cara kita menghitung posisi pastinya di atas sebuah bidang kartesius?

Konsep Inti:
Untuk menemukan koordinat pasti titik puncak (xp, yp) dari suatu fungsi kuadrat f(x) = ax² + bx + c, kita menggunakan dua buah rumus esensial:
1. Sumbu Simetri (xp): Adalah garis maya vertikal yang membelah parabola menjadi dua sayap bagian yang simetris sempurna bagaikan cermin. Rumusnya adalah xp = -b / (2a).
2. Nilai Optimum (yp): Adalah letak nilai fungsi (y) saat parabola sedang berada tepat di puncaknya. Rumusnya dapat dicari lewat yp = -D / (4a), di mana D adalah diskriminan (D = b² - 4ac). Alternatif yang lebih mudah, kamu bisa langsung mensubstitusikan nilai xp ke dalam fungsi awal: yp = f(xp).
Gabungan dari elemen (xp, yp) inilah yang secara utuh disebut Koordinat Titik Puncak.

Contoh Singkat:
Tentukan koordinat titik puncak dari f(x) = x² - 6x + 5!
Identifikasi angka: a = 1, b = -6, c = 5.
Langkah 1 (Sumbu Simetri): xp = -(-6) / (2*1) = 6 / 2 = 3.
Langkah 2 (Nilai Optimum): Substitusi xp = 3 kembali ke persamaan fungsi.
yp = (3)² - 6(3) + 5 = 9 - 18 + 5 = -4.
Jadi, koordinat mutlak dari titik puncaknya berada di (3, -4).
Latihan: Tentukan sumbu simetri dari fungsi f(x) = -2x² + 8x - 3!

Ringkasan Poin Penting:
- Titik puncak bisa bersifat titik maksimum (jika parabola terbuka ke bawah) atau bersifat titik minimum (jika terbuka ke atas).
- Rumus Sumbu Simetri wajib: x = -b / (2a).
- Titik optimum lebih cepat dicari dengan mensubstitusi hasil sumbu simetri kembali ke persamaan soal.

Referensi:
- Modul Pintar Matematika Wajib SMA Kelas X, Penerbit Erlangga.`,
            likesCount: 890,
            orderIndex: 3,
          },
        ],
      },
    ],
  },
  {
    title: 'Bahasa Inggris',
    description:
      'Pelajari berbagai jenis teks (Narrative, Analytical Exposition) dan tata bahasa esensial (Passive Voice) yang dirancang khusus untuk persiapan ujian SMA dan SNBT.',
    iconUrl: '/icons/bahasa-inggris.png',
    orderIndex: 2,
    chapters: [
      {
        title: 'Bab 1 Narrative Text',
        orderIndex: 1,
        materials: [
          {
            title: '1.1 Mengenal Narrative Text',
            contentType: 'text',
            contentBody: `Pengantar:
Pernahkah kamu mendengar cerita legenda seperti Sangkuriang atau dongeng Cinderella? Cerita-cerita fiksi tersebut dalam bahasa Inggris disebut sebagai Narrative Text. Mari kita pelajari lebih dalam!

Konsep Inti:
Narrative Text adalah teks yang berisi cerita imajinatif atau fiktif dengan tujuan utama menghibur (to entertain/amuse) para pembacanya. Teks ini menceritakan kejadian di masa lalu yang memiliki rangkaian peristiwa dengan alur dan konflik tertentu. Beberapa jenis narrative text yang sering kita temui di sekolah adalah fairytale (dongeng ajaib), folklore (cerita rakyat), myth (mitos), dan fable (fabel - cerita tokoh binatang).

Contoh:
Dalam kisah "The Hare and the Tortoise" (Kelinci dan Kura-kura), cerita ini masuk ke dalam kategori fable. Penulis menggunakan karakter binatang seolah-olah memiliki sifat manusia untuk menyampaikan pesan moral kepada pembacanya.

Ringkasan Poin Penting:
- Tujuan: Menghibur pembaca (to entertain).
- Ciri khas: Berupa cerita fiksi, setting di masa lalu, serta memiliki konflik dan penyelesaian.
- Jenis: Fable, legend, myth, fairy tale.

Latihan:
Bacalah cuplikan berikut: "Once upon a time, there lived a poor boy named Malin Kundang...". Berdasarkan cuplikan tersebut, termasuk ke dalam jenis narrative text apakah cerita itu?

Referensi: Buku Bahasa Inggris SMA/MA Kelas X Kemdikbud; British Council "Narrative texts".`,
            likesCount: 1450,
            orderIndex: 1,
          },
          {
            title: '1.2 Struktur dan Unsur Kebahasaan Narrative Text',
            contentType: 'video',
            videoUrl: 'https://www.youtube.com/watch?v=pQMJpJUJbXk',
            likesCount: 1210,
            orderIndex: 2,
          },
          {
            title: '1.3 Contoh dan Analisis Narrative Text',
            contentType: 'text',
            contentBody: `Pengantar:
Setelah mengetahui apa itu Narrative Text, sekarang saatnya kita melihat bagaimana struktur teks (generic structure) diterapkan secara langsung dalam sebuah cerita.

Konsep Inti:
Sebuah Narrative Text yang baik umumnya terdiri dari tiga bagian utama: Orientation (pengenalan tokoh, tempat, waktu), Complication (munculnya masalah atau puncak konflik), dan Resolution (penyelesaian masalah, bisa berupa happy ending atau sad ending). Terkadang penulis menambahkan Re-orientation (pesan moral atau kesimpulan) di bagian paling akhir.

Contoh:
- Orientation: Long ago, in a dense forest, lived a little girl named Snow White.
- Complication: Her stepmother was jealous of her beauty and ordered a huntsman to kill her. Snow White ran away and found a small cottage.
- Resolution: She lived happily with seven dwarfs until the prince found her and they married.

Ringkasan Poin Penting:
- Orientation: Berisi Who (siapa), Where (di mana), When (kapan).
- Complication: Masalah mulai muncul dan memuncak.
- Resolution: Masalah berhasil diselesaikan.

Latihan:
Coba tentukan bagian Orientation dari legenda "Bawang Merah dan Bawang Putih" menggunakan kalimatmu sendiri!

Referensi: Ruangguru "Struktur Narrative Text"; Zenius Education.`,
            likesCount: 980,
            orderIndex: 3,
          },
        ],
      },
      {
        title: 'Bab 2 Analytical Exposition Text',
        orderIndex: 2,
        materials: [
          {
            title: '2.1 Apa itu Analytical Exposition?',
            contentType: 'text',
            contentBody: `Pengantar:
Ketika kamu membaca artikel opini di koran atau melihat kampanye bahaya merokok, teks tersebut berusaha meyakinkanmu akan suatu pandangan. Dalam bahasa Inggris, teks argumen semacam ini disebut Analytical Exposition.

Konsep Inti:
Analytical Exposition adalah teks yang bertujuan untuk meyakinkan pembaca bahwa topik yang dibahas adalah hal yang penting (to persuade the reader that the idea is important matter). Teks ini tidak memaksa pembaca untuk bertindak/melakukan sesuatu, melainkan hanya memberikan argumen-argumen logis untuk mendukung pendapat si penulis secara analitis.

Contoh:
Pada artikel yang berjudul "The Importance of Drinking Water", penulis akan memberikan argumen seperti: air dapat mencegah dehidrasi, membantu melancarkan pencernaan, dan menjaga kesehatan kulit. Pembaca diajak setuju bahwa minum air itu krusial.

Ringkasan Poin Penting:
- Tujuan: Meyakinkan pembaca tentang pentingnya suatu isu.
- Sifat: Berisi opini yang logis dan didukung fakta (argumentatif).
- Perbedaan: Tidak berisi kalimat perintah atau anjuran tindakan (berbeda dengan Hortatory Exposition).

Latihan:
Manakah dari judul berikut yang paling cocok untuk teks analytical exposition? a) "How to Make a Cake", b) "Why We Should Stop Bullying".

Referensi: English First (EF) "Analytical Exposition Text"; Buku Bahasa Inggris SMA Kelas XI Kemdikbud.`,
            likesCount: 850,
            orderIndex: 1,
          },
          {
            title: '2.2 Ciri-ciri dan Struktur Analytical Exposition',
            contentType: 'video',
            videoUrl: 'https://www.youtube.com/watch?v=eLaOXal7LOo',
            likesCount: 1540,
            orderIndex: 2,
          },
          {
            title: '2.3 Latihan Memahami Analytical Exposition',
            contentType: 'text',
            contentBody: `Pengantar:
Memahami teks opini atau argumen sering kali menantang karena kita harus bisa menangkap gagasan pokok dari sang penulis. Mari kita bedah struktur penyusunnya!

Konsep Inti:
Struktur dari Analytical Exposition terdiri dari tiga bagian yaitu: Thesis (pengenalan isu/topik dan posisi penulis), Arguments (rangkaian alasan atau bukti yang mendukung posisi penulis), dan Reiteration (penegasan ulang posisi penulis sebagai kesimpulan akhir). Dari segi kebahasaan, teks ini banyak menggunakan Simple Present Tense, evaluative words, dan konjungsi kausalitas (seperti because, therefore, consequently).

Contoh:
- Thesis: Reading is essential for our brain development.
- Arguments: Firstly, it improves focus. Secondly, it expands our vocabulary significantly.
- Reiteration: In conclusion, reading habit is undeniably beneficial for mental development and cognitive skills.

Ringkasan Poin Penting:
- Thesis: Memperkenalkan ide utama atau pendapat dasar.
- Arguments: Berisi rangkaian gagasan pendukung (firstly, secondly, moreover).
- Reiteration: Bagian penutup yang menegaskan ulang topik (in conclusion, from the facts above).

Latihan:
Pada kalimat "Therefore, limiting screen time is crucial for teenagers", kalimat ini biasanya terletak di bagian struktur yang mana?

Referensi: Pahamify "Materi Analytical Exposition"; Cambridge Dictionary.`,
            likesCount: 790,
            orderIndex: 3,
          },
        ],
      },
      {
        title: 'Bab 3 Passive Voice',
        orderIndex: 3,
        materials: [
          {
            title: '3.1 Pengantar Passive Voice',
            contentType: 'text',
            contentBody: `Pengantar:
Pernahkah kamu memperhatikan perbedaan antara kalimat "Budi menendang bola" dan "Bola ditendang oleh Budi"? Kalimat kedua merupakan contoh bentuk pasif. Bagaimana cara menggunakannya dalam bahasa Inggris?

Konsep Inti:
Passive Voice (kalimat pasif) adalah pola struktur kalimat di mana subjek dikenai tindakan (verb), bukan melakukan tindakan. Dalam bahasa Inggris, kalimat pasif umum digunakan ketika objek dari tindakan terasa lebih penting untuk ditonjolkan, atau ketika pelaku tindakan (agent) tidak diketahui / tidak penting untuk disebutkan. Syarat utamanya, kalimat aktif yang diubah harus memiliki objek (transitive verb).

Contoh:
- Aktif: My mother cooks fried rice. (Ibu saya memasak nasi goreng).
- Pasif: Fried rice is cooked by my mother. (Nasi goreng dimasak oleh ibu saya).
Pada contoh pasif, fokusnya ada pada "nasi goreng".

Ringkasan Poin Penting:
- Fokus pada benda/orang yang dikenai tindakan, bukan pelakunya.
- Menggunakan struktur wajib: Subject + To Be + Verb 3 (Past Participle).
- Penggunaan kata "by" (oleh) bersifat opsional, hanya dipakai jika pelaku dirasa perlu disebutkan.

Latihan:
Coba terjemahkan kalimat ini: "The window was broken by someone." Apakah makna dari kalimat tersebut aktif atau pasif?

Referensi: Grammarly Blog "Passive Voice"; Modul Bahasa Inggris SMA Kelas XI.`,
            likesCount: 1890,
            orderIndex: 1,
          },
          {
            title: '3.2 Rumus dan Penggunaan Passive Voice',
            contentType: 'video',
            videoUrl: 'https://www.youtube.com/watch?v=l0oAWEKvMe8',
            likesCount: 1950,
            orderIndex: 2,
          },
          {
            title: '3.3 Mengubah Kalimat Aktif menjadi Pasif',
            contentType: 'text',
            contentBody: `Pengantar:
Mengubah kalimat aktif menjadi pasif membutuhkan ketelitian, terutama dalam menyesuaikan Tenses (keterangan waktu) dan penggunaan To Be yang tepat. Mari kita pelajari polanya bersama-sama.

Konsep Inti:
Ada 4 aturan utama mengubah kalimat aktif menjadi pasif: 1) Pindahkan Objek dari kalimat aktif menjadi Subjek di kalimat pasif. 2) Sesuaikan To Be dengan subjek baru dan Tense dari kalimat asal. 3) Ubah kata kerja utama menjadi Verb 3 (Past Participle). 4) Pindahkan Subjek kalimat aktif ke belakang sebagai objek pelengkap dengan didahului kata "by" (opsional).

Contoh (berdasarkan Tense):
- Simple Present: She writes a letter -> A letter is written by her.
- Simple Past: He bought a new car -> A new car was bought by him.
- Present Continuous: They are painting the wall -> The wall is being painted by them.

Ringkasan Poin Penting:
- Subjek bertukar posisi secara menyilang dengan Objek.
- Kata kerja yang dipakai wajib berupa Verb 3 dalam semua Tense.
- To Be (is/am/are, was/were, is being, has been) berubah menyesuaikan Tense asli kalimat tersebut.

Latihan:
Ubah kalimat Simple Past berikut menjadi kalimat pasif (Passive Voice): "The mechanic repaired my car yesterday."

Referensi: Cambridge University Press "Passive forms"; Zenius "Materi Passive Voice SMA".`,
            likesCount: 1675,
            orderIndex: 3,
          },
        ],
      },
    ],
  },
];

module.exports = CURRICULUM_SEED;
