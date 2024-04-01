button.addEventListener('click', function(){

    paragraph.textContent = "Welcome to week 3"
})

let age =prompt("Enter your Age:")
if (age < 0 | age > 100) {
    console.log("Age range should be between 0 and 100")
}

if (age > 0 && age <50){
    console.log("You're not eligible for promotion")

}
else if (age ==55 && age < 55){
    console.log("You're now eligble for level 10")

}else if (age = 80 && age > 90){
    console.log("Retirement in process")
}




