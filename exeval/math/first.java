package math;

public class first {
   
	public static void main(String[] args)
	{
		int c;
		Calc object=new Calc();
		object.getData();
		//Insertion of parantheses correctly
		object.parenth();
		//Infix with parantheses to postfix
		object.makePostfix();
	    //Evaluation of postfix expr
		c=object.evaluate();
		if(c==-1) System.out.println("Expression could not be evaluated");
		else System.out.println(c+"\n");
	}
	 
}

