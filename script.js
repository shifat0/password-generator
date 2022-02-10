const resultEL = document.getElementById("result");
const lengthEL = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generator");
const clipboard = document.getElementById("clipboard");

clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEL.innerText;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password is copied to the clipbaord");
});

generateBtn.addEventListener("click", () => {
  const length = +lengthEL.value;
  const uppercase = upperCaseEl.checked;
  const lowercase = lowerCaseEl.checked;
  const number = numberEl.checked;
  const symbol = symbolEl.checked;

  resultEL.innerText = generatePassword(
    length,
    uppercase,
    lowercase,
    number,
    symbol
  );
});

const generatePassword = (length, upper, lower, number, symbol) => {
  let generatedPassword = "";
  const typesCount = upper + lower + number + symbol;
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) return "";

  for (i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // lowerCase characters ASCII starts from 97
  // 26 lowercase characters
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // lowerCase characters ASCII starts from 65
  // 26 lowercase characters
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // lowerCase characters ASCII starts from 48
  // 10 Numbers
};

const getRandomSymbol = () => {
  symbols = "!@#$%^&*()_-+=[]{};:?/.>,<";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
