export class Pdv {
    constructor(
        public id_reg?:any, 
        public cc_org?:string, 
        public cc_fil?:string, 
        public cc_pdv?:string,
        public cc_tkn?:string, 
        public bl_tkn_atv?:boolean, 
        public st_pdv?:string, 
        public dt_ini?:string, 
        public dt_fim?:string,
        public ts_ins?:string, 
        public lg_ins?:string, 
        public ts_upd?:string, 
        public lg_upd?:string, 
        public ct_prc?:string, 
        public st_reg?:string, 
    ){}
}
