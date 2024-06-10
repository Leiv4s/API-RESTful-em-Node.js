import PessoasRepository from '../repositories/PessoasRepository.js';

class PessoaController {

    async list(req, res)  {
        const row = await PessoasRepository.findAll();
        res.json(row);
    }
    
    async find(req, res)  {
        const id = req.params.id;
        const row = await PessoasRepository.findById(id)
        res.status(200).json(row);
    }
    async add(req, res) {
        const pessoa = req.body;
        const row = await PessoasRepository.create(pessoa);
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id;
        const pessoa = req.body;
        const row = await PessoasRepository.update(pessoa, id);
        res.json(row)
    }

    async delete (req, res)  {
        const id = req.params.id;
        const row = await PessoasRepository.delete(id);
        res.json(row)
    }
}
export default new PessoaController()

