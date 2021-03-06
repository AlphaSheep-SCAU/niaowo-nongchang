$(function(){
	$('.forget .torevise').on('click',function(){
		$('.login').css('display','none');
		$('.revise').css('display','block');
		$('.prompt').css('display','none');
	});
	$('.forget .toregister').on('click',function(){
		$('.login').css('display','none');
		$('.register').css('display','block');
		$('.prompt').css('display','none');
	});
	
	
//	手机号码正则表达式
	var myreg = /^1[34578]\d{9}$/;
	//密码正则 6~20位
	var mypsw = /^[0-9A-Za-z]{6,20}$/;
//	提示框
	var prompt = $('.prompt');		
	
	
//注册功能
	$('#register').on('submit',function(event){
		event.preventDefault();
		var phone = $('.register .phone input').val();
		var name = $('.register .name input').val();
		var code = $('.register .code-l').val();
		var psw = $('.register .password input').val();
		var repsw = $('.register .newpassword input').val();		
		if(myreg.test(phone) && name != '' && code != '' && mypsw.test(psw) && psw == repsw){
			$('#register')[0].submit();
			prompt.show().delay(2000).hide(300);
			prompt.html('注册成功！');
		}else if(!myreg.test(phone)){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入正确的手机号码！');
		}else if(name == ''){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入昵称！');
		}else if(code==''){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入验证码！');
		}else if(!mypsw.test(psw)){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入6~20位密码！');
		}else if(psw != repsw){
			prompt.show().delay(2000).hide(300);
			prompt.html('两次输入的密码不相同！');
		}
	})
	
//	登录功能
	$('#login').on('submit',function(event){
		event.preventDefault();
		var userName = $('.login .username input').val();	
		
		var psw = $('.login .password input').val();		
		if(userName != '' && mypsw.test(psw)){
			$('#login')[0].submit();
		}else if(userName == ''){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入用户名！');				
			return false;			
		}else if(!mypsw.test(psw)){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入6~20位密码！');
			return false;
		}	
	});	
	
	//修改密码
	$('.r-sure').on('click',function(){
		var phone = $('.revise .phone input').val();
		var code = $('.revise .code-l').val();
		var newpsw = $('.revise .newpassword input').val();
		if(myreg.test(phone) && code != '' && mypsw.test(newpsw)){			
			prompt.show().delay(2000).hide(300);
			prompt.html('修改密码成功！');
		}else if(!myreg.test(phone)){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入正确的手机号码！');
		}else if(code == ''){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入正确的验证码！');
		}else if(!mypsw.test(newpsw)){
			prompt.show().delay(2000).hide(300);
			prompt.html('请输入6~20位密码！');
		}
	});
});
