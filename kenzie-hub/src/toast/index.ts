import toast from "react-hot-toast";


export const RegisterToast = () => toast.success('Registrado com sucesso',{

    duration:2000,
    position: "top-center",
    style:{
        color: '#fff',
        background: '#333'
    }

})

export const LoginToast = () => toast.success('Logado com sucesso',{

    duration:2000,
    position: "top-center",
    style:{
        color: '#fff',
        background: '#333'
    }

})

export const TechToast = () => { 
    
    toast.success('Tecnologia adicionada com sucesso',{
    duration:2000,
    position: "top-center",
    style:{
        color: '#fff',
        background: '#333'
    }
    
    
})

}

export const DeleteTechToast = () => { 
    
    toast.success('Tecnologia deletada com sucesso',{
    duration:2000,
    position: "top-center",
    style:{
        color: '#fff',
        background: '#333'
    }
    
})


}

export const RegisterToastError = () => toast.error('Esse email ja existe.',{
    duration:2000,
    position: "top-center",
    style:{
        color: '#fff',
        background: '#333'
    }
})

export const LoginToastError= () => toast.error("Login ou senha incorreto." ,{
    duration:2000,
    position: "top-center",
    style:{
        color: '#fff',
        background: '#333'
    }

})


export const TechToastError= () => toast.error("Voce já tem esta tecnologia criada, você só pode atualizá-la" ,{
    duration:2000,
    position: "top-center",
    style:{
        color: '#fff',
        background: '#333'
    }

})
