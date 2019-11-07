var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);





// const selectDivOne = document.querySelector('div.custom-select-one')
// const selectOne = document.querySelector('div.custom-select select')
// const selectedOne = document.querySelector('div.select-selected')

// selectDivOne.addEventListener('click', ()=>{
//     const style = selectedOne.innerHTML

//     if(style == "Light"){
//       bodyOneText.style.fontFamily = "Queen Anne Light"
//     } else if (style == "Light Italic"){
//       bodyOneText.style.fontFamily = "Queen Anne Light Italic"
//     } else if (style == "Regular"){
//       bodyOneText.style.fontFamily = "Queen Anne Regular"
//     } else if (style == "Regular Italic"){
//       bodyOneText.style.fontFamily = "Queen Anne Italic"
//     } else if (style == "Medium"){
//       bodyOneText.style.fontFamily = "Queen Anne Medium"
//     } else if (style == "Medium Italic"){
//       bodyOneText.style.fontFamily = "Queen Anne Medium Italic"
//     } else if (style == "Bold"){
//       bodyOneText.style.fontFamily = "Queen Anne Bold"
//     } else if (style == "Bold Italic"){
//       bodyOneText.style.fontFamily = "Queen Anne Bold Italic"
//     } 
// })

const bodySections = document.querySelectorAll('section.body')

bodySections.forEach(section=>{
  const allSelects = section.querySelectorAll('div.custom-select')


  allSelects.forEach(select=>{
    
    select.addEventListener('click', ()=>{
      const divNumber = select.getAttribute('data-num')
      const selectDiv = document.querySelector(`div.custom-select-${divNumber}`)
      const text = document.querySelector(`p.body-${divNumber}-text`)
      const selectSelected = selectDiv.querySelector('div.select-selected')
      const style = selectSelected.innerHTML
      if(style == "Light"){
        text.style.fontFamily = 'Queen Anne Light'
      } else if(style == "Light Italic"){
        text.style.fontFamily = "Queen Anne Light Italic"
      } else if(style == "Regular"){
        text.style.fontFamily = "Queen Anne Regular"
      } else if(style == "Regular Italic"){
        text.style.fontFamily = "Queen Anne Italic"
      } else if(style == "Medium"){
        text.style.fontFamily = "Queen Anne Medium"
      } else if(style == "Medium Italic"){
        text.style.fontFamily = "Queen Anne Medium Italic"
      } else if(style == "Bold"){
        text.style.fontFamily = "Queen Anne Bold"
      } else if(style == "Bold Italic"){
        text.style.fontFamily = "Queen Anne Bold Italic"
      }
      
  
      
    })
  })
})

