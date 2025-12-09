/////////////////////////////
//      CURRENT YEAR       //
/////////////////////////////
const year = document.querySelector("#currentYear");

const today = new Date();

year.innerHTML = today.getFullYear();

//////////////////////////////
//      LAST MODIFIED       //
//////////////////////////////
const last = document.querySelector("#lastModified")
const lastModified = new Date(document.lastModified);
last.innerHTML = `Last Modified on: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(lastModified)}</span>`