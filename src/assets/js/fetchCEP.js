const url = "https://viacep.com.br/ws/89801112/json/";

export async function getCEPData(element) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    try {
        fetch(url, {
            headers: headers
        }).then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
            // This is the JSON from our response
            // console.log(data);
            element.innerHTML = `${data.logradouro}, ${data.complemento} - ${data.bairro}
            <br>${data.localidade}/${data.uf}, ${data.cep}
            <br>${data.ddd} - ${data.regiao}`
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    } catch (error) {
        console.error(error.message);
    }
}
