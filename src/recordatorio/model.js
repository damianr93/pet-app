import { v4 as uuidv4 } from 'uuid'


export class Recordatorio {
    
    constructor (descripcion) {
        this.id = uuidv4()
        this.descripcion = descripcion
        
    }
}


