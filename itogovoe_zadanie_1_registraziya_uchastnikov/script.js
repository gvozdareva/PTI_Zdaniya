function form_pack()
{
	var field1=document.forms.form1.input1.value;
	var field2=document.forms.form1.input2.value;
	var field3=document.forms.form1.input3.value;
	var list1=document.forms.form1.age.value;
	var choice1=document.forms.form1.input5;
	var choice2=document.forms.form1.input6;
	var check1=document.forms.form1.input7;
	
	var с1v=false;
	var с2v=false;
	var list=false;
	var f1v=false;

	for (var i=0; i<choice1.length; i++)
		{
			if (choice1[i].checked==true)
			{
				с1v=true;
				break;
			
			}
		}	
	for (var i=0; i<choice2.length; i++)
		{
			if (choice2[i].checked==true)
			{
				с2v=true;
				break;
			}
		}
	for (var i=0; i<check1.length; i++)
		{
			if (check1[i].checked==true)
			{
				list=true;
				break;
			}
		}
		
	if ((field1!='') && (field2!='') && (field3!='')  && (list1!=0) && (с1v==true) && (с2v==true) && (list==true))
		{
			f1v=true;
			alert("Всё поля были заполнены!");
		}
		else 
		{		
			f1v=false;
			alert("Необходимо заполнить все поля в данной форме!!!!");
			}
			
		return f1v;
}