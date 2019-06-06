// DOM?
// Document Object Model

console.dir(document);

document.title = "Aha Moments!";

document.getElementsByClassName("target").innerText = "Blarg";



$("button").click(function(){
    $(".target").fadeOut(function(){
        console.log("Heyooo!");
    });
});