import { Link, useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react'

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
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
                        <th colSpan={2}>
                            <img src={`http://github.com/${state.github}.png`} alt="Foto perfil Github"/>
                        </th>
                    </tr>
                    <tr>
                        <td><span>Nome: </span>{state.name}</td>
                        <td><span>Nível: </span>
                            {state.level === 0 && '👶 Sou iniciante'}
                            {state.level === 1 && '🤓 Sou programador'}</td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td><span>E-mail: </span>{state.email}</td>
                        <td><span>GitHub: </span>github.com/{state.github}</td>
                    </tr>
                </table>

                <Link to='/step3' className='backButton'>Voltar</Link>
            </C.Container>
        </Theme>
    );
}