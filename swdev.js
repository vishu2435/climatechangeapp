export default function swdev(){
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js')
        .then((v)=>{
            console.log("Good to go ",v)
        })
        .catch(err=>{
            console.warn("Error occured",err)
        })
    }
}