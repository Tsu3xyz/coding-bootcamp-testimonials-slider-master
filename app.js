const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const img = document.querySelector(".container__photo--person-img");
const namePerson = document.querySelector(".name");
const jobPerson = document.querySelector(".job");
const text = document.querySelector(".main-paragraph");

const textJohn = `“ If you want to lay the best foundation
        possible I’d recommend taking this course. The depth the instructors go
        into is incredible. I now feel so confident about starting up as a
        professional developer. ”`;
const textTanya = `“ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”`;

btnNext.addEventListener("click", function () {
  changePerson();
});

btnPrev.addEventListener("click", function () {
  changePerson();
});

function changePerson() {
  img.classList.toggle("on");
  if (img.classList.contains("on")) {
    img.src = "./images/image-john.jpg";
    namePerson.innerText = "John Tarkpor";
    jobPerson.innerText = "Junior Front-end Developer";
    text.innerText = textJohn;
  } else {
    img.src = "./images/image-tanya.jpg";
    namePerson.innerText = "Tanya Sinclair";
    jobPerson.innerText = "UX Engineer";
    text.innerHTML = textTanya;
  }
}
