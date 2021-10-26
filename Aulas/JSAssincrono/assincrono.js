//O JS por padrao eh sincrono

//PROMISES: obecto de processamento assincrono, que pode ser resolvida ou rejeitada
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
    .then((result) => result +  ' passando pelo then')
    .then((result) => result + 'e agora acabou')
    .catch((err) => console.log(err.message));
}
