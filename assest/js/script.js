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
        this.number+=plus;
        return this.number;
    }
    minus=function(){
        this.number=plus()
        this.number-=this.minus;
        return this.number
    }
    multiply=function(){
        this.number=minus()
        this.number*=this.multiply;
        return this.number
    }
    divide=function(){
        number=multiply()
        this.number/=this.divide;
        return this.number;
    }

}
let result=new salam(50,6,30,3,2)
console.log(result.divide)