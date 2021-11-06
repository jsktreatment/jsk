let url = "https://docs.google.com/forms/d/e/1FAIpQLSdatT__vLZA-0s0WHojLkNOoTr1DMojJGU0TZTNDo4h_ivYwQ/formResponse"; //action url
let form = document.querySelector("#form"); //form element

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default behaviour

  fetch(url, {
      method: "POST",
      mode: "no-cors",
      header: {
        'Content-Type': 'application/json'
      },
      body: getInputData()
    })
    .then(data => {
      console.log(data);
      alert("Form Submitted. Your message has been sent successfully. Thank you.");
    })
    .catch(err => console.error(err));
});

//populating input data
function getInputData() {
  let dataToPost = new FormData(); //formdata API

  //fill name attributes to corresponding values
  dataToPost.append("entry.1687506506", document.querySelector("#inp1").value);
  dataToPost.append("entry.258951465", document.querySelector("#inp2").value);
  dataToPost.append("entry.1994868729", document.querySelector("#inp3").value);
  dataToPost.append("entry.91347678", document.querySelector("#inp4").value);
  dataToPost.append("entry.1318692705", document.querySelector("#inp5").value);
  dataToPost.append("entry.311879824", document.querySelector("#inp6").value);
  dataToPost.append("entry.841095051", document.querySelector("#inp7").value);
  dataToPost.append("entry.505855799", document.querySelector("#inp8").value);
  dataToPost.append("entry.9320772", document.querySelector("#inp9").value);
  dataToPost.append("entry.293741709", document.querySelector("#inp10").value);
  dataToPost.append("entry.1114375073", document.querySelector("#inp11").value);

  return dataToPost;
}


