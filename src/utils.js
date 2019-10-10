import yargs from 'yargs';
import request from 'request'

const list = function(urlBase,args){
    request({url:urlBase,json:true},(error,response)=>{
        response.body.results.forEach(function(element,index){
         console.log(`${element.id} ${element.name}`);
    })
    })
}
export{list};

const listAlive = function(urlAlive,args){
    request({url:urlAlive,json:true},(error,response)=>{
        response.body.results.forEach(function(element,index){
         console.log(`${element.id} ${element.name}`);
    })
    })
}
export{listAlive};

const listDead = function(urlDead,args){
    request({url:urlDead,json:true},(error,response)=>{
        response.body.results.forEach(function(element,index){
         console.log(`${element.id} ${element.name}`);
    })
    })
}
export{listDead};

const selected = function(urlBase,args){
    request({url:`${urlBase}${args.number}`,json:true},(error,response)=>{
        console.log(`${urlBase}${args.number}`);
        console.log(response.body);
    })
}
export{selected};

const search = function(urlBase,args){
    request({url:urlBase,json:true},(error,response)=>{
        response.body.results.forEach(function(element,index){
         if (element.name == args.name){
            request({url:`${urlBase}${element.id}`,json:true},(error,response)=>{
                console.log(response.body);
            })
         }
    })
    })
}

export{search};
