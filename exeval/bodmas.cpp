#include<iostream.h>
#include<conio.h>
#include<math.h>
#include<stdlib.h>
#include<string.h>
const int size=250;
char Stack[50];
int intStack[50];
int top=-1;
char post[100];
int Push(char ele)
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
int Push_calc(int ele)
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
char Pop()
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
int Pop_calc()
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
void insertRight(int pos,char expr[])
{
	int i,j,right,left,f;
	right=0;left=0; f=0;
	for(j=pos+1;expr[j]!='\0';++j)
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
		for(i=strlen(expr);i>j;--i)
			expr[i+1]=expr[i];
		expr[j+1]=')';
	}
	return;
}
void insertLeft(int pos,char expr[])
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
		for(i=strlen(expr);i>=j;--i)
			expr[i+1]=expr[i];
		expr[j]='(';
	}
	return;
}
void parenth(char expr[])
{
	int i;
	for(i=0;expr[i]!='\0';++i)
	{
		if(expr[i]=='^')
		{
			insertRight(i,expr);
			insertLeft(i,expr);
			++i;
		}
	}
	for(i=0;expr[i]!='\0';++i)
	{
		if(expr[i]=='*'||expr[i]=='/')
		{
			insertRight(i,expr);
			insertLeft(i,expr);
			++i;
		}
	}
	for(i=0;expr[i]!='\0';++i)
	{
		if(expr[i]=='-'||expr[i]=='+')
		{
			insertRight(i,expr);
			insertLeft(i,expr);
			++i;
		}
	}
	cout<<expr<<"\n";
}
void makePostfix(char expr[])
{
	int i,j=0,c;
	char ch;
	for(i=0;expr[i]!='\0';++i)
		{
			if(expr[i]>='0' && expr[i]<='9')
			{
				post[j]=expr[i];
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
		cout<<post<<"\n";
}
int evaluate()
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
				case '^': val=pow(num2,num1); break;
				default: break;
				}
				c=Push_calc(val);
				if(c==-1) break;
			}
			else continue;
		}
	if(c==-1) return c;
	else return intStack[top];
}
void main()
{
	clrscr();
	int c;
	char expr[100];
	cin>>expr;
	//Insertion of parantheses correctly
	parenth(expr);
	//Infix with parantheses to postfix
	makePostfix(expr);
    //Evaluation of postfix expr
	c=evaluate();
	if(c==-1) cout<<"Expression could not be evaluated";
	else cout<<c<<"\n";
}
		/*1.Implement insertion of parentheses at correct place DONE
		  2.Implement each of the three phases in separate functions
		  3.Figure out two digit number :S otherwise lite
		  4.Implement everything in Java
		  5.Save in github and submit
	   */
	/*j=i;k=0;
				char str[30];
				while(post[j]>='0' && post[j]<='9')
				{
					str[k]=post[j]; ++j;++k;
				}
				str[k]='\0';
				cout<<str<<getch();
				lue=atoi(str);
				*/
