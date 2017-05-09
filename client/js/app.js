$(document).ready(function(){

function load() {
	
	$.get("http://localhost:3333/accueil").done(function(data) {
	
	if(data !==null){
	var info = data
	
	//var info= JSON.parse(data)
	
	// for (var i = 0; i < info; i++) {
	console.log(info.firstName)
		
		
		$("#infoc").append('<div>Vous êtes un(e): "'+data.type +'"</div>');
		$("#infoc").append('<div>Name: "'+data.Name +'"</div>');
		$("#infoc").append('<div>firstName: "'+data.firstName +'"</div>');
		$("#infoc").append('<div>Mail or Mobile: "'+data.Mail +'"</div>');
		$("#infoc").append('<div>Birth date: "'+data.Day+' '+data.Month+' '+data.Years+'"</div>');
	// }

	}

})
}
load()
})
function valider(){
	e.preventDefault()
  console.log(res)
  return false;
}