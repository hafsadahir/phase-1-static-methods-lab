class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9' -]+/g, '');
  }
  
  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let myResult = [];
    let Words = sentence.split( " " )
    for ( let n = 0; n < Words.length; n++ ) {
      if ( n == 0 ) {
        myResult.push( this.capitalize( Words[ n ] ) )
      } else {
        if ( exceptions.includes( Words[ n ] ) ) {
          myResult.push( Words[ n ] )
        } else {
          myResult.push( this.capitalize( Words[ n ] ) )
        }
      }

    }
    return myResult.join( " " );
  }
}

