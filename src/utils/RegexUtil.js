const RegexUtil = (regexType, value) => {
    if(value.length > 25 ) {
        return 'Must be 25 characters or less';
    }
    if( regexType === 'email' && value.length > 3 && !emailRegex.test(value)) {
        return "It's not an email address."
        
    }
    if( regexType === 'password' && value.length > 3 && !pwRegex.test(value)) {
        return 'Password should have at least one Uppercase and Special-letter and number';
    }
    return '';
}
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const pwRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;

export default RegexUtil;