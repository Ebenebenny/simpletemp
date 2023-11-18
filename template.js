const network = {
  glo: "mtn.png",
  mtn: "mtn.png",
  airtel: "airtel1.png",
};

const main = document.querySelector("main");
const radio = document.querySelector(".radio");
const owner = document.querySelector(".owner");
const amount = document.querySelector(".amount");
const code = document.querySelector(".code");
const balance = document.querySelector(".balance");
const codes = document.querySelector(".codes");
const generates = document.querySelector(".generate");
const templates = document.querySelector(".templates");
const template = document.querySelectorAll(".template");
const duration = document.querySelector(".duration");
const download = document.querySelector(".download");

const validate = function (values) {
  if (values.value) return alert("All fields are required");
};

const renderTemplates = function () {
  // if (codes.value.contain(" ")) return alert("code must not contain space");
  const html = `
  
  ${codes.value
    .split("\n")

    .map((coded) => {
      console.log(coded);
      return `
      <div class="template">
      <div class="img_owner">
        <p class="my_logo">MTN</p>
        <h2 class="owner_name">${owner.value}</h2>
      </div>
      <p class="pin" id="pin">${coded}</p>
      <p class="code_amount" id="code_amount">
        ${amount.value} -<span class="code_duration">${duration.value}</span>
      </p>
      <div class="how">
        <p class="how_to_load" id="how_to_load">
          Redeem: <span class="load">${code.value}</span>
        </p>
        <p class="balance" id="balance" name="balance">
          Balance : <span class="balances" id="balances">${balance.value}</span>
        </p>
      </div>
    </div>`;
    })
    .join(" ")}
  `;
  templates.innerHTML = " ";
  templates.insertAdjacentHTML("afterbegin", html);
};

generates.addEventListener("click", function (e) {
  e.preventDefault();
  if (!duration.value || !amount.value || !code.value || !codes.value) {
    alert(" All fields are required");
  } else {
    alert("code genereted successfully...");
    main.style.display = "none";
    templates.classList.remove("hidden");
    download.style.opacity = "1";
    // convert_code();
    // console.log(codes.value);
    renderTemplates();
    // convert_code(codes.value);
  }
});
// const owner1 = owner.value;
// window.onload = function () {
//   document.getElementById("download").addEventListener("click", () => {
//     const datatemp = this.document.getElementById("main");
//     console.log(datatemp);
//     var opt = {
//       margin: 1,
//       filename: "myfile.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };
//     html2pdf().from(datatemp).set(opt).save();
//   });
// };
function exportHTMLtoPDF() {
  let htmlElement = document.getElementById("temp");

  html2pdf().from(htmlElement).save("exported_file.pdf");
}

document.getElementById("download").addEventListener("click", exportHTMLtoPDF);
