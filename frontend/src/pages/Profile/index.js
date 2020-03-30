import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>                
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>
                    
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="a8a8b3"/>
                    </button>
                </li>  

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="a8a8b3"/>
                    </button>
                </li>
                          
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="a8a8b3"/>
                    </button>
                </li>
                          
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>
                    
                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>
                    <p>R$ 120,00</p>

                    <button type="button">
                    <FiTrash2 size={20} color="a8a8b3"/>
                    </button>
                </li>
                
            </ul>
        </div>
    );
}