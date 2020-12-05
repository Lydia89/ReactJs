import React, { Component } from 'react';
import {Config} from '../Config'

class  Api  {
/*
    constructor(){
        super()
this.getHome=this.getHome.bind(this)

    }*/
    state={
        name:'',
        source:'',
        slug:''
    }
    async getHome() {

        fetch(Config.host + "/api/home")
            .then(res => res.json())
            .then(json => {
                console.log('json',json)
               

            })

    }
render(){
    return(<div>

    </div>)
}


}

export default new Api();