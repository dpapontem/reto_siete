<template>
    <div class="create_form">

        <div class="formulario">      
          <h2>Crear Usuario</h2>
            
            <form action="submeter-formulario.php" method="post">       

                
                    <p>
                    <label for="nombre" class="colocar_nombre">Nombres
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu Nombres">
                    </p>
                    <p>
                      <label for="apellido" class="colocar_apellido">Apellidos
                          <span class="obligatorio">*</span>
                      </label>
                          <input type="text" name="introducir_apellido" id="apellido" required="obligatorio" placeholder="Escribe tus Apellidos">
                    </p>
                
                    <p>
                    <label for="email" class="colocar_email">Email
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email">
                    </p>
                    <p>
                      <label for="username" class="colocar_usuario">Usuario
                          <span class="obligatorio">*</span>
                      </label>
                          <input type="text" name="introducir_usuario" id="username" required="obligatorio" placeholder="Escribeun usuario">
                    </p>
                    <p>
                      <label for="password" class="colocar_contraseña">Contraseña
                          <span class="obligatorio">*</span>
                      </label>
                          <input type="password" name="introducir_contraseña" id="password" required="obligatorio" placeholder="Ingresa una Contraseña">
                    </p>

                    <p>
                      <label for="password" class="confirmar_contraseña">Confirmar Contraseña
                          <span class="obligatorio">*</span>
                      </label>
                          <input type="password" name="confirmar_contraseña" id="password1" required="obligatorio" placeholder="Confirme la Contraseña">
                    </p>
                                                   
                                  
                                     
                                   
                
                    <button type="user_new" name="crear_usuario" id="Crear"><p>Crear Usuario</p></button>

                    <p class="aviso">
                    <span class="obligatorio"> * </span>los campos son obligatorios.
                    </p>          
                
            </form>
        </div>  
    </div>

    
</template>

<script>

import axios from 'axios';

export default {
    name: 'user_new',
    methodes:{
        crear_Usuario:function(){

            const user_new={

                "username": username.value,
                "password": password.value,
                "name": nombre.value,
                "last_name": apellido.value,
                "email": email.value,
            };

            
        }

        
    },
     beforeCreate: function(){
       let url='http://127.0.0.1:8000/usuario/crear'

        axios.post(url,user_new).then(res)

        consolole.log(user_new)
    }
  
}
</script>

<style>

    body{
    margin: 0 0 0 0;
  }


.create_form{  
  width: 460px; 
  height: auto;
  margin: 80px auto;
  border-radius: 10px;  
  padding-top: 30px;
  padding-bottom: 20px;  
  background-color: #fbfbfb; 
  padding-left: 30px; 
}


input{
  background-color: #fbfbfb; 
  width: 408px; 
  height: 40px; 
  border-radius: 5px;  
  border-style: solid; 
  border-width: 1px; 
  border-color: #bfbbc0; 
  margin-top: 10px;  
  padding-left: 10px;
  margin-bottom: 20px; 
}





label{
  display: block; 
  float: center;  
}


button{
  height: 45px; 
  padding-left: 5px;
  padding-right: 5px;   
  margin-bottom: 20px; 
  margin-top: 10px;   
  text-transform: uppercase;
  background-color: #734b85; 
  border-color: #c577dd; 
  border-style: solid; 
  border-radius: 10px;  
  width: 420px;   
  cursor: pointer;
}


button p{
  color: #fff; 
}


span{
  color: #ab4493; 
}


.aviso{
  font-size: 13px;  
  color: #0e0e0e;  
}




h2{
  font-size: 16px; 
  padding-bottom: 30px;
  color: #0e0e0e; 
  text-align: center;
  
}


p{
  font-size: 14px; 
  color: #0e0e0e; 
}


::-webkit-input-placeholder {
 color: #a8a8a8;
}


::-webkit-textarea-placeholder {
 color: #a8a8a8;
}


.formulario input:focus{
  outline:0;
  border: 1px solid #97d848;
}


.formulario textarea:focus{
  outline:0;
  border: 1px solid #97d848;
}
    

</style>