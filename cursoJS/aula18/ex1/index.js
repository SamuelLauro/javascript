var ano = new Date().getFullYear();

for(let i=ano; i>=1900; i--){
    document.getElementById("ano").innerHTML +="<option value='"+i+"'>"+i+"</option"
}