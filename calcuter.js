


function CalculateResult(){
  var tip = document.getElementById('tipInput').value;
  var bill = Number(document.getElementById('billTotal').value);
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  var tipValue = bill * (tip/100);
  var finalBill = bill+ tipValue;
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount');
  var totalBillWithTip = document.querySelector('#totalBillWithTip');

  tipAmount.value = tipValue.toFixed(2);
 totalBillWithTip.value =finalBill.toFixed(2);

 //Show Results

  document.getElementById().style.display='block'
}
function HandleRange(){
  var tip = document.getElementById('tipInput').value;
  document.getElementById("tipOutput").innerHTML = tip + '%'

}