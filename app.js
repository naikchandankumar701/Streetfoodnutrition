
// Sample food database
const foods = [
  { name: "Pav Bhaji (1 plate)", calories: 400, protein: 12, fat: 15, carbs: 45 },
  { name: "Momos (6 pcs)", calories: 300, protein: 8, fat: 10, carbs: 35 },
  { name: "Vada Pav", calories: 350, protein: 6, fat: 16, carbs: 42 },
  { name: "Bhel Puri", calories: 250, protein: 5, fat: 7, carbs: 35 },
  { name: "Pani Puri (6 pcs)", calories: 180, protein: 3, fat: 4, carbs: 30 },
  { name: "Samosa (1 pc)", calories: 262, protein: 3, fat: 17, carbs: 24 },
  { name: "Dosa (1 pc)", calories: 180, protein: 6, fat: 6, carbs: 26 },
  { name: "Chole Bhature", calories: 450, protein: 14, fat: 22, carbs: 45 },
];

// Load food options
const select = document.getElementById("search");
foods.forEach(f => {
  const option = document.createElement("option");
  option.text = f.name;
  select.add(option);
});

const plate = [];
function addToPlate() {
  const foodName = select.value;
  const qty = parseInt(document.getElementById("qty").value);
  const food = foods.find(f => f.name === foodName);
  if (!food) return;

  plate.push({ ...food, qty });
  renderPlate();
}

function renderPlate() {
  const list = document.getElementById("plateList");
  list.innerHTML = "";

  let totalCal = 0, totalPro = 0, totalFat = 0, totalCarb = 0;

  plate.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${item.name}</strong> × ${item.qty} = ${(item.calories * item.qty)} kcal`;
    list.appendChild(div);

    totalCal += item.calories * item.qty;
    totalPro += item.protein * item.qty;
    totalFat += item.fat * item.qty;
    totalCarb += item.carbs * item.qty;
  });

  document.getElementById("totals").innerHTML = `
    <p><strong>Totals:</strong><br>
    Calories: ${totalCal} kcal — Protein: ${totalPro} g — Fat: ${totalFat} g — Carbs: ${totalCarb} g</p>
  `;
}
