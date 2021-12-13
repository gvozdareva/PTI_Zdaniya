function form_pack() {
  var r1 = document.forms.form1.input1;
  var r2 = document.forms.form1.input2;
  var r3 = document.forms.form1.input3;

  var c4 = document.forms.form1.input4;
  var c5 = document.forms.form1.input5;
  var c6 = document.forms.form1.input6;

  var in7 = document.forms.form1.input7.value;
  var in8 = document.forms.form1.input8.value;
  var in9 = document.forms.form1.input9.value;

  var list1 = document.forms.form1.zifra;

  var stchet = 0;

  for (var i = 0; i < r1.length; i++) {
    if (r1[i].checked == true && r1[i].value == "1") {
      stchet++;
      break;
    }
  }
  for (var i = 0; i < r2.length; i++) {
    if (r2[i].checked == true && r2[i].value == "1") {
      stchet++;
      break;
    }
  }
  for (var i = 0; i < r3.length; i++) {
    if (r3[i].checked == true && r3[i].value == "1") {
      stchet++;
      break;
    }
  }

  let c4v = false;
  for (var i = 0; i < c4.length; i++) {
    if (
      (c4[i].checked == false && c4[i].value == "1") ||
      (c4[i].checked == true && c4[i].value == "0") ||
      c4v == true
    ) {
      c4v = false;
      break;
    } else {
      c4v = true;
    }
    if (c4v == true) {
      stchet++;
    }
  }
  //либо с c4v == true то тогда даже если будет 2 варианта правильно он засчитывает только один
  //либо он засчитывает 2 вариант сразу, как 2 балла, а 3 вариант, как один

  let c5v = false;
  for (var i = 0; i < c5.length; i++) {
    if (
      (c5[i].checked == false && c5[i].value == "1") ||
      (c5[i].checked == true && c5[i].value == "0") ||
      c5v == true
    ) {
      c5v = false;
      break;
    } else {
      c5v = true;
    }
    if (c5v == true) {
      stchet++;
    }
  }
  //либо с c4v == true то тогда даже если будет 2 варианта правильно он засчитывает только один
  //либо он засчитывает 2 вариант сразу, как 2 балла, а 3 вариант, как один

  let c6v = false;
  for (var i = 0; i < c6.length; i++) {
    if (
      (c6[i].checked == false && c6[i].value == "1") ||
      (c6[i].checked == true && c6[i].value == "0") ||
      c6v == true
    ) {
      c6v = false;
      break;
    } else {
      c6v = true;
    }
    if (c6v == true) {
      stchet++;
    }
  }
  

  if (in7 == "4") {
    stchet++;
  }
  if (in8 == "4") {
    stchet++;
  }
  if (in9 == "4") {
    stchet++;
  }

  for (var i = 0; i < list1.length; i++) {
    if (list1[i].value == "1") {
      stchet++;
      break;
    }
  }
  /*
  if (
    с4v == true &&
    с5v == true &&
    с6v == true &&
    r1[i].checked == true &&
    r2[i].checked == true &&
    r3[i].checked == true &&
    in7 != "" &&
    in8 != "" &&
    in9 != "" &&
    list1 != 0
  ) {
    f1v = true;
    alert("Всё поля были заполнены!");
  } else {
    f1v = false;
    alert("Необходимо заполнить все поля в данной форме!!!!");
  }

  return f1v;
  */

  alert("vi nabrali " + stchet);

  if (stchet < 6) {
    alert("nu takoe");
  } else if (stchet > 9) {
    alert("kruto");
  }
}
