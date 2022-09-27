let valami = {
  zene: "Zenecim",
  hossz: 90,

}
class Zene{
  constructor(cim, hossz) {
    this.cim = cim;
    this.hossz = hossz
    list.push(this)
  }
  
  
}

function klikk() {
  list = new Zene();
  let.zene = document.getElementById('cim').value;
  
  let hossz = parseFloat(document.getElementById('mp').value);
  let zene = new Zene(cim, hossz);
  document.getElementById('ki').textContent

}
let list = [];