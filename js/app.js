window.onload = startProcess;

var clickCounts = [];
function startProcess() {
	var buttons = document.getElementsByClassName("clicker");

	for (var i = 0; i < buttons.length; i++) {
		clickCounts[i] = {
			id: buttons[i].id,
			clickCount: 0
		};
		buttons[i].addEventListener("click", onClick);
	}
}

function onClick(event) {
	for (var i = 0; i < clickCounts.length; i++) {
		if (clickCounts[i].id === event.target.id) {
			clickCounts[i].clickCount++;
			console.log(clickCounts[i].clickCount);
			return;
		}
	}
}