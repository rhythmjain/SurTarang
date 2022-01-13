autowatch = 1;
inlets = 1;
outlets = 4;
function playNote(midi){
	switch(midi){
		case 'C': sa = 48; break;
		case 'C#': sa = 49; break;
		case 'D': sa = 50; break;
		case 'D#': sa = 51; break;
		case 'E': sa = 52; break;
		case 'F': sa = 53; break;
		case 'F#': sa = 54; break;
		case 'G': sa = 55; break;
		case 'G#': sa = 56; break;
		case 'A': sa = 57; break;
		case 'A#': sa = 46; break;
		case 'B': sa = 47; break;		
	}
	
	str1 = sa;	
	str2 = sa + 12;
	str3 = sa + 12;
	str4 = sa + 7;
	post(str1, str2, str3, str4);
	post();

	outlet(0, str1);
	outlet(1, str2);
	outlet(2, str3);
	outlet(3, str4);
	
}
