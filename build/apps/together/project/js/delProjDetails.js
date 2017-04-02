var projID = window.location.hash.substring(1);

function delData() {
	
	if(document.getElementById('test1').checked){
		var userID = document.getElementById('githubID').innerHTML
		console.log(userID)

		var userRef = new Firebase('https://prolanner.firebaseio.com').child("users").child(userID)
		var projRef = new Firebase('https://prolanner.firebaseio.com').child("projects").child(projID)

		userRef.once('value', function(snapshot){
			console.log(snapshot.child("projectIDs").val())
			var pid = snapshot.child("projectIDs").val()
			var idx = pid.indexOf(projID)
			pid.splice(idx, 1);
			console.log(pid)
			userRef.child('projectIDs').set(pid)
		})

		projRef.once('value', function(snapshot){
			console.log(snapshot.child("projectMetaData").child("projectMembers").val())
			var pmem = snapshot.child("projectMetaData").child("projectMembers").val()
			var idx = pmem.indexOf(userID)
			pmem.splice(idx, 1);
			console.log(pmem)
			projRef.child("projectMetaData").child("projectMembers").set(pmem)
			
			var chatRoomID = snapshot.child("projectMetaData").child("relatedChatRoom").val()
			console.log("chat")
			console.log(chatRoomID)
			var chatRoomref = new Firebase('https://prolanner.firebaseio.com').child("chatrooms").child(chatRoomID)
			chatRoomref.once('value', function(snapshot){
				console.log(snapshot.child("roomMetaData").child("roomMembers").val())
				var cmem = snapshot.child("roomMetaData").child("roomMembers").val()
				var idx = cmem.indexOf(userID)
				cmem.splice(idx, 1);
				console.log(cmem)
				chatRoomref.child("roomMetaData").child("roomMembers").set(cmem)
			})
		})

		setTimeout(closeWindow,1000)

	}
	else{
		var projRef = new Firebase('https://prolanner.firebaseio.com').child("projects").child(projID)
		projRef.once('value', function(snapshot){
			console.log(snapshot.child("projectMetaData").child("projectMembers").val())
			var pmem = snapshot.child("projectMetaData").child("projectMembers").val()
			
			for(var i in pmem){
				console.log("pmem")
				console.log(pmem[i])
				delProjForUser(pmem[i])
			}

			var chatRoomID = snapshot.child("projectMetaData").child("relatedChatRoom").val()
			var chatRoomref = new Firebase('https://prolanner.firebaseio.com').child("chatrooms").child(chatRoomID)
			console.log("chat")
			console.log(chatRoomID)
			chatRoomref.remove()

			projRef.remove()

			setTimeout(closeWindow,1000)
			
		})

	}

}

function delProjForUser(userID){
	var userRef = new Firebase('https://prolanner.firebaseio.com').child("users").child(userID)
	
	userRef.once('value', function(snapshot){
			console.log("Inside delProjUSer:"+userID)
			console.log(snapshot.child("projectIDs").val())
			var pid = snapshot.child("projectIDs").val()
			var idx = pid.indexOf(projID)
			pid.splice(idx, 1);
			console.log(pid)
			userRef.child('projectIDs').set(pid)
		})
}

function closeWindow() {
	window.location = "/apps/together/landing"
}