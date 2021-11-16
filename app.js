/*********************************Navigation bar****************************************/
// alert("Hii manoj");
// window.onscroll = function() {myFunction()};
//
// var navbar = document.querySelector(".navbar");
// console.log(navbar);
// var sticky = navbar.offsetTop;
// console.log(sticky);
// console.log(window.pageYOffset);
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

       /*********************Contact Details Validation************************/
document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('subject').addEventListener('blur',validateSubject);
document.getElementById('message').addEventListener('blur',validateMessage);

function validateName(){
  const name=document.getElementById('name');
  const valid=document.querySelector('.validate-name');
  // console.log(valid);
  const re=/^[a-zA-z]{3,24}$/;

  if(!re.test(name.value)){
      valid.style.display='block';
  }else{
    valid.style.display='none';
  }
}
function validateEmail(){
  const email=document.getElementById('email');
  const valid=document.querySelector('.validate-email');
  // console.log(valid);
  const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
      valid.style.display='block';
  }else{
    valid.style.display='none';
  }
}
function validateSubject(){
  const subject=document.getElementById('subject');
  const valid=document.querySelector('.validate-subject');
  // console.log(valid);
  const re=/^[a-zA-z]{4,10}$/;

  if(!re.test(subject.value)){
      valid.style.display='block';
  }else{
    valid.style.display='none';
  }
}
function validateMessage(){
  const message=document.getElementById('message');
  const valid=document.querySelector('.validate-message');
  // console.log(valid);
  const re=/^[a-zA-z]{8,}$/;

  if(!re.test(message.value)){
      valid.style.display='block';
  }else{
    valid.style.display='none';
  }
}

    /********************Submit form******************/
document.querySelector(".contact-form").addEventListener('submit',sendMessage);

function sendMessage(e){
     document.querySelector('.loading').style.display='block';
     setTimeout(messageResult,2000);
  e.preventDefault();
}

function messageResult(){
  console.log("message");
const name =  document.getElementById('name');
const email =  document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
if(name.value===''||email.value===''||subject.value===''||message.value===''){
  // console.log('Hii manoj');
  // document.querySelector('.loading').style.display='none';
  console.log("error");
  //Show error
  showError('Please fill all details');

}else{
  document.querySelector('.loading').style.display='none';
  //clear values
  name.value='';email.value='';subject.value='';message.value='';
  //display sent message
  document.querySelector('.sent-message').style.display='block';
  //clear sent message after 2 seconds
  setTimeout(clearSentMessage,2000);
 }
}
/******ClearSentMessage****/
function clearSentMessage(){
  document.querySelector('.sent-message').style.display='none';
}

/********showError*******/
function showError(error){
  document.querySelector('.loading').style.display='none';
  // console.log("jai hind");

  //Create div element
  const errorDiv=document.createElement('div');

  //Get elements
  const formGroup=document.querySelector(".contact-form");
  const formSend=document.querySelector(".form-send");
  //Add class
  errorDiv.className='error';
  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // console.log(errorDiv);

  //Insert error above submit button
  formGroup.insertBefore(errorDiv,formSend);
  //Clear error after 3 seconds
  setTimeout(clearError,3000);
}

//Clear error div
function clearError(){
  document.querySelector('.error').remove();
}
