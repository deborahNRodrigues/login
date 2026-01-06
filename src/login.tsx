// Importa componentes e ícones da biblioteca de UI Material-UI (@mui/material).
import { FormControl, TextField, Typography } from "@mui/material"; // FormControl é um wrapper para campos de formulário, TextField é um campo de texto e Typography é para texto.
import Box from '@mui/material/Box'; // Box é um componente de layout que pode ser usado para aplicar estilos CSS, como display flex.
import LockIcon from '@mui/icons-material/Lock'; // Importa o ícone de cadeado.
import Button from '@mui/material/Button'; // Importa o componente de botão.
import { CheckBox } from "@mui/icons-material";

// Define o componente funcional 'Login'. Componentes em React são funções que retornam JSX (uma sintaxe que parece HTML).
const Login = () => {
  
    // O retorno do componente. Tudo dentro do `return` será renderizado na tela.
    return (
      
             // '<>' é um Fragmento do React. Ele permite agrupar múltiplos elementos sem adicionar um nó extra ao DOM.
             <>
                                    
              {/* Este Box é um container para o ícone e o título do formulário de login. */}


              
              <Box  display="flex" alignItems="center" justifyContent="center" flexDirection="column"  width="100%" >
              <img className="icon-login"></img>
              <Typography className="titulo" variant="h4" align="center">Login</Typography> {/* Renderiza o texto "Login" como um título (h4) e o centraliza. */}
             </Box>

           {/* Este Box contém o campo de entrada para o e-mail. */}
           <Box className="form-email" display="flex" component="form" flexDirection="column"alignItems="center" alignContent="center" justifyContent="center" maxWidth="100%" mb={2}>
              <FormControl> {/* Agrupa o campo de texto para controle do formulário. */}
                {/* O TextField é o campo onde o usuário digitará o e-mail. */}
                <TextField className="email" type="email" id="outlined-basic" label="E-mail" variant="outlined" placeholder="E-mail" />
                
              </FormControl>
           </Box>

            {/* Este Box contém o campo de entrada para a senha. */}
            <Box className="form-password" display="flex" component="form" flexDirection="column"alignItems="center" alignContent="center" justifyContent="center" maxWidth="100%" >
              <FormControl> {/* Agrupa o campo de texto para controle do formulário. */}
                {/* O TextField é o campo onde o usuário digitará a senha. */}
                <TextField className="password" type="password" id="outlined-basic" label="Senha" variant="outlined" placeholder="******"  />
                  <Button className="btn-login"  type ="submit" variant="contained">Entrar</Button>
              </FormControl>
           </Box>
           <div className="link-register"> <a href="#">Esqueceu a senha?</a></div>
            <div className="link-cadastrar"> <a href="#">Cadastrar</a></div>



                        
            
      </>  

    )

}

// Exporta o componente 'Login' como o padrão deste arquivo, permitindo que ele seja importado e usado em outras partes da aplicação.
export default Login;