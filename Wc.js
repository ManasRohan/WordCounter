function count()
{
var noofwords=document.getElementById("WordCount").value;
noofwords=noofwords.match(/\w+/g);
if(noofwords.length<201)
{
document.getElementById("count").innerHTML="Number of words written: "+noofwords.length;
}
else
{
alert("You have exced the words limit,please enter the words less than or equal to 200.\n\n Number of words entered: "+noofwords.length);
}
}