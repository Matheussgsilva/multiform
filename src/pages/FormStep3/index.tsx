import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, KeyboardEvent } from 'react'

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, [])

    const handleEnter = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && state.github !== '') {
            navigate('/step4')
        } 
    }

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            navigate('/step4')
        } else {
            alert('Preencha os dados.')
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    const newName = (state.name).split(" ")
    const onlyName = newName[0]

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {onlyName}, onde te achamos?</h1>
                <p>Preencha com os seus dados para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual o seu e-mail?
                    <input
                        type='email'
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu usuário do Github?
                    <input
                        type='text'
                        value={state.github}
                        onChange={handleGithubChange}
                        onKeyUp={handleEnter}
                    />
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}