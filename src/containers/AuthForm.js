import Render from '../utils/RenderProps';
import { compose, withProps, withStateHandlers, withHandlers } from 'recompose';
const enhancer = compose(
    withStateHandlers(({
        email: '',
        password: ''
    }),{
        onChange: ({email,password}) => (e) => {
            const { name, value} = e.target;
            return {
                [name] : value
            }
        }
    }),
    withProps(({email, match, password}) => {
        return {
            type: match.params.type,
            values : {
                email,
                password
            }   
        }
    }),
    withHandlers({
        onSubmit: ({AuthRequest, email, type, password}) => (e) => {
            e.preventDefault();
            if(email !== '' && password !== '') {
                AuthRequest(type, email, password);
            }
        }
    })
)
export const AuthForm = enhancer(Render);
/*
class AuthForm extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        email: '',
        password: ''
    }
    render() {
        const values = {
            email: this.state.email,
            password: this.state.password
        }
        return (
            <AuthFormComp 
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                values={values}
            />
        );
    }
    onChange({target: { name, value }}) {
        this.setState({
            [name]: value
        });
    }
    onSubmit(e) {
        e.preventDefault();
    }
};
export default AuthForm;
*/