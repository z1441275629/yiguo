var tel=document.getElementById("tel");
var pass=document.getElementById("pass");
var yzm=document.getElementById("yzm");
var denglu=document.getElementById("denglu");
console.log(tel+","+pass+","+yzm+","+denglu);
denglu.onclick=function(){
	if(yzm.value=="6541"){
		my_ajax({
			"url":"../log.php",
			"method":"post",
			"sendContent":"tel="+tel.value+"&pass="+pass.value,
			"func":function(str){
				if(str=="1"){//��¼�ɹ�
					location.href="../index.html";
				}else{
					alert("�û��������벻��ȷ");
				}
			}
		});
	}
}