<?php
	header("content-type:text/html;charset=utf-8");
	$tel=$_POST["tel"];
	$pass=$_POST["pass"];
	//建立连接
	$lianjieSQL=mysql_connect("localhost","root","qianfeng");
	//检测连接是否成功
	if(!$lianjieSQL){
		die("连接不上：".mysql_error());
	}

	//选择需要连接的库
	mysql_select_db("yiguoshengxian",$lianjieSQL);
	//执行查询工作
	$chaxun="select * from reg where tel='".$tel."' and pass='".$pass."'";
	//echo $chaxun;
	$chaxunRes=mysql_query($chaxun,$lianjieSQL);
	$rows=mysql_num_rows($chaxunRes);
	
	if($rows==0){
		echo "0";
	}else{
		echo "1";
	}
	//关闭数据库
	mysql_close($lianjieSQL);
?>