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
	//$chaxun="select * from reg where tel=".$tel;
	//执行存入数据工作
	//$chaxunRes=mysql_select($chaxun,$lianjieSQL);
	//$rows=mysql_num_rows($chaxunRes);
	/**if($rows!=0){
		echo "1";
	}else{
		echo "0";
	}*/
	//执行存入数据工作
	$addUser="insert into reg(tel,pass) values('".$tel."','".$pass."')";
	//echo $addUser;
	mysql_query($addUser,$lianjieSQL);
	//关闭数据库
	mysql_close($lianjieSQL);
?>