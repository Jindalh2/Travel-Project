const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = document.querySelector(".autocom-box");

inputBox.onkeyup = (e) =>{
    // console.log(e.target.value);
    let userData = e.target.value;
    let emptyArray = []
;
if(userData){
   emptyArray = suggestions.filter((data) =>
   {
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
   });
//    console.log(emptyArray);
emptyArray = emptyArray.map((data) =>
{
   return data = '<li>' + data + '<li>';
});
    console.log(emptyArray);
   searchWrapper.classList.add("active");
   showSuggestions(emptyArray);
   let allList =suggBox.querySelectorAll("li");
   for(let i = 0 ; i < allList.length; i++){
    //    adding onclick attribute here in all li tag
    allList[i].setAttribute("onclick","select(this)");
   }
}
else
{
    searchWrapper.classList.remove("active");
  
}
}

function select(element)
{
    let selectUserData = element.textContent;
    // console.log(selectUserData);
    inputBox.value = selectUserData;
}


function showSuggestions(list){
    let listData;
    if(!list.length)
    {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '<li>';
    }
    else
    {
        listData  = list.join('');
    }
    suggBox.innerHTML = listData;
}