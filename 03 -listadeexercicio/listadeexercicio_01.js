const note1 = 5;
const note2 = 3;
const note3 = 7;
const media = (nota1 + note2 + note3) / 3;
console.log(media);

if(media < 5){
    console.log ('reprovação');
}else if(media => 5 && media <= 7){
    console.log ('recuperação');
}else{
    console.log('passou de semestre')
}