function Edit_Dist(s,t){
  const mem= new Map();
  let a=0;let b=0;let c=0;
  function mem_AEdit(mem,s,t){
    if (mem.has((s,t))){
      return mem.get((s,t))
  }else {
    if (s==''){
      return t.length
      }
    if (t==''){
      return s.length
      }
    if (s.slice(0,1)==t.slice(0,1)){
      return mem_AEdit(mem,s.slice(1),t.slice(1))
    }
    a= 1+mem_AEdit(mem,s.slice(1),t);
    mem.set((s.slice(1),t),a);
    b= 1+mem_AEdit(mem,s.slice(1),t.slice(1));
    mem.set((s.slice(1),t.slice(1)),b);
    c= 1+mem_AEdit(mem,t.slice(1).concat(s),t);
    mem.set((s,t.slice(1)),c);
    }
    return Math.min(a,b,c)
  }
  return mem_AEdit(mem,s,t)
}

function ModBinary(list,item) {
	//To be fixed
    let Cell=new Array();
    var core=0;
    var dawn=0;
    var stop=list.length-1;
    while (dawn<=stop) {
        core=Math.floor((dawn+stop)/2);
        if (list[core][0]<item){
          if ((list[core][0]).startsWith(item.slice(0,2))){
		  	if (Edit_Dist(list[core][0],item)<(item.length*0.5)) {Cell=Cell.concat(list[core][1]);}
		  }
                dawn=core+1;}
        else if(list[core][0]>item){
          if (list[core][0].startsWith(item.slice(0,2))){
		  	if (Edit_Dist(list[core][0],item)<(item.length*0.5)) {Cell=Cell.concat(list[core][1]);}
		  }
              stop=core-1;}
        else {return list[core][1]};}
    return Cell;}
		
function count(list,obj){
  var count=0;
  for (var i of list){if (i==obj){count++}}return count}

function crash(mode){
  let cell= new Set();
  let seen= new Set();
  let max= 2;
  for (var piece of mode) {
    if (!(seen.has(piece))){
      var counts=count(mode,piece);
      seen.add(piece);
        if (counts>max){max=counts;cell= new Set();cell.add(piece);}
        else if(counts==max){cell.add(piece);}}
      }
  if(cell==0){
  	return mode
  }
  return cell}
		
function jsSearch(index){
	let tape=[];
	let item=document.getElementById("search").value;
	document.getElementById("search").value='';
	
	item=item.toLowerCase();
	item=item.split(" ");
	for(var part of item){
	    tape=tape.concat(ModBinary(index,part));
	}
	return Array.from(crash(tape));
}

function DivGen(list){
	for (var object of list){
		var Detail=JSON.parse(object)
		const div = document.createElement("div");
		div.classList.add("window");
		div.innerHTML = `${Detail[0].link(`${Detail[2]}`)} ${Detail[1]}`;
		document.getElementById("main").appendChild(div);
		Lightmode();
	}}

function AllinOne(){
	let Els=jsSearch(index);
	sessionStorage.setItem("Els",JSON.stringify(Els))
	window.open('stream.html', '_self')
	}

function Receive(){
	Els=JSON.parse(sessionStorage.getItem("Els"))
	DivGen(Els)

}



let index = [
  ["blue", [JSON.stringify(["industrial blue storage tote",35.00,"#"])]],
  ["grey", [JSON.stringify(["industrial grey storage tote",35.00,"#"])]],
  ["industrial", [JSON.stringify(["industrial grey storage tote",35.00,"#"]), JSON.stringify(["industrial blue storage tote",35.00,"#"]), JSON.stringify(["industrial red storage tote",35.00,"#"])]],
  ["red", [JSON.stringify(["industrial red storage tote",35.00,"#"])]],
  ["storage", [JSON.stringify(["industrial grey storage tote",35.00,"#"]), JSON.stringify(["industrial blue storage tote",35.00,"#"]), JSON.stringify(["industrial red storage tote",35.00,"#"])]],
  ["tote", [JSON.stringify(["industrial blue storage tote",35.00,"#"]), JSON.stringify(["industrial red storage tote",35.00,"#"]), JSON.stringify(["industrial grey storage tote",35.00,"#"]) ]],
  ];
