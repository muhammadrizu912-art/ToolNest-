// ToolNest - Main JavaScript

// ===============================
// Percentage Calculator
// ===============================

function calculatePercentage(value, total) {
  if (total === 0) return 0;
  return (value / total) * 100;
}


// ===============================
// Age Calculator
// ===============================

function calculateAge(birthDate) {

  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference =
    today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (
      monthDifference === 0 &&
      today.getDate() < birth.getDate()
    )
  ) {
    age--;
  }

  return age;
}


// ===============================
// BMI Calculator
// ===============================

function calculateBMI(weight, height) {

  if (weight <= 0 || height <= 0) {
    return 0;
  }

  const heightInMeters = height / 100;

  return weight / (heightInMeters * heightInMeters);
}


// ===============================
// EMI Calculator
// ===============================

function calculateEMI(principal, annualRate, months) {

  if (principal <= 0 || months <= 0) {
    return 0;
  }

  const monthlyRate =
    annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return principal / months;
  }

  const emi =
    principal *
    monthlyRate *
    Math.pow(1 + monthlyRate, months) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return emi;
}


// ===============================
// Password Generator
// ===============================

function generatePassword(length = 12) {

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*()_+";

  let password = "";

  for (let i = 0; i < length; i++) {

    const randomIndex =
      Math.floor(Math.random() * characters.length);

    password += characters[randomIndex];
  }

  return password;
}


// ===============================
// Word Counter
// ===============================

function countWords(text) {

  if (!text || text.trim() === "") {
    return 0;
  }

  return text
    .trim()
    .split(/\s+/)
    .length;
}


// ===============================
// Character Counter
// ===============================

function countCharacters(text) {

  return text.length;
}


// ===============================
// Text Case Converter
// ===============================

function toUpperCase(text) {
  return text.toUpperCase();
}

function toLowerCase(text) {
  return text.toLowerCase();
}

function toTitleCase(text) {

  return text
    .toLowerCase()
    .split(" ")
    .map(function(word) {

      if (word.length === 0) {
        return "";
      }

      return word.charAt(0).toUpperCase() +
             word.slice(1);

    })
    .join(" ");
}


// ===============================
// Copy Text
// ===============================

function copyText(text) {

  navigator.clipboard.writeText(text)
    .then(function() {

      alert("Copied successfully!");

    })
    .catch(function() {

      alert("Unable to copy text.");

    });

}


// ===============================
// QR Code Helper
// ===============================

function createQRCodeURL(text) {

  if (!text) {
    return "";
  }

  return "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
         encodeURIComponent(text);
}


// ===============================
// Number Formatting
// ===============================

function formatNumber(number) {

  return Number(number)
    .toLocaleString("en-US", {
      maximumFractionDigits: 2
    });

}


// ===============================
// Page Loaded
// ===============================

document.addEventListener("DOMContentLoaded", function() {

  console.log("ToolNest loaded successfully!");

});
