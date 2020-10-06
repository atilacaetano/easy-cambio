import React, { Component } from 'react';
import { Button, Input, Container, Row , Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Conversor.css';

export default class Conversor extends Component {
     constructor(props){
        super(props);

        this.state = {
            moeda_A: "",
            moeda_B: 0,
        }

        this.converter = this.converter.bind(this);
     }

     converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=20741cb2f37fb4f4958d`;

        fetch(url)
            .then( res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para];
                let moeda_B = ( parseFloat(this.state.moeda_A) * cotacao).toFixed(2);
                this.setState({moeda_B})
            });
    }


    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <Container>
                    <Row>
                        <Col xs={9}>
                            <Input className="input" onChange={(event) => { this.setState({moeda_A:event.target.value})}} type="text"></Input>
                        </Col>
                        <Col xs={2}>
                            <Button color="primary" className="button" type="button" value="Converter" onClick={this.converter}><FontAwesomeIcon icon={['fas', 'exchange-alt']} /></Button>
                        </Col>
                    </Row>
                </Container>
                <h2>valor em : <span> {this.state.moeda_B} </span></h2>
                
            </div>
        )
    }
}