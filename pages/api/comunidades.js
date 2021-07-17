const { SiteClient } = require('datocms-client');

export default async function recebedorDeRequests(request, response){

    if(request.method === 'POST'){
        const TOKEN = '02fc5fd3b91ddf2538aa6c7a2335a6';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "968545",
            ...request.body
            // title: 'Comunidade de teste',
            // imageUrl: 'https://github.com/nathaliagalante.png',
            // creatorSlug: 'nathaliagalante'
        })

        response.json({
            registroCriado: registroCriado
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}