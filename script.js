var audioInfo = [
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: --.- <br/> Original Text: Q",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: .-- <br/> Original Text: W",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: . <br/> Original Text: E",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: .- <br/> Original Text: A",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: ... <br/> Original Text: S",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: -.. <br/> Original Text: D",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: --.. <br/> Original Text: Z",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: -..- <br/> Original Text: X",
  "Speed: 10WPM / Tone: 1000Hz <br/> Dots and Dashes: -.-. <br/> Original Text: C"
];

var buttonList = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

$(document).ready(function () {
  $(document).keydown(function (event) {
    switch (String.fromCharCode(event.which)) 
    {
      case 'Q':
      case 'q':
        playAudio(0);
        break;
      case 'W':
      case 'w':
        playAudio(1);
        break;
      case 'E':
      case 'e':
        playAudio(2);
        break;
      case 'A':
      case 'a':
        playAudio(3);
        break;
      case 'S':
      case 's':
        playAudio(4);
        break;
      case 'D':
      case 'd':
        playAudio(5);
        break;
      case 'Z':
      case 'z':
        playAudio(6);
        break;
      case 'X':
      case 'x':
        playAudio(7);
        break;
      case 'C':
      case 'c':
        playAudio(8);
        break;
      //default:							//Only for testing - Send keypresses to the console
      //console.log(event.which);
    };
  });

  //Capture the mouse clicks
  $('#Qbutton').click(function () {
    playAudio(0);
  });


  $('#Wbutton').click(function () {
    playAudio(1);
  });

  $('#Ebutton').click(function () {
    playAudio(2);
  });

  $('#Abutton').click(function () {
    playAudio(3);
  });

  $('#Sbutton').click(function () {
    playAudio(4);
  });

  $('#Dbutton').click(function () {
    playAudio(5);
  });

  $('#Zbutton').click(function () {
    playAudio(6);
  });

  $('#Xbutton').click(function () {
    playAudio(7);
  });

  $('#Cbutton').click(function () {
    playAudio(8);
  });

});

function playAudio(clip) {
  $('#description').empty();
  $('#description').append(audioInfo[clip]);
  document.getElementById(buttonList[clip]).play();
}
