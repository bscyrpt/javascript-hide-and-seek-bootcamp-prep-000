function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  //have to use querySelectorAll to get nodelist
  const nodes = document.querySelectorAll('.ranked-list')

  for(let i=0,l=nodes.length;i<l;i++){
    //get any child nodes
    let children = nodes[i].children

    //loop through child and increment by n
    for(let j=0,k=children.length;j<k;j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

//oh this is that breadth-first search
function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while(nextNode){
    //set current to nextNode
    node = nextNode
    //set nextnode to children[0]
    nextNode = node.children[0]
  }

  return node


}
