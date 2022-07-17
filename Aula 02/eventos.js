let usuarios = [
    {
        name: "Joaquim"
    },
    {
        name: "Maria"
    },
    {
        name: "Sebastiao"
    }
];



fetch ('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(usuarios => {
        usuarios.forEach(function (cadaUsuario) {
            document.getElementById('conteudo').innerHTML += `
                <tr>
                    <td>${cadaUsuario.name}</td>
                    <td>${cadaUsuario.username}</td>
                    <td>${cadaUsuario.email}</td>
                </tr>
            `;
        })
    });


