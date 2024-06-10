import {consulta} from "../database/connection.js"


class PessoasRepository {

    findAll(){
        const sql = "SELECT * FROM pessoas;"
        return consulta(sql,"","Não foi possível conectar ao Banco de Dados.")     
    }

    findById(id){
        const sql = "SELECT * FROM pessoas WHERE id=?;"
        return consulta(sql,id,"Não foi possível localizar a pessoa.")     
    }

    create(novaPessoa){
        const sql = "INSERT INTO pessoas SET ?;"
        return consulta(sql,novaPessoa,"Não foi possível adicionar a pessoa.")
        
    }

    update(pessoa, id){
        const sql = "UPDATE pessoas SET ? WHERE id=?;"
        return consulta(sql,[pessoa,id],"Não foi possível atualizar os dados.")
    }

    delete(id){
        const sql = "DELETE FROM pessoas WHERE id=?;"
        return consulta(sql,id,"Não foi possível deletar os dados.")    
    }

}

export default new PessoasRepository();


