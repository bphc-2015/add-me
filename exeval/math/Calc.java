package math;
import java.util.Scanner;
public class Calc {
	private final int size=250;
    private char[] Stack;
    private int intStack[]= new int[50];
    private int top=-1;
    private char[] expr;
    private char[] post;
    
    public void getData()
    {
    	Scanner input = new Scanner(System.in);
    	String str=input.nextLine();
     	expr = str.toCharArray();
     	/*for(int i=0;i<token.length;++i)
     		expr[i]= token[i];
     	expr[token.length]='\0';*/
     	
    }
	public int Push(char ele)
	{
		if (top==size-1)
			return -1;
		else if (top==-1)
		{top=0;
		 Stack[top]=ele;
		}
		else
		{
			++top;
			Stack[top]=ele;
		}
		return 0;
	}
	public int Push_calc(int ele)
	{
		if (top==size-1)
			return -1;
		else if (top==-1)
		{top=0;
	     intStack[top]=ele;
		}
		else
		{
			++top;
			intStack[top]=ele;
		}
		return 0;
	}
	public char Pop()
	{
		char ret;
		if(top==-1)
			return 'X';
		else
		{ret=Stack[top];
		 top--;
		}
		return ret;
	}
	public int Pop_calc()
	{
		int ret;
		if(top==-1)
			return -1;
		else
		{ret=intStack[top];
		 top--;
		}
		return ret;
	}
	public void insertRight(int pos)
	{
		int i,j,right,left,f;
		right=0;left=0; f=0;
		for(j=pos+1;j<expr.length;++j)
		{
			if(expr[j]=='(')
				++left;
			if(expr[j]==')')
				++right;
			if(right==left)
			{f=1; break;}
		}
		if(f==1)
		{
			for(i=expr.length;i>j;--i)
				expr[i+1]=expr[i];
			expr[j+1]=')';
		}
		return;
	}
	public void insertLeft(int pos)
	{
		int i,j,right,left,f;
		right=0;left=0; f=0;
		for(j=pos-1;j>=0;--j)
		{
			if(expr[j]=='(')
				++left;
			if(expr[j]==')')
				++right;
		    if(right==left)
			{f=1; break;}
		}
		if(f==1)
		{
			for(i=expr.length;i>=j;--i)
				expr[i+1]=expr[i];
			expr[j+1]='(';
		}
		return;
	}
	public void parenth()
	{
		int i;
		for(i=0;i<expr.length;++i)
		{
			if(expr[i]=='^')
			{
				insertRight(i);
				insertLeft(i);
				++i;
			}
		}
		for(i=0;i<expr.length;++i)
		{
			if(expr[i]=='*'||expr[i]=='/')
			{
				insertRight(i);
				insertLeft(i);
				++i;
			}
		}
		for(i=0;i<expr.length;++i)
		{
			if(expr[i]=='-'||expr[i]=='+')
			{
				insertRight(i);
				insertLeft(i);
				++i;
			}
		}
		//System.out.println(expr+"\n");
	}
	public void makePostfix()
	{
		int i,j=0,c;
		char ch;
		for(i=0;i<expr.length;++i)
			{
				if(expr[i]>='0' && expr[i]<='9')
				{
					post[i+1]=expr[i];
					++j;
				}
				else if(expr[i]=='(' || expr[i]=='+' || expr[i]=='-'||expr[i]=='*'||expr[i]=='/'||expr[i]=='^' )
				{
					c=Push(expr[i]);
					if(c==-1) break;
				}
				else if(expr[i]==')')
				{
					while(Stack[top]!='(')
					{
						ch=Pop();
						post[j]=ch;
						++j;
					}
					ch=Pop();
				}
				else continue;
			}
		post[j]='\0';
	    //System.out.println(post+"\n");
	}
	public int evaluate()
	{
		int i,val,lue,num1,num2,c;
		for(i=0;post[i]!='\0';++i)
			{
				if(post[i]>='0' && post[i]<='9')
				{
					lue=post[i]-48;
					c=Push_calc(lue);
					if(c==-1) break;
				}
				else if(post[i]=='(' || post[i]=='+' || post[i]=='-'||post[i]=='*'||post[i]=='/'||post[i]=='^' )
				{
					num1=Pop_calc();
					num2=Pop_calc();
					switch(post[i])
					{
					case '+': val=num2+num1; break;
					case '-': val=num2-num1; break;
					case '*': val=num2*num1; break;
					case '/': val=num2/num1; break;
					default: val=0; 
					}
					c=Push_calc(val);
					if(c==-1) break;
				}
				else continue;
			}
		return intStack[top];
	}

}
