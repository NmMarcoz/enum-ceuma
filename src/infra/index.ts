import express from 'express';
import { getSizes } from './services/sizesService';
const app = express();

app.use(express.json());
const get = async (req, res)=>{
    try{
        const response = await getSizes();
       
        return res.status(200).json({
            message: "dados encontrados", 
            data: response
        })
    }catch(err){
        console.log("error", err);
        return res.status(200).json({
            message: "erro buscando os dados",
            error: err
        })
    }
}

app.get('/sizes', get);



app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})

