// 함수의 인자로 들어오는 함수처리
function arrayProcess( data, f ) { // 노드배열, 함수
	for( key=0; key < data.length; key++ ){
	//for(var key in data ){
		f(  data[key].value );	// sum( frm.num[key].value )
	}
}

// 각각의 데이터를 더하는 함수
var sumResult = 0;

function sum(  data ){	// sum( frm.num[key].value )
	sumResult += parseInt(data);
}

// 각각의 데이터의 곱을 구하는 함수
var squareResult = new Array();
function square(  data ){			
	squareResult.push( data * data );
}
