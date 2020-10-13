import React from 'react';

class Quizz extends React.Component {


    constructor() {
        super();
        this.click = this.click.bind(this);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.setState({
            list: [1, 2, 3, 4]
        })
    }

    click() {
        console.log('Je suis clické');
        // il faut que je rajoute un element à ma list
        const liste=this.state.list.push(5)
        console.log(liste)
    }
  
    render() {
        console.log(this.state.list)
        return (
            <div>
                {/* afficher dans une balise p tout les element de la list}*/}

                <button onClick={this.click}>Button</button>
                <p>{this.state.list.map((elem)=>{
                    return <p>{elem}</p>
                })}</p>
            </div>
        )
    }

}

export default Quizz