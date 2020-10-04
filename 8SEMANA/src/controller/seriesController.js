//Passo a passo 
//1.importar o JSON de séries
//2. Criar o método para buscar todas as séries
//3. exportar o método 

// ./ retorna arquivos ou pastas do mesmo diretório 
// ../retorna arquivos ou pastas de um diretorio acima

const series = require('../model/series.json');
// const genero = require('../model/generos.json');


const getAll = (req,res) => {
    console.log(req.url);
    //verifica se a resposta tem status 200 (sucesso) e envia o JSON
    res.status(200).send(series);
}

//passo-a-passo 
//Criar metodo getByID
//Retornar o item daquele ID

const getByID = (req,res) => {
    const id = req.params.id
    const seriesFiltrada = series.find((serie)=>{        
        return serie.id == id
    })
    res.status(200).send(seriesFiltrada)
}

//1. Criar metodo getAllGenero
//2. Filtrar lista de series por genero

const getAllGenero = (req,res) => {
    res.status(200).send(genero);
}

const getByNome = (req,res)=> {
    const nome = req.params.nome;
    const nomeFiltrado = series.filter((serie)=> serie.nome == nome);
    res.status(200).send(nomeFiltrado);
}

//1.Criar metodo getAllProtagonista
//2.Retornar somente o nome da protagonista da lista series.json

const getAllProtagonista = (req, res) => {
    const protagonistas = series.map((serie)=> serie.protagonista);
    res.status(200).send(protagonistas);
}

module.exports = {getAll, getByID, getAllGenero,getByNome, getAllProtagonista};

// usamos find no lugar de filter, pq ele retorna o primeiro item que ele encontra na condição // 

// coloco entre {} como um objeto porque nesse arquivo posso exportar novos controles 
// e cada jss só exporta uma coisa.