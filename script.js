var boxes = document.querySelectorAll("div .quizBox");
var hBox = document.querySelector("div");
var qc = document.querySelectorAll("div")[1];
const rightSound = document.getElementById("right");
const wrongSound = document.getElementById("wrong");

var correctBox = -1;
var quizIndex = -1;

var prevIndex = -1;

var baku = ['akta', 'esai', 'frasa', 'kendaraan', 'masjid', 'saksama', 'sekadar', 'amendemen', 'aritmetika', 'kalender', 'kategori', 'meterai', 'metode', 'parlemen', 'antre', 'apotek', 'atlet', 'atmosfer', 'desain', 'deskripsi', 'kredit', 'personel', 'teoretis', 'hakikat', 'intelijen', 'monitor', 'nasihat', 'praktik', 'risiko', 'ritsleting', 'eksem', 'ekstrem', 'sistem', 'debit', 'dekret', 'komplet', 'konkret', 'objek', 'objektif', 'subjek', 'subjektif', 'anjlok', 'budek', 'gebuk', 'mandek', 'aktif', 'foto', 'hafal', 'konferensi', 'negatif', 'pasif', 'positif', 'sertifikat', 'tarif', 'transitif', 'paham', 'pikir', 'telepon', 'napas', 'permak', 'aktivis', 'kreativitas', 'konveksi', 'provinsi', 'universitas', 'asas', 'asasi', 'bus', 'guncang', 'gua', 'kumulatif', 'kolumnis', 'lubang', 'legislator', 'mabuk', 'mangkuk', 'surga', 'unta', 'roboh', 'pastor', 'pasteur', 'sirop', 'sopir', 'petai', 'tapai', 'frekuensi', 'konsekuensi', 'kuantitas', 'kuartal', 'kuitansi', 'kuintal', 'jadwal', 'proyek', 'izin', 'rezeki', 'zaman', 'zamrud', 'ijazah', 'hierarki', 'karier', 'cenderawasih', 'jenderal', 'menteri', 'kesatria', 'terampil', 'istri', 'prajurit', 'putra', 'putri', 'samudra', 'prancis', 'kafilah', 'khawatir', 'khotbah', 'makhluk', 'nakhoda', 'takhta', 'ahli', 'karisma', 'teknik', 'teknologi', 'ekspor', 'kompleks', 'taksi', 'batin', 'katolik', 'ortografi', 'patogen', 'teologi', 'analisis', 'diagnosis', 'sintesis', 'komoditas', 'komunitas', 'realitas', 'selebritas', 'mengubah', 'mencintai', 'pelepasan', 'penglihatan', 'penyewaan', 'doa', 'jumat', 'taat', 'andal', 'aneksasi', 'azan', 'embus', 'geladi', 'hadis', 'imbau', 'kanker', 'kongres', 'magrib', 'mi', 'peduli', 'ramadan', 'rapi', 'salat', 'silakan', 'standar', 'sumatra', 'telantar', 'telanjur', 'australia', 'bakso', 'ensiklopedia', 'karena', 'mukjizat', 'respons', 'seberang', 'standardisasi', 'lembap', 'masyhur', 'mazhab', 'mungkir', 'negosiasi', 'nekat', 'persen', 'sekretaris', 'sontek', 'menyontek', 'adapun', 'ataupun', 'bagaimanapun', 'biarpun', 'kalaupun', 'kendatipun', 'maupun', 'meskipun', 'sekalipun', 'sungguhpun', 'walaupun', 'adakalanya', 'bilamana', 'daripada', 'dukacita', 'belasungkawa', 'halalbihalal', 'kacamata', 'kasatmata', 'kosakata', 'olahraga', 'lokakarya', 'saputangan', 'segitiga', 'sukacita', 'sukarela', 'sukaria', 'tata bahasa', 'juru tulis', 'kerja sama', 'tepuk tangan', 'beri tahu', 'lipat ganda', 'tanda tangan', 'tanggung jawab', 'hancur lebur', 'sepak bola', 'acap kali', 'mara bahaya', 'sari pati', 'wali kota', 'inti sari', 'akhir', 'antarinstansi', 'baut', 'menyukseskan', 'mesti', 'motif', 'motivasi', 'dolar', 'film', 'hipotesis', 'ilmuwan', 'insaf', 'jenazah', 'kaidah', 'konduite', 'manajer', 'manajemen', 'memproklamasikan', 'menerapkan', 'menerjemahkan', 'produktivitas', 'serban', 'seriawan', 'stasiun', 'survei', 'sutra', 'syukur', 'telentang', 'mengesampingkan', 'mengkritik', 'memperhatikan', 'formal', 'ambulans', 'baterai', 'blangko', 'cedera', 'cengkih', 'cokelat', 'detail', 'detergen', 'elite', 'hektare', 'indra', 'jeriken', 'junior', 'kaus', 'legalisasi', 'lemari', 'memesona', 'mengapa', 'merek', 'miliar', 'mosaik', 'nafsu', 'negeri', 'nomor', 'omzet', 'perkedel', 'prangko', 'religius', 'ritme', 'saraf', 'sentimeter', 'telur', 'tenteram', 'tepercaya', 'terampil', 'tetapi', 'tradisional', 'transpor', 'triliun', 'utang', 'varietas', 'vila', 'video', 'takhayul', 'tampak', 'teladan', 'adhesi', 'afdal', 'akuatik', 'amfibi', 'amonia', 'astronaut', 'asyik', 'ateis', 'autentik', 'balig', 'balsam', 'berandal', 'berantas', 'berengsek', 'bolpoin', 'brankas', 'bujet', 'boling', 'cecak', 'cendera mata', 'cendekiawan', 'cengkerama', 'dasbor', 'debitur', 'digit', 'durian', 'ekspres', 'faksimile', 'fondasi', 'fotokopi', 'gaib', 'ganjal', 'genius', 'gereget', 'hangus', 'fotosintesis', 'intens', 'impor', 'isap', 'impit', 'intermeso', 'jagat', 'jasad', 'jemaah', 'katapel', 'kebun', 'kedaluwarsa', 'kiai', 'koboi', 'komersial', 'rapor', 'reaumur', 'reumatik', 'rezim', 'roh', 'sahih', 'sambal', 'seprai', 'setrika', 'syahid', 'tobat', 'tripleks', 'trofi', 'umrah', 'urgen', 'urine', 'ustaz', 'yogyakarta', 'zamrud', 'zamzam', 'rontgen', 'nahas', 'ikhlas', 'banderol', 'bazar', 'himne', 'filsuf', 'hidraulis', 'makin', 'neto', 'orisinal', 'pampat', 'pelesir', 'sediakala', 'spons', 'tekad', 'selawat', 'rida', 'zalim', 'takwa', 'dividen', 'etanol', 'familier', 'balans', 'kanguru', 'strok', 'berahi', 'berewok', 'diskotek', 'elektrode', 'feri', 'bumper', 'biseps', 'kreditur', 'tolok ukur', 'serdawa'];
var tidakBaku = ['akte', 'esay', 'frase', 'kenderaan', 'mesjid', 'seksama', 'sekedar', 'amandemen', 'aritmatika', 'kalendar', 'katagori', 'materai', 'metoda', 'parlamen', 'antri', 'apotik', 'atlit', 'atmosfir', 'disain', 'diskripsi', 'kridit', 'personil', 'teoritis', 'hakekat', 'intelejen', 'monetor', 'nasehat', 'praktek', 'resiko', 'retsleting', 'eksim', 'ekstrim', 'sistim', 'debet', 'dekrit', 'komplit', 'konkrit', 'obyek', 'obyektif', 'subyek', 'subyektif', 'anjlog', 'budeg', 'gebug', 'mandeg', 'aktip', 'photo', 'hapal', 'konperensi', 'negatip', 'pasip', 'positip', 'sertipikat', 'tarip', 'transitip', 'faham', 'fikir', 'telpon', 'nafas', 'vermak', 'aktifis', 'kreatifitas', 'konfeksi', 'propinsi', 'unipersitas', 'azas', 'azasi', 'bis', 'goncang', 'goa', 'komulatif', 'kolomnis', 'lobang', 'legislatur', 'mabok', 'mangkok', 'syurga', 'onta', 'rubuh', 'pastur', 'pastur', 'sirup', 'supir', 'pete', 'tape', 'frekwensi', 'konsekwensi', 'kwantitas', 'kwartal', 'kwitansi', 'kwintal', 'jadual', 'projek', 'ijin', 'rejeki', 'jaman', 'jamrud', 'ijasah', 'hirarki', 'karir', 'cendrawasih', 'jendral', 'mentri', 'ksatria', 'trampil', 'isteri', 'perajurit', 'putera', 'puteri', 'samudera', 'perancis', 'khafilah', 'kuatir', 'kotbah', 'mahluk', 'nahkoda', 'tahta', 'akhli', 'kharisma', 'tekhnik', 'tehnologi', 'eksport', 'komplek', 'taxi', 'bathin', 'katholik', 'orthografi', 'pathogen', 'theologi', 'analisa', 'diagnosa', 'sintesa', 'komoditi', 'komuniti', 'realita', 'selebriti', 'merubah', 'menyintai', 'penglepasan', 'pengelihatan', 'persewaan', "do'a", "jum'at", "ta'at", 'handal', 'anekisasi', 'adzan', 'hembus', 'gladi', 'hadist', 'himbau', 'kangker', 'konggres', 'maghrib', 'mie', 'perduli', 'ramadhan', 'rapih', 'shalat', 'silahkan', 'standard', 'sumatera', 'terlantar', 'terlanjur', 'australi', 'baso', 'ensiklopedi', 'karna', 'mujizat', 'respon', 'sebrang', 'standarisasi', 'lembab', 'mahsyur', 'mahzab', 'pungkir', 'negoisasi', 'nekad', 'prosen', 'sekertaris', 'contek', 'mencontek', 'ada pun', 'atau pun', 'bagaimana pun', 'biar pun', 'kalau pun', 'kendati pun', 'mau pun', 'meski pun', 'sekali pun', 'sungguh pun', 'walau pun', 'ada kalanya', 'bila mana', 'dari pada', 'duka cita', 'bela sungkawa', 'halal bihalal', 'kaca mata', 'kasat mata', 'kosa kata', 'olah raga', 'loka karya', 'sapu tangan', 'segi tiga', 'suka cita', 'suka rela', 'suka ria', 'tatabahasa', 'jurutulis', 'kerjasama', 'tepuktangan', 'beritahu', 'lipatganda', 'tandatangan', 'tanggungjawab', 'hancurlebur', 'sepakbola', 'acapkali', 'marabahaya', 'saripati', 'walikota', 'intisari', 'ahir', 'antar instansi', 'baud', 'mensukseskan', 'musti', 'motip', 'motifasi', 'dollar', 'filem', 'hipotesa', 'ilmiawan', 'insyaf', 'jenasah', 'kaedah', 'kondite', 'manager', 'managemen', 'memproklamirkan', 'menterapkan', 'menterjemahkan', 'produktifitas', 'sorban', 'sariawan', 'stasion', 'survey', 'sutera', 'sukur', 'terlentang', 'mengenyampingkan', 'mengeritik', 'memerhatikan', 'formil', 'ambulan', 'batere', 'blanko', 'cidera', 'cengkeh', 'coklat', 'detil', 'deterjen', 'elit', 'hektar', 'indera', 'jerigen', 'yunior', 'kaos', 'legalisir', 'almari', 'mempesona', 'kenapa', 'merk', 'milyar', 'mozaik', 'napsu', 'negri', 'nomer', 'omset', 'pergedel', 'perangko', 'relijius', 'ritma', 'syaraf', 'centimeter', 'telor', 'tentram', 'terpercaya', 'trampil', 'tapi', 'tradisionil', 'transport', 'trilyun', 'hutang', 'varitas', 'villa', 'vidio', 'tahayul', 'nampak', 'tauladan', 'adesi', 'afdol', 'aquatik', 'ampibi', 'amoniak', 'astronot', 'asik', 'atheis', 'otentik', 'baligh', 'balsem', 'brandal', 'brantas', 'brengsek', 'bolpen', 'brangkas', 'budget', 'bowling', 'cicak', 'cenderamata', 'cendikiawan', 'cengkrama', 'dasbord', 'debitor', 'dijit', 'duren', 'ekspress', 'faksimili', 'pondasi', 'foto kopi', 'ghoib', 'ganjel', 'jenius', 'greget', 'angus', 'fotosintesa', 'inten', 'import', 'hisap', 'himpit', 'intermezo', 'jagad', 'jasat', 'jamaah', 'ketapel', 'kebon', 'kadaluwarsa', 'kyai', 'koboy', 'komersil', 'raport', 'reamur', 'rematik', 'resim', 'ruh', 'sohih', 'sambel', 'seprei', 'seterika', 'sahid', 'taubat', 'triplek', 'tropi', 'umroh', 'urjen', 'urin', 'ustadz', 'jogjakarta', 'jamrud', 'zam-zam', 'ronsen', 'naas', 'iklas', 'bandrol', 'bazaar', 'hymne', 'filosof', 'hidraulik', 'semakin', 'netto', 'orisinil', 'mampat', 'plesir', 'sedia kala', 'spon', 'tekat', 'salawat', 'ridho', 'zolim', 'taqwa', 'deviden', 'ethanol', 'familiar', 'balance', 'kangguru', 'stroke', 'birahi', 'brewok', 'diskotik', 'elektroda', 'ferri', 'bemper', 'bisep', 'kreditor', 'tolak ukur', 'sendawa'];

function generateQuiz() {
	quizIndex = Math.floor(Math.random() * baku.length);
	correctBox = Math.floor(Math.random() * 2);

	correctAns = document.createElement("h1");
	correctAns.appendChild(document.createTextNode(baku[quizIndex]));

	wrongAns = document.createElement("h1");
	wrongAns.appendChild(document.createTextNode(tidakBaku[quizIndex]));

	if (correctBox === 0) {
		boxes[0].innerHTML = '';
		boxes[0].appendChild(correctAns);
		boxes[0].removeEventListener("click", rightAnswer);
		boxes[0].removeEventListener("click", wrongAnswer);
		boxes[0].addEventListener("click", rightAnswer);

		boxes[1].innerHTML = '';
		boxes[1].appendChild(wrongAns);
		boxes[1].removeEventListener("click", rightAnswer);
		boxes[1].removeEventListener("click", wrongAnswer);
		boxes[1].addEventListener("click", wrongAnswer);
	} else {
		boxes[1].innerHTML = '';
		boxes[1].appendChild(correctAns);
		boxes[1].removeEventListener("click", rightAnswer);
		boxes[1].removeEventListener("click", wrongAnswer);
		boxes[1].addEventListener("click", rightAnswer);

		boxes[0].innerHTML = '';
		boxes[0].appendChild(wrongAns);
		boxes[0].removeEventListener("click", rightAnswer);
		boxes[0].removeEventListener("click", wrongAnswer);
		boxes[0].addEventListener("click", wrongAnswer);
	}
}

function wrongAnswer() {
	qc.classList.toggle("red", true);
	wrongSound.play();

	hBox.innerHTML = '';
	var string = "Jawaban Anda salah! Jawaban yang benar adalah \"" + baku[quizIndex] + "\".";
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(string));
	hBox.appendChild(p);

	generateQuiz();
}

function rightAnswer() {
	qc.classList.toggle("red", false);
	rightSound.play();

	hBox.innerHTML = '';
	var string = "Jawaban Anda, \"" + baku[quizIndex] + "\", benar!";
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(string));
	hBox.appendChild(p);

	generateQuiz();
}

generateQuiz();