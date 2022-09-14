
function homePage(){
    var personal_details_wrapper = document.getElementById("personal-details-wrapper");
    var skills_wrapper = document.getElementById("skills-wrapper");
    var wrapper = document.getElementById("home-page");
    var button = document.getElementById("home-btn");
    button.onclick =  function(){
        wrapper.style.display = "block";
        personal_details_wrapper.style.display = "none";
        skills_wrapper.style.display = "none";
    }
}
function skills(){
    var button = document.getElementById("skills-btn");
    button.addEventListener("click",function(){
        var personal_details_wrapper = document.getElementById("personal-details-wrapper");
        var skills_wrapper = document.getElementById("skills-wrapper");
        var wrapper = document.getElementById("home-page");
        skills_wrapper.style.display = "block";
        personal_details_wrapper.style.display = "none";
        wrapper.style.display = "none";
    },false);
}
function personal_details(){
    var button = document.getElementById("personalDetails-btn");
    button.addEventListener("click",function(){
        var wrapper = document.getElementById("home-page");
        var personal_details_wrapper = document.getElementById("personal-details-wrapper");
        var skills_wrapper = document.getElementById("skills-wrapper");
        skills_wrapper.style.display = "none";
        wrapper.style.display = "none";
        personal_details_wrapper.style.display = "block";
    },false);
}
homePage();
skills();
personal_details();