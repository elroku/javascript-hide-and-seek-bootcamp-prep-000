// returns the first element that matches the selector

function getFirstSelector(selector){
  return document.querySelector(selector)

 }

 // pulls a .target out of #nested
 
 function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')

 }
 
// increases ranks in .ranked-list by n
function increaseRankBy(n){
  const incRank = document.getElementById('app').querySelectorAll('ul.ranked-list')

   for (let i = 0; i < incRank.length; i++){
    incRank[i].innerHTML = ((parseInt(incRank[i].innerHTML)) + n)
    }

 }

// returns the most deeply nested child in #grand-node
 function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]

 }