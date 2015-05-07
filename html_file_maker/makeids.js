function makeid()
{
    var text = "";
    //var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function isUn(is,inn) {
	
	for(var i = 0; i < inn.length; i++) {
		if(is === inn[i]) {
			return false;
		}
	}
	return true;
}

var ids = []

for(var i = 0; i < 10000; i++) {
	
	var id = makeid();

	if(isUn( id, ids) ) {
		ids.push(id);
	} else {
		i--;
	}
}


for(var i = 0; i < ids.length; i++) {
	console.log(ids[i])
}