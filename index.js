import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';
import dayjs from 'dayjs';
import 'dayjs/locale/id.js';

const NAMA_LENGKAP = "Ajeng Sakinah Wulandari";
const NIM = "F1D022001";
const MOTIVATIONAL_QUOTE = "Kata mama teruslah bermimpi, maka jangan heran kalau aku sering tidur.";


const dataDiri = `
${chalk.blue.bold('Nama Lengkap:')} ${chalk.white(NAMA_LENGKAP)}
${chalk.green.bold('NIM:')} ${chalk.white(NIM)}
`.trim();

const boxDataDiri = boxen(dataDiri, {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'white',
  title: 'Data Mahasiswa',
  titleAlignment: 'center',
});

console.log(boxDataDiri);


const pesanSapi = cowsay.say({
  text: MOTIVATIONAL_QUOTE,
  e: "oO", // Mata sapi
  T: "U ", // Lidah sapi
  f: "dragon" // Menggunakan karakter naga
});

console.log(gradient.pastel(pesanSapi));


figlet.text(NAMA_LENGKAP, {
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 100,
  whitespaceBreak: true
}, function(err, data) {
  if (err) {
    console.log('Ada yang salah...');
    console.dir(err);
    return;
  }
  console.log(gradient.rainbow(data));
  
  dayjs.locale('id');
  const waktuSekarang = dayjs().format('dddd, D MMMM YYYY HH:mm:ss');
  console.log(chalk.yellow.italic(`\nScript dijalankan pada: ${waktuSekarang}`));
});