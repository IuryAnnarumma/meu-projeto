import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault() // serve para impedir que a tela recarregue e perca o evento
        console.log(`Usuário ${name} foi cadastrado com a senha ${password} com sucesso`)
        
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                    id="name"
                    name="name"
                    placeholder="digite o seu nome" 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password"  
                    placeholder="digite sua senha" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form