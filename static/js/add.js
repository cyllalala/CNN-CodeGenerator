var PanelDict = new Dictionary();//工作板名字，对应HTML元素
PanelDict.put('modal',$("#WorkPanel"));//保存模板
$(document).ready(function(){

	
	$("#CreateOK").click(function(){

		

		var PanelName = $("#PanelName").val();
		var current = PanelDict.get('modal').clone(true);

		$('#currentPanelName').html(PanelName);
		$(".sheet-menu").prepend('<li><a class="workname" onclick="Display(\''+PanelName+'\')" id='+PanelName+'>'+PanelName+'</a></li>')//导航栏添加
		$(".workname").css("backgroundColor","#34495e")
		$("#"+PanelName).css("backgroundColor","#1abc9c")
		current.attr('id','work'+PanelName);
		PanelDict.put(PanelName,current);//将当前工作区存入字典
		GlobalPanelId = 'work'+PanelName
		
		var pre = $(".container-fluid");
		var preId = pre.attr('id');
		if(preId!='WorkPanel'){
			var preName = preId.slice(4);
			PanelDict.put(preName,pre);
		}
		pre.remove();
		$(".switch").append(current);
		current.css("display","block");
		$("#StartPanel").css("display","none");
		$("#CloseModal").click();
		reload()
		


	})
	
});
function Display(id){

	GlobalPanelId = 'work'+id;

	$('#currentPanelName').html(id);
	$("#StartPanel").css("display","none");
	$(".workname").css("backgroundColor","#34495e")
	$("#"+id).css("backgroundColor"," #1abc9c")
	var pre = $(".container-fluid");
	var preId = pre.attr('id');
	var preName = preId.slice(4);
	PanelDict.put(preName,pre);
	pre.remove();
	var element = PanelDict.get(id);
	$(".switch").append(element);
	element.css('display','block');
	reload()

}
function reload(){

	$("#0").remove();
	$('#Active').remove();
	$(".large-active").append('<div class="bg-gray mtop" id="Active"><div class="row"><div class="col-md-12 acpanel"><div class="col-md-6 col-sm-3 col-xs-3 pad-default"><p class="title active">Activation Function</p></div><div class="form-group col-md-6 pad-default" id="select-box"><select id="active-select" data-toggle="select" class="form-control select select-default"><option>Sigmoid</option><option>ReLU</option><option>ELU</option><option>PReLU</option><option>Tanh</option><option>Softmax</option></select></div></div></div></div>')
	functiongraph();
	$.getScript("/static/js/index.js");
	$.getScript("/static/lib/js/application.js");

}	
	