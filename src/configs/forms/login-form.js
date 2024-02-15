export const  loginForm = [
    {
        type:"text",
        label:"User Name",
        name:"username",
        id:"username",
        validations: ["required","maxlength"],   //,"minlength","onlyNumber"
        classes: [],
        isValid:true,
        maxlength:20,
        msg:""
    },{
        type:"password",
        label:"Password",
        name:"password",
        id:"password",
        validations: ["required"],
        isValid:true,
        msg:""
    }
]