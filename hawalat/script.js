
function addData() {
  const name = document.getElementById('name').value;
  const sar = parseFloat(document.getElementById('sar').value) || 0;
  const syp = parseFloat(document.getElementById('syp').value) || 0;
  const purpose = document.getElementById('purpose').value;
  const date = document.getElementById('date').value;
  const notes = document.getElementById('notes').value;

  const row = [name, sar, syp, purpose, date, notes];
  const data = JSON.parse(localStorage.getItem("transfers") || "[]");
  data.push(row);
  localStorage.setItem("transfers", JSON.stringify(data));

  // تحديث المجاميع
  updateTotals();

  // إعادة تعيين الحقول
  document.getElementById('name').value = "";
  document.getElementById('sar').value = "";
  document.getElementById('syp').value = "";
  document.getElementById('purpose').value = "";
  document.getElementById('date').value = "";
  document.getElementById('notes').value = "";
}

function updateTotals() {
  const data = JSON.parse(localStorage.getItem("transfers") || "[]");
  let totalSar = 0;
  let totalSyp = 0;
  data.forEach(row => {
    totalSar += parseFloat(row[1]) || 0;
    totalSyp += parseFloat(row[2]) || 0;
  });
  document.getElementById("totalSar").textContent = totalSar.toFixed(2);
  document.getElementById("totalSyp").textContent = totalSyp.toFixed(2);
}

window.onload = updateTotals;
