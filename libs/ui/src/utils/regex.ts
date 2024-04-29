// Files for use REGEX.
export const reg =
{
    name: new RegExp(/^[A-Za-z]+$/),
    email: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    password: new RegExp( /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
}