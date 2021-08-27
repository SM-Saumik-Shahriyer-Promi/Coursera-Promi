var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jason";
names[4]="Paul";
names[5]="Frank";
names[6]="Larry";
names[7]="Paula";
names[8]="Laura";
names[9]="Jim";


for (var x = 0; x < names.length; x++) {
	if(names[x].charAt(0)==='J'|| names[x].charAt(0)==='j'){
        console.log("Good Bye "+ names[x])
	}
	else{
		console.log("Hello "+ names[x])
	}
}