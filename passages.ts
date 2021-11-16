
class PassagesClass extends Map<string,Map<string,any>> {
        private byTag : Map<string,Map<string,any>[]>
        public TwineScript_ObjectName :string;
        public getTagged(t:string): Array<Map<string,any>> {
            return [];
        }
        constructor() {
            super();
            this.byTag = new Map();
        }
  }

const Passages = new PassagesClass();
export default Passages;
