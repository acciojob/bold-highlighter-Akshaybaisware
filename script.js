function highlight() {
    //Write your code here
	let boldwords = document.getElementsByTagName('strong');
	for(let i=0;i<boldwords.length;i++)
		{
			boldwords[i].classList.add("highlight");
		}


}


function return_normal() {
    //Write your code here
 let boldwords = document.getElementsByTagName('strong');
	for(let i=0;i<boldwords.length;i++)
		{
			boldwords[i].classList.remove("highlight");
		}
    
}
