const endDate = "29 February 2024 10:00 PM";
document.getElementById('enddate').innerText = endDate;
const inputs = document.getElementsByTagName('input');

function clock(){
	const end = new Date(endDate);
	const now = new Date();
	// console.log(Math.floor(now/1000/3600/24/60))
	const diff = (end - now) / 1000; // in seconds
	inputs[0].value = Math.floor( diff / 3600 / 24);
	inputs[1].value = Math.floor( (diff / 3600 ) % 24);
	inputs[2].value = Math.floor( (diff / 60 ) % 60);
	inputs[3].value = Math.floor( (diff % 60));

	const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
}
clock()

setInterval(
    () => {
        clock()
    },
    1000
)
