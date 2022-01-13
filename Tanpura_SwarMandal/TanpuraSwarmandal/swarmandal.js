autowatch = 1;

inlets = 1;
outlets = 2;
function getMidiFromNote(key){
		post("received" + key);
		switch(key){
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
		case 'A#': sa = 58; break;
		case 'B': sa = 59; break;		
		}
		return sa;
	}
function getBhairavNotes(key){
	//sa re' ga ma pa dha' ni sa 
	sa = getMidiFromNote(key);
	post("recevied sa: "+sa);
	factor = [0,1, 4, 5, 7, 8, 11, 12];
	
	for(i=0;i<15;i++){
		if(i<8){	
			factor[i] = sa + factor[i];
		}
		else if (i >= 8 && i < 14){
			factor[i] = factor[i%7] + 12;
		}
		else{
			factor[i] =  factor[i%7] + 24;
		}
	}
	/*
	delay = [0, 100,200, 300, 400, 500, 600, 700];
	
	if (dir == 1){
		delay=delay.reverse();
		}
	post(delay);
	*/
	post("factor:"+factor);
	
	outlet(0, factor);

}


function getDelayPerDirection(dir){
	
	delay = [0, 100,200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];
	
	if (dir == 1){
		delay=delay.reverse();
		}
	post("delay:"+delay);

	outlet(1, delay);
}

