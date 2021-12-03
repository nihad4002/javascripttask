function tersstring(str){
    let ters="";
    for (let i = str.length-1; i >= 0 ; i--) {
        ters+=str[i];
    }
    return ters;
}
console.log(tersstring("Nihad Berdeli"));
//-----------------------------------------------------------------
class salam{
    constructor(number,plus,minus,multiply,divide){
        this.number=number;
        this.plus=plus;
        this.minus=minus;
        this.multiply=multiply;
        this.divide=divide;
    }
    plus=function(){
        number+=plus;
        return number;
    }
    minus=function(){
        number=plus()
        number-=minus;
        return number
    }
    multiply=function(){
        number=minus()
        number*=multiply;
        return number
    }
    divide=function(){
        number=multiply()
        number/=divide;
        return number;
    }

}
let result=new salam(50,6,30,3,2)
console.log(result.divide)