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

    return (
        <Theme>
            <C.Container>
                <p>Resultado</p>
                <h1>Parabéns {state.name} seu cadastro foi recebido</h1>
                <p>Confira abaixo os seus dados.</p>

                <hr />

                

                <Link to='/step3' className='backButton'>Voltar</Link>
            </C.Container>
        </Theme>
    );
}