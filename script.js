
//First question. (Java Script Event Listeners)

function BlurHandler() {
    alert("JavaScript event triggered: BLUR");
  }
  
  function ChangeHandler() {
    alert('The change event has been triggered.');
  }
  
  function ClickHandler() {
    alert('The click event has been triggered.');
  }

  function DoubleClickHandler() {
    alert('The double click event has been triggered.');
  }
  
  function FocusHandler(x) {
    x.style.background = "yellow";
    alert('The focus event has been triggered.');
  }
  function KeydownHandler() {
    alert('The Keydown event has been triggered.');
  }

  function KeypressHandler() {
    alert('The Keypress event has been triggered.');
  }
  
  function KeyupHandler() {
    alert('The Keyup event has been triggered.');
  }
  
  function MouseDownHandler() {
    alert('The Mouse Down event has been triggered.');
  }

  function MouseMoveHandler() {
    alert('The Mouse Move event has been triggered.');
  }

  function MouseOutHandler() {
    alert('The Mouse Out event has been triggered.');
  }

  function MouseOverHandler() {
    alert('The Mouse Over event has been triggered.');
  }

  function MouseUpHandler() {
    alert('The Mouse Up event has been triggered.');
  }

  //End of part first question



  //Second question (Alert message dialog box)

  function alertMe(message) {
    alert(message);
  }
  alertMe("Hello! I am Joan Perolino Madeja, Nice To Meet You!");

  //end of second question
  
  
  //Third question (Prompt dialog box)
  function sayGreetings() {
    var userName = prompt("What is your name?");
    var greetingMessage = "Greetings " + userName + "!";
    alert(greetingMessage);
  }
  
