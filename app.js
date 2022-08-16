// https://calculator.swiftutors.com/area-of-an-octagon-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofOctagonRadio = document.getElementById('areaofOctagonRadio');
const edgeLengthofOctagonRadio = document.getElementById('edgeLengthofOctagonRadio');

let areaofOctagon;
let edgeLengthofOctagon = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

areaofOctagonRadio.addEventListener('click', function() {
  variable1.textContent = 'Edge Length of Octagon (cm)';
  edgeLengthofOctagon = v1;
  result.textContent = '';
});

edgeLengthofOctagonRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Octagon (cm²)';
  areaofOctagon = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofOctagonRadio.checked)
    result.textContent = `Area of Octagon = ${computeAreaofOctagon().toFixed(5)} cm²`;

  else if(edgeLengthofOctagonRadio.checked)
    result.textContent = `Edge Length of Octago = ${computeEdgeLengthofOctago().toFixed(5)} cm`;
})

// calculation

function computeAreaofOctagon() {
  return (2 + 2 * Math.sqrt(2)) * Math.pow(Number(edgeLengthofOctagon.value), 2);
}

function computeEdgeLengthofOctago() {
  return Math.sqrt(Number(areaofOctagon.value) / (2 + 2 * Math.sqrt(2)));
}