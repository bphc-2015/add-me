var Stack = new Array(50);
var intStack = new Array(50);
var topper=-1;
var expr;
var post_arr = new Array(100);
var post;
var size = 100;
$(document).ready(function(){
 $("#num0").click(function(){
    $("#data").val(function(n,c){
	 return c + "0";
	});  
 });
 $("#num1").click(function(){
    $("#data").val(function(n,c){
	 return c+"1";
	});  
 });
 $("#num2").click(function(){
    $("#data").val(function(n,c){
	 return c+"2";
	});  
 });
 $("#num3").click(function(){
    $("#data").val(function(n,c){
	 return c+"3";
	});  
 });
 $("#num4").click(function(){
    $("#data").val(function(n,c){
	 return c+"4";
	});  
 });
 $("#num5").click(function(){
    $("#data").val(function(n,c){
	 return c+"5";
	});  
 });
 $("#num6").click(function(){
    $("#data").val(function(n,c){
	 return c+"6";
	});  
 });
 $("#num7").click(function(){
    $("#data").val(function(n,c){
	 return c+"7";
	});  
 });
 $("#num8").click(function(){
    $("#data").val(function(n,c){
	 return c+"8";
	});  
 });
 $("#num9").click(function(){
    $("#data").val(function(n,c){
	 return c+"9";
	});  
 });
 $("#add").click(function(){
    $("#data").val(function(n,c){
	 return c+"+";
	});  
 });
 $("#sub").click(function(){
    $("#data").val(function(n,c){
	 return c+"-";
	});  
 });
 $("#multi").click(function(){
    $("#data").val(function(n,c){
	 return c+"*";
	});  
 });
 $("#div").click(function(){
    $("#data").val(function(n,c){
	 return c+"/";
	});  
 });
 $("#clear").click(function(){
    $("#data").val("");  
	$("#brack").val("");
	$("#res").val("");
 });
 $("#equal").click(function(){
    expr = $("#data").val();
	var t =calc_main(); 
	  $("#brack").val(expr);
	  $("#res").val(t);
	});
});

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
function validateChar()
{
	var f=0;
	for(i=0;i<expr.length;++i)
	{
		if((expr.charCodeAt(i)>="0".charCodeAt()&&expr.charCodeAt(i)<="9".charCodeAt()) || expr.charCodeAt(i)=="+".charCodeAt() || expr.charCodeAt(i)=="-".charCodeAt()|| expr.charCodeAt(i)=="*".charCodeAt()|| expr.charCodeAt(i)=="/".charCodeAt())
			f=0;
		else {f=1; break;}
	}
	if(f==1) return -1;
	else return 0;
}
function validateExpr()
{
	var f=0;
	if(expr.charCodeAt(0)<"0".charCodeAt() || expr.charCodeAt(0)>"9".charCodeAt()) return -1;
	for(i=1;i<expr.length;++i)
	{
		if(expr.charCodeAt(i)>="0".charCodeAt()&&expr.charCodeAt(i)<="9".charCodeAt())
		{
			if((expr.charCodeAt(i+1)>="0".charCodeAt()&&expr.charCodeAt(i+1)<="9".charCodeAt()) || (expr.charCodeAt(i-1)>="0".charCodeAt()&&expr.charCodeAt(i-1)<="9".charCodeAt()))
			{f=1; break;}
		}
		if(expr.charCodeAt(i)=="+".charCodeAt() || expr.charCodeAt(i)=="-".charCodeAt()|| expr.charCodeAt(i)=="*".charCodeAt()|| expr.charCodeAt(i)=="/".charCodeAt())
		{
			if((expr.charCodeAt(i+1)=="+".charCodeAt() || expr.charCodeAt(i+1)=="-".charCodeAt()|| expr.charCodeAt(i+1)=="*".charCodeAt()|| expr.charCodeAt(i+1)=="/".charCodeAt())|| 
				(expr.charCodeAt(i-1)=="+".charCodeAt() || expr.charCodeAt(i-1)=="-".charCodeAt()|| expr.charCodeAt(i-1)=="*".charCodeAt()|| expr.charCodeAt(i-1)=="/".charCodeAt()))
				{f=1; break;}
		}
	}
	if(f==1) return -1;
	else return 0;
}
function Push(ele)
{
	if (topper==size-1)
		return -1;
	else if (topper==-1)
	{ 
		topper=0; Stack[topper]=ele;
	}
	else
	{
		++topper;
		 Stack[topper]=ele;
	}
	return 0;
}
function Push_calc(ele)
{
	if (topper==size-1)
		return -1;
	else if (topper==-1)
	{topper=0;
     intStack[topper]=ele;
	}
	else
	{
		++topper;
		intStack[topper]=ele;
	}
	return 0;
}
function Pop()
{
	var ret;
	if(topper==-1)
		return 'X';
	else
	{ret=Stack[topper]; topper--;
	}
	return ret;
}
function Pop_calc()
{
	var ret;
	if(topper==-1)
		return -1;
	else
	{ret=intStack[topper]; topper--;
	}
	return ret;
}
function insertRight(pos)
{
	var right,left,f;
	right=0;left=0; f=0;
	for(j=pos+1;j<expr.length;++j)
	{
		if(expr.charCodeAt(j)=="(".charCodeAt())
			++left;
		if(expr.charCodeAt(j)==")".charCodeAt())
			++right;
		if(right==left)
		{f=1; break;}
	}
	if(f==1)
	{
		for(i=expr.length;i>j;--i)
			expr = expr.replaceAt(i+1,expr.charAt(i));
		expr=expr.replaceAt(j+1,')');
	}
	return;
}
function insertLeft(pos)
{
	var right,left,f;
	right=0;left=0; f=0;
	for(j=pos-1;j>=0;--j)
	{
		if(expr.charCodeAt(j)=="(".charCodeAt())
			++left;
		if(expr.charCodeAt(j)==")".charCodeAt())
			++right;
	if(right==left) {f=1; break;}
	}
	if(f==1)
	{
		for(i=expr.length;i>=j;--i)
			expr=expr.replaceAt(i+1,expr.charAt(i));
		expr=expr.replaceAt(j,'(');
	}
	return;
}
function parenth()
{
	var i;
	for(i=0;i<expr.length;++i)
	{
		if(expr.charCodeAt(i)=="*".charCodeAt()||expr.charCodeAt(i)=="/".charCodeAt())
		{
			insertRight(i);
			insertLeft(i);
			++i;
		}
	}
	for(i=0;i<expr.length;++i)
	{
		if(expr.charCodeAt(i)=="-".charCodeAt()||expr.charCodeAt(i)=="+".charCodeAt())
		{
			insertRight(i);
			insertLeft(i);
			++i;
		}
	}
	//alert(expr);
}
function makePostfix()
{
	var i,j,c,ch;
	j=0;
	for(i=0;i<expr.length;++i)
		{
			if(expr.charCodeAt(i)>="0".charCodeAt() && expr.charCodeAt(i)<="9".charCodeAt())
			{
		       post_arr[j]=expr[i]; ++j; 
			}
			else if(expr.charCodeAt(i)=="(".charCodeAt() || expr.charCodeAt(i)=="+".charCodeAt() || expr.charCodeAt(i)=="-".charCodeAt()||expr.charCodeAt(i)=="*".charCodeAt()||expr.charCodeAt(i)=="/".charCodeAt() )
			{
				c=Push(expr.charAt(i)); 
				if(c==-1) break;
			}
			else if(expr.charCodeAt(i)==")".charCodeAt())
			{
				while(Stack[topper].charCodeAt()!="(".charCodeAt())
				{
					ch=Pop(); 
					post_arr[j] = ch; 
					++j;
				}
				ch=Pop();
			}
			else continue;
		}
		post = post_arr.join("");
		//alert(post);
}
function evaluate()
{
	var val,lue,num1,num2,c;
	for(i=0;i<post.length;++i)
		{
			if(post.charCodeAt(i)>="0".charCodeAt() && post.charCodeAt(i)<="9".charCodeAt())
			{
				lue=post.charCodeAt(i)-48;
				c=Push_calc(lue);
				if(c==-1) break;
			}
			else if(post.charCodeAt(i)=="(".charCodeAt() || post.charCodeAt(i)=="+".charCodeAt() || post.charCodeAt(i)=="-".charCodeAt()||post.charCodeAt(i)=="*".charCodeAt()||post.charCodeAt(i)=="/".charCodeAt())
			{
				num1=Pop_calc();
				num2=Pop_calc();
				switch(post.charCodeAt(i))
				{
				case "+".charCodeAt(): val=num2+num1; break;
				case "-".charCodeAt(): val=num2-num1; break;
				case "*".charCodeAt(): val=num2*num1; break;
				case "/".charCodeAt(): val=Math.floor(num2/num1); break;
				default: break;
				}
				c=Push_calc(val);
				if(c==-1) break;
			}
			else continue;
		}
	if(c==-1) return null;
	else return intStack[topper];
}
function calc_main()
{
    var ans;
	//expr = prompt("Enter valid expression","");
	var x = validateChar();
	if(x==-1) {alert("Expression has invalid characters!\n"); return;}
	x= validateExpr();
	if(x==-1) {alert("Expression could not be evaluated!\n"); return;}
	//Insertion of parentheses correctly
	parenth();
	//Infix with parentheses to postfix
	makePostfix();
    //Evaluation of postfix expr
	ans=evaluate();
	if(ans==null) alert("Not enough memory!");
	else return ans;
	
}

