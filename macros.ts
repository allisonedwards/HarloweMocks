
class ITypeSignature {
    constructor(
        public pattern?: string,
        public value: any = null, 
        public min: number = null,
        public max: number = null,
        public integer: boolean = null,
        public range: any = null,
        public innerType: any = null
    ) {}
}
    
// export default class Macros {      
    export function add(name: string, fn: any, typeSig: any ) {
        console.log(`creating macro ${name}`);
        return add;
    }
    export var TypeSignature = {
        Any: new ITypeSignature("any"),
        zeroOrMore: function(...args) { return new ITypeSignature("0orMore",...args); }
    }
// }