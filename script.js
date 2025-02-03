function generateCV() {
  var name = document.getElementById("name").value.trim();
  var jobTitle = document.getElementById("jobTitle").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var city = document.getElementById("city").value.trim();
  var workExp = document.getElementById("workExp").value.trim();
  var skills = document.getElementById("skills").value.trim();

  if (!name || !jobTitle || !email || !phone || !city || !workExp || !skills) {
    alert("Please fill all the fields.");
    return;
  }

  document.getElementById("cv-name").innerText = name;
  document.getElementById("cv-jobTitle").innerText = jobTitle;
  document.getElementById("cv-email").innerText = email;
  document.getElementById("cv-phone").innerText = phone;
  document.getElementById("cv-city").innerText = city;
  document.getElementById("cv-workExp").innerText = workExp;
  document.getElementById("cv-skills").innerText = skills;
  document.getElementById("cv-container").style.display = "block";
}