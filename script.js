

function nextPage() {
  window.location.href = "res.html";
}

function resSelected(params) {
    sessionStorage.setItem("resturent", params);
    window.location.href = "yes.html";
}
function moveButton() {
  var x =
    Math.random() *
    (window.innerWidth -
      document.getElementById("noButton").offsetWidth);
  var y =
    Math.random() *
    (window.innerHeight -
      document.getElementById("noButton").offsetHeight);
  document.getElementById("noButton").style.left = `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;
}
function openModal() {
    document.getElementById('myModal').style.display = "block";
    document.getElementById("datetimepicker").addEventListener("change", checkDateTimeSelection);
  }

  function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById("datetimepicker").removeEventListener("change", checkDateTimeSelection);
  }

  function checkDateTimeSelection() {
    const datetimeValue = document.getElementById("datetimepicker").value;
    if (datetimeValue !== "") {

    }
  }



  function sendEmail() {
    const selectedDateTime = document.getElementById("datetimepicker").value;
    const formattedDateTime = selectedDateTime.replace("T", " ");

    const formattedDateTimeWithHrs = formattedDateTime + "hrs";
    
    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    const resturent = sessionStorage.getItem("resturent");
    console.log("resturent: ",resturent);

    const templateParams = {
      name: name,
      email: email,
      date_and_time: formattedDateTimeWithHrs,
      resturent: resturent,
    };
    console.log(templateParams);
    emailjs.send('service_z2gj4hp', 'template_91qjsb9', templateParams)
      .then(function (response) {
        console.log('Email sent successfully:', response);
        alert('Thank you, and have a lovely day!');
        closeModal();
        window.location.href = "https://mail.google.com/";
      }, function (error) {
        console.error('Email sending failed:', error);
        alert('Failed to send email. Please try again later.');
      });

    emailjs.send('service_z2gj4hp', 'template_bgihbbc', templateParams)
      .then(function (response) {
        console.log('Email sent to user successfully:', response);
      }, function (error) {
        console.error('Error sending email to user:', error);
      });


  }
  // Function to get URL query parameters
function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
      params[key] = decodeURIComponent(value);
    });
    return params;
  }
  
  // Function to handle form submission
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    console.log("Form submitted");
    event.preventDefault(); // Prevent default form submission
  
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    console.log("Name:", name);
    console.log("Email:", email);
    // Email format validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    console.log("Name stored in sessionStorage:", sessionStorage.getItem("name"));
    console.log("Email stored in sessionStorage:", sessionStorage.getItem("email"));
    
    // Redirect to asking.html
    window.location.href = "asking.html";
  });
  
  // Extract name and email from URL query parameters if present
  var urlParams = getUrlParams();
  if (urlParams.name && urlParams.email) {
    // Store name and email in sessionStorage
    sessionStorage.setItem("name", urlParams.name);
    sessionStorage.setItem("email", urlParams.email);
  }
  