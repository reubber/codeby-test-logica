const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  function filtro(cor) { 
    return products.filter((valor) => valor.startsWith(`${cor}`))
  }
  
  function counter(arr) {
    let count = {}
    arr.forEach(val => count[val] = (count[val] || 0 ) + 1)
    return count
  }
  
  function split(val){
    return val.map((val) => val.split("-")[1])
  }
  
    let preto = filtro('preto')
    let branco = filtro('branco')
    let vermelho = filtro('vermelho')
    let azul = filtro('azul')
  
    let result = {}
  
    result.preto = counter(split(preto))
    result.branco = counter(split(branco))
    result.vermelho = counter(split(vermelho))
    result.azul = counter(split(azul))
  
   return result

}
