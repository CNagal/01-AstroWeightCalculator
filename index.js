<<<<<<< HEAD
function formatWeight() {

    var yourWeight = document.getElementById("weight").value;
    var planetGravity = document.getElementById("planets").value;
    var newWeight = parseInt(yourWeight);
    
    var formatWeight = newWeight * planetGravity;

    document.getElementById("p1").innerHTML = ("Your new weight is " + formatWeight);

}
=======
function formatWeight() {
	
	var yourWeight = document.getElementById("weight").value;
	var planetGravity = document.getElementById("planets").value;
	var newWeight = parseInt(yourWeight);
	var formatWeight = newWeight * planetGravity;

	document.getElementById("p1").innerHTML = ("Your new weight is " + formatWeight);

}
>>>>>>> 1a77cf46d2e36ddc6746eae0935afdeb0f494e66
