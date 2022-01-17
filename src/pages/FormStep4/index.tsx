import { Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react'

export const FormStep4 = () => {
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        });
    }, [])

    const newName = (state.name).split(" ")
    const onlyName = newName[0]

    return (
        <Theme>
            <C.Container>
                <p>Resultado</p>
                <h1>Parabéns {onlyName} seu cadastro foi recebido</h1>
                <p>Confira abaixo os seus dados.</p>

                <hr />

                <table>
                    <tr>
                        <td><span>Nome:</span></td>
                        <td>{state.name}</td>
                    </tr>
                    <tr>
                        <td><span>Nível:</span></td>
                        <td>{state.level === 0 && '👶 Sou iniciante'}
                            {state.level === 1 && '🤓 Sou programador'}
                        </td>
                    </tr>
                    <tr>
                        <td><span>E-mail:</span></td>
                        <td>{state.email}</td>
                    </tr>
                    <tr>
                        <td><span>GitHub:</span></td>
                        <td>{state.github}</td>
                    </tr>
                </table>

                <Link to='/step3' className='backButton'>Voltar</Link>
            </C.Container>
        </Theme>
    );
}