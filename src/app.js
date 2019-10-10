import request from 'request';
import yargs from 'yargs';
import {list,listAlive,listDead,selected,search} from './utils';
const urlBase = 'https://rickandmortyapi.com/api/character/';
const urlAlive = 'https://rickandmortyapi.com/api/character/?status=alive';
const urlDead = 'https://rickandmortyapi.com/api/character/?status=dead';


yargs.command({
    command: 'list',
    describe: 'listing all characters ',
    handler:function(args){
      list(urlBase,args);
  } 

})

yargs.command({
    command: 'alive',
    describe: 'listing all alive characters ',
    handler:function(args){
      listAlive(urlAlive,args);
  } 

})

yargs.command({
    command: 'dead',
    describe: 'listing all dead characters ',
    handler:function(args){
      listDead(urlDead,args);
  } 

})


yargs.command({
    command: 'select',
    describe: 'selecting a character with his id ',
    builder:{
        number:{
            describe: 'Character ID',
            demandOption: true,
            type: 'number'
        }
    },
    handler:function(args){
        selected(urlBase,args);
    } 

})

yargs.command({
    command: 'search',
    describe: 'searching a character with his id ',
    builder:{
        name:{
            describe: 'Name of the character',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function(args){
        selected(urlBase,args);
    } 

})

yargs.parse();