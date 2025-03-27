import { sizeTable } from "../db/schema";
import {getAll} from "../db/index"

export const getSizes = async ():Promise<[{id:number, sizes:string}]>=>{
    const sizes  = await getAll(sizeTable);
    if(!sizes || sizes.length === 0) throw new Error("Sem tamanhos disponíveis");
    console.log(sizes);
    return sizes;
}
