const form = document.querySelector("[data-form-ask]");
const ball = document.querySelector("[data-ball]");
const submitBtn = document.querySelector("[data-form-submit]");
const responseField = document.querySelector("[data-response]");

const random = (min, max) => Math.floor(Math.random() * max) + min;

const startGame = async () => {
  const input = form.askInput.value;

  if (input.trim() === "") {
    responseField.textContent = "seriously?";

    ball.style.backgroundImage = `url(./media/sticker${random(1, 4)}.gif)`;
    console.log(ball.style.backgroundImage);
    submitBtn.disabled = false;
    return;
  }

  ball.style.backgroundImage = "radial-gradient(#7a41ab 15%, #620d7a, #540268)";
  const isGif = random(0, 10) >= 7 ? true : false;
  const swapGif = random(0, 10) >= 8 >= 0.5 ? true : false;

  if (random(0, 10) >= 5) {
    responseField.textContent = "yes";
    if (isGif)
      swapGif
        ? (ball.style.backgroundImage = `url(./media/sticker-below${random(1, 2)}.gif)`)
        : (ball.style.backgroundImage = `url(./media/sticker-above${random(1, 2)}.gif)`);
  } else {
    responseField.textContent = "no";
    if (isGif)
      swapGif
        ? (ball.style.backgroundImage = `url(./media/sticker-above${random(1, 2)}.gif)`)
        : (ball.style.backgroundImage = `url(./media/sticker-below${random(1, 2)}.gif)`);
  }
  submitBtn.disabled = false;
};

const handleForm = async (e) => {
  e.preventDefault();

  responseField.textContent = "think...";
  submitBtn.disabled = true;
  await new Promise((res) => setTimeout(res, 1000));
  await startGame();
};
form.addEventListener("submit", handleForm);
