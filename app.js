// Simple static JS port of the calculator (full 40 item DB)
const SAMPLE_FOODS = [
{"id":1,"name":"Samosa","category":"Snacks","veg":true,"cooking":"fried","spicy":true,"calories":262,"protein":3,"fat":17,"carbs":24,"fiber":2,"allergens":["gluten"],"notes":"Popular fried pastry","region":"All"},
{"id":2,"name":"Kachori","category":"Snacks","veg":true,"cooking":"fried","spicy":false,"calories":200,"protein":4,"fat":10,"carbs":22,"fiber":1,"allergens":[],"notes":"Stuffed pastry","region":"All"},
{"id":3,"name":"Pakora (100g)","category":"Snacks","veg":true,"cooking":"fried","spicy":false,"calories":250,"protein":6,"fat":15,"carbs":20,"fiber":2,"allergens":[],"notes":"Fritters","region":"All"},
{"id":4,"name":"Vada Pav","category":"Snacks","veg":true,"cooking":"fried","spicy":true,"calories":290,"protein":6,"fat":14,"carbs":34,"fiber":3,"allergens":["gluten"],"notes":"Spiced potato fritter in bun","region":"West"},
{"id":5,"name":"Pav Bhaji (1 plate)","category":"Meals","veg":true,"cooking":"stir","spicy":true,"calories":400,"protein":10,"fat":15,"carbs":55,"fiber":6,"allergens":[],"notes":"Veg mash with bread","region":"All"},
{"id":6,"name":"Bhel Puri","category":"Snacks","veg":true,"cooking":"assembled","spicy":true,"calories":150,"protein":4,"fat":2,"carbs":30,"fiber":3,"allergens":[],"notes":"Puffed rice salad","region":"All"},
{"id":7,"name":"Sev Puri","category":"Snacks","veg":true,"cooking":"assembled","spicy":true,"calories":180,"protein":3,"fat":6,"carbs":28,"fiber":3,"allergens":[],"notes":"Chaat with sev","region":"All"},
{"id":8,"name":"Dahi Puri","category":"Snacks","veg":true,"cooking":"assembled","spicy":false,"calories":220,"protein":5,"fat":7,"carbs":35,"fiber":3,"allergens":["dairy"],"notes":"Curd topped puris","region":"All"},
{"id":9,"name":"Pani Puri (6 pcs)","category":"Snacks","veg":true,"cooking":"assembled","spicy":true,"calories":180,"protein":4,"fat":6,"carbs":30,"fiber":4,"allergens":[],"notes":"Tangy water-filled puris","region":"All"},
{"id":10,"name":"Chole Bhature","category":"Meals","veg":true,"cooking":"fried","spicy":true,"calories":450,"protein":12,"fat":18,"carbs":60,"fiber":8,"allergens":[],"notes":"Chickpea curry with fried bread","region":"North"},
{"id":11,"name":"Masala Dosa","category":"South Indian","veg":true,"cooking":"grilled","spicy":true,"calories":350,"protein":9,"fat":12,"carbs":55,"fiber":3,"allergens":["dairy"],"notes":"Fermented rice crepe with potato","region":"South"},
{"id":12,"name":"Idli (2 pcs)","category":"Breakfast","veg":true,"cooking":"steamed","spicy":false,"calories":120,"protein":4,"fat":0.5,"carbs":25,"fiber":2,"allergens":[],"notes":"Steamed rice cakes","region":"South"},
{"id":13,"name":"Medu Vada (2 pcs)","category":"Breakfast","veg":true,"cooking":"fried","spicy":false,"calories":300,"protein":8,"fat":12,"carbs":40,"fiber":3,"allergens":[],"notes":"Lentil donut","region":"South"},
{"id":14,"name":"Uttapam","category":"Breakfast","veg":true,"cooking":"grilled","spicy":false,"calories":280,"protein":7,"fat":10,"carbs":45,"fiber":3,"allergens":[],"notes":"Thick pancake","region":"South"},
{"id":15,"name":"Chaat (aloo tikki)","category":"Snacks","veg":true,"cooking":"fried","spicy":true,"calories":300,"protein":7,"fat":15,"carbs":35,"fiber":4,"allergens":[],"notes":"Potato-based chaat","region":"North"},
{"id":16,"name":"Rajma Chawal","category":"Meals","veg":true,"cooking":"stew","spicy":false,"calories":380,"protein":12,"fat":8,"carbs":65,"fiber":8,"allergens":[],"notes":"Kidney beans with rice","region":"North"},
{"id":17,"name":"Chole Kulche","category":"Meals","veg":true,"cooking":"stew","spicy":false,"calories":420,"protein":11,"fat":12,"carbs":65,"fiber":6,"allergens":[],"notes":"Chickpeas with bread","region":"North"},
{"id":18,"name":"Chicken Kebab (100g)","category":"Non-Veg","veg":false,"cooking":"grilled","spicy":false,"calories":180,"protein":20,"fat":10,"carbs":0,"fiber":0,"allergens":[],"notes":"Grilled kebab","region":"All"},
{"id":19,"name":"Shawarma Roll","category":"Non-Veg","veg":false,"cooking":"grilled","spicy":false,"calories":350,"protein":18,"fat":12,"carbs":40,"fiber":3,"allergens":[],"notes":"Middle-eastern wrap","region":"All"},
{"id":20,"name":"Egg Roll","category":"Non-Veg","veg":false,"cooking":"grilled","spicy":false,"calories":250,"protein":12,"fat":8,"carbs":30,"fiber":2,"allergens":["egg"],"notes":"Egg in bread","region":"All"},
{"id":21,"name":"Fish Fry (100g)","category":"Non-Veg","veg":false,"cooking":"fried","spicy":false,"calories":220,"protein":22,"fat":14,"carbs":0,"fiber":0,"allergens":["fish"],"notes":"Fried fish","region":"All"},
{"id":22,"name":"Mutton Seekh Kebab (100g)","category":"Non-Veg","veg":false,"cooking":"grilled","spicy":false,"calories":260,"protein":20,"fat":18,"carbs":2,"fiber":0,"allergens":[],"notes":"Grilled kebab","region":"All"},
{"id":23,"name":"Jalebi (2 pcs)","category":"Sweets","veg":true,"cooking":"fried","spicy":false,"calories":220,"protein":2,"fat":8,"carbs":40,"fiber":0,"allergens":[],"notes":"Sweet syrupy spirals","region":"All"},
{"id":24,"name":"Gulab Jamun (2 pcs)","category":"Sweets","veg":true,"cooking":"fried","spicy":false,"calories":300,"protein":4,"fat":12,"carbs":45,"fiber":0,"allergens":["dairy"],"notes":"Milk-solid sweets","region":"All"},
{"id":25,"name":"Rasgulla (2 pcs)","category":"Sweets","veg":true,"cooking":"boiled","spicy":false,"calories":180,"protein":4,"fat":2,"carbs":38,"fiber":0,"allergens":["dairy"],"notes":"Syrupy cheese balls","region":"East"},
{"id":26,"name":"Kulfi","category":"Sweets","veg":true,"cooking":"chilled","spicy":false,"calories":200,"protein":5,"fat":10,"carbs":25,"fiber":0,"allergens":["dairy"],"notes":"Milk-based ice cream","region":"All"},
{"id":27,"name":"Lassi (1 glass)","category":"Drinks","veg":true,"cooking":"blended","spicy":false,"calories":250,"protein":8,"fat":8,"carbs":35,"fiber":0,"allergens":["dairy"],"notes":"Yogurt drink","region":"All"},
{"id":28,"name":"Sugarcane Juice (200ml)","category":"Drinks","veg":true,"cooking":"pressed","spicy":false,"calories":150,"protein":0,"fat":0,"carbs":38,"fiber":0,"allergens":[],"notes":"Fresh juice","region":"All"},
{"id":29,"name":"Chai (1 cup)","category":"Drinks","veg":true,"cooking":"brewed","spicy":false,"calories":70,"protein":2,"fat":2,"carbs":12,"fiber":0,"allergens":["dairy"],"notes":"Tea with milk and sugar","region":"All"},
{"id":30,"name":"Cold Coffee (200ml)","category":"Drinks","veg":true,"cooking":"blended","spicy":false,"calories":180,"protein":5,"fat":5,"carbs":28,"fiber":0,"allergens":["dairy"],"notes":"Coffee with milk","region":"All"},
{"id":31,"name":"Falooda","category":"Drinks","veg":true,"cooking":"assembled","spicy":false,"calories":300,"protein":6,"fat":10,"carbs":50,"fiber":2,"allergens":["dairy"],"notes":"Dessert drink","region":"All"},
{"id":32,"name":"Momos (6 pcs veg)","category":"Snacks","veg":true,"cooking":"steamed","spicy":false,"calories":240,"protein":8,"fat":6,"carbs":40,"fiber":3,"allergens":["gluten"],"notes":"Steamed dumplings","region":"All"},
{"id":33,"name":"Chicken Momos (6 pcs)","category":"Non-Veg","veg":false,"cooking":"steamed","spicy":false,"calories":280,"protein":14,"fat":8,"carbs":35,"fiber":3,"allergens":["gluten"],"notes":"Steamed chicken dumplings","region":"All"},
{"id":34,"name":"Egg Bhurji with Pav","category":"Non-Veg","veg":false,"cooking":"stir","spicy":false,"calories":350,"protein":18,"fat":15,"carbs":40,"fiber":2,"allergens":["egg"],"notes":"Scrambled eggs with bread","region":"All"},
{"id":35,"name":"Bread Omelette","category":"Breakfast","veg":false,"cooking":"grilled","spicy":false,"calories":280,"protein":14,"fat":12,"carbs":30,"fiber":2,"allergens":["egg"],"notes":"Egg on bread","region":"All"},
{"id":36,"name":"Frankie Roll","category":"Snacks","veg":false,"cooking":"grilled","spicy":false,"calories":300,"protein":12,"fat":10,"carbs":40,"fiber":3,"allergens":[],"notes":"Stuffed wrap","region":"All"},
{"id":37,"name":"Misal Pav","category":"Meals","veg":true,"cooking":"stew","spicy":true,"calories":400,"protein":12,"fat":15,"carbs":55,"fiber":6,"allergens":[],"notes":"Spicy curry with bread","region":"West"},
{"id":38,"name":"Dhokla (100g)","category":"Snacks","veg":true,"cooking":"steamed","spicy":false,"calories":160,"protein":6,"fat":5,"carbs":25,"fiber":3,"allergens":[],"notes":"Fermented gram cake","region":"West"},
{"id":39,"name":"Poha","category":"Breakfast","veg":true,"cooking":"stir","spicy":false,"calories":180,"protein":4,"fat":4,"carbs":35,"fiber":2,"allergens":[],"notes":"Flattened rice dish","region":"All"},
{"id":40,"name":"Paratha (1 with butter)","category":"Meals","veg":true,"cooking":"grilled","spicy":false,"calories":300,"protein":8,"fat":12,"carbs":45,"fiber":4,"allergens":["gluten"],"notes":"Flatbread with butter","region":"All"}
];

let foods = SAMPLE_FOODS.slice();
let plate = [];

function $id(id){return document.getElementById(id)}

function renderFoods() {
  const list = $id('foodList');
  list.innerHTML = '';
  const q = $id('search').value.toLowerCase();
  const fv = $id('filterVeg').value;
  const fc = $id('filterCooking').value;
  const fs = $id('filterSpice').value;
  const region = $id('region').value;
  const results = foods.filter(f => {
    if (q && !f.name.toLowerCase().includes(q)) return false;
    if (fv==='veg' && !f.veg) return false;
    if (fv==='nonveg' && f.veg) return false;
    if (fc!=='all' && f.cooking!==fc) return false;
    if (fs==='spicy' && !f.spicy) return false;
    if (fs==='mild' && f.spicy) return false;
    if (region!=='All' && f.region!=='All' && f.region!==region) return false;
    return true;
  });
  if(results.length===0){ list.innerHTML = '<div class="card small">No items found</div>'; return; }
  results.forEach(f => {
    const card = document.createElement('div'); card.className='card small';
    card.innerHTML = `<div style="display:flex;justify-content:space-between"><div><strong>${f.name}</strong><div style="font-size:13px;color:#475569">${f.notes}</div></div><div style="text-align:right"><div style="font-weight:700">${f.calories} kcal</div><div style="font-size:12px;color:#475569">${f.protein}g P • ${f.fat}g F • ${f.carbs}g C</div></div></div>`;
    const controls = document.createElement('div'); controls.style.marginTop='8px';
    const sel = document.createElement('select');
    [1,0.5,2,3].forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent = v===1? '1 piece': v+' pcs'; sel.appendChild(o)});
    const btn = document.createElement('button'); btn.style.marginLeft='8px'; btn.textContent='Add to Plate';
    btn.onclick = ()=>{ addToPlate(f, Number(sel.value)); };
    controls.appendChild(sel); controls.appendChild(btn);
    card.appendChild(controls);
    // warnings
    const warn = document.createElement('div'); warn.style.fontSize='13px'; warn.style.marginTop='8px';
    if(f.fat>15) warn.innerHTML += '<div style="color:#b91c1c">⚠️ High fat — limit intake</div>';
    if(f.protein>=10) warn.innerHTML += '<div style="color:#166534">✅ Good protein source</div>';
    if(f.calories>400) warn.innerHTML += '<div style="color:#92400e">⚠️ Calorie-dense</div>';
    card.appendChild(warn);
    list.appendChild(card);
  });
}

function addToPlate(item, qty=1){
  const existing = plate.find(p => p.id===item.id);
  if(existing){ existing.qty += qty; } else { plate.push({ ...item, qty }); }
  renderPlate();
}

function renderPlate(){
  const el = $id('plateList');
  if(plate.length===0){ el.innerHTML = 'No items yet — add foods to build a meal.'; $id('totals').innerHTML=''; return; }
  el.innerHTML = '';
  let total = {cal:0,pro:0,fat:0,carbs:0};
  plate.forEach(p=>{
    total.cal += p.calories * p.qty; total.pro += p.protein * p.qty; total.fat += p.fat * p.qty; total.carbs += p.carbs * p.qty;
    const li = document.createElement('div'); li.style.display='flex'; li.style.justifyContent='space-between'; li.style.alignItems='center'; li.style.padding='6px 0'; li.innerHTML = `<div><strong>${p.name}</strong><div style="font-size:13px;color:#475569">${(p.calories*p.qty).toFixed(0)} kcal • ${(p.protein*p.qty).toFixed(0)}g P</div></div>`;
    const controls = document.createElement('div');
    const minus = document.createElement('button'); minus.textContent='-'; minus.onclick = ()=>{ p.qty = Math.max(0.5, p.qty - 0.5); renderPlate(); }
    const plus = document.createElement('button'); plus.textContent='+'; plus.onclick = ()=>{ p.qty = p.qty + 0.5; renderPlate(); }
    const rem = document.createElement('button'); rem.textContent='Remove'; rem.style.background='transparent'; rem.style.color='#b91c1c'; rem.onclick = ()=>{ plate = plate.filter(x=>x.id!==p.id); renderPlate(); }
    controls.appendChild(minus); controls.appendChild(plus); controls.appendChild(rem);
    li.appendChild(controls); el.appendChild(li);
  });
  $id('totals').innerHTML = `<div>Total: <strong>${total.cal.toFixed(0)} kcal</strong></div><div style="font-size:13px;color:#475569">Protein: ${total.pro.toFixed(0)}g • Fat: ${total.fat.toFixed(0)}g • Carbs: ${total.carbs.toFixed(0)}g</div>`;
  const dailyGoal = computeDailyGoal();
  $id('dailyGoal').textContent = 'Daily goal (est): ' + dailyGoal + ' kcal';
  const perc = Math.round(total.cal / dailyGoal * 100);
  $id('totals').innerHTML += `<div style="margin-top:8px;font-size:13px">Daily %: ${perc}% of ${dailyGoal} kcal</div>`;
}

function computeDailyGoal(){
  const h = Number($id('height').value) || 165;
  const w = Number($id('weight').value) || 65;
  const bmi = w / ((h/100)*(h/100));
  const adj = Math.round(2000 + (bmi - 22) * 20);
  return Math.max(1200, adj);
}

// custom food add
// wait until DOM loaded to attach event handlers
window.addEventListener('load', ()=>{
  $id('addCustomBtn').onclick = ()=>{
    const name = $id('customName').value.trim();
    if(!name){ alert('Enter name'); return; }
    const cal = Number($id('customCalories').value) || 0;
    const pro = Number($id('customProtein').value) || 0;
    const fat = Number($id('customFat').value) || 0;
    const carbs = Number($id('customCarbs').value) || 0;
    const allergens = $id('customAllergens').value.split(',').map(s=>s.trim()).filter(Boolean);
    const id = Date.now();
    const custom = {id,name,category:'Custom',veg:true,cooking:'custom',spicy:false,calories:cal,protein:pro,fat:fat,carbs:carbs,fiber:0,allergens,notes:'User added',region:'All'};
    foods.unshift(custom); renderFoods(); alert('Custom food added'); $id('customName').value='';
  }

  $id('search').addEventListener('input', renderFoods);
  $id('filterVeg').addEventListener('change', renderFoods);
  $id('filterCooking').addEventListener('change', renderFoods);
  $id('filterSpice').addEventListener('change', renderFoods);
  $id('region').addEventListener('change', renderFoods);
  $id('clearPlate').onclick = ()=>{ plate = []; renderPlate(); }
  $id('copyMeal').onclick = ()=>{ const text = JSON.stringify({plate}); navigator.clipboard?.writeText(text); alert('Meal copied to clipboard'); }
  $id('height').addEventListener('change', renderPlate);
  $id('weight').addEventListener('change', renderPlate);

  renderFoods(); renderPlate();
});

