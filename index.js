const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isWizard = confirm("Are you a wizard?");

if(isWizard === true){
    console.log("Welcome to Hogwarts!");
} 
else {
    profileImage.src = "images/xielian.jpg"; 
    firstNameSpan.innerHTML = "Xie Lian";
    ageSpan.innerHTML = "over 800";
    statusSpan.innerHTML = "Heavenly Official";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/shenqingqiu.jpg"; 
    firstNameSpan.innerHTML = "Shen Qingqiu";
    ageSpan.innerHTML = 40;
    statusSpan.innerHTML = "Peak lord";
});