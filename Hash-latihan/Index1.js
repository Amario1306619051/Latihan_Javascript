function anagramChecker(str1, str2) {
    // TODO: replace this
    let str1Map = new Map();
    let str2Map = new Map();
  str1 = str1.split("")
  str2 = str2.split("")
  var n = 1
  for(let k of str1){
      if(str1Map.has(k)){
          str1Map.set(k, n + 1)
      }
      else{
          str1Map.set(k, n)
      }
  }
  for(let k of str2){
        if(str2Map.has(k)){
            str2Map.set(k, n + 1)
        }
        else{
            str2Map.set(k, n)
        }
    }
    console.log(str1Map,str2Map)
    var hasilSementara = [];
    for(let k of str1Map){
        if(str1Map.get(k[0]) == str2Map.get(k[0])){
            hasilSementara.push(true)
        }
        else{
            hasilSementara.push(false)
        }

    }
    return hasilSementara
}

  
  console.log(anagramChecker("keen", "knee"));
  console.log(anagramChecker("kee", "knn"));
  console.log(anagramChecker("fried", "fired"));
  console.log(anagramChecker("makan",'namaka'));