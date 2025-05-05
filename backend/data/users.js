import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Joseph Hernandez',
        email : 'abc@example.com',
        password : bcrypt.hashSync('Gentleman1022!',12),
        isAdmin : true
    },
    {
        name : 'Antonio',
        email : 'def@example.com',
        password : bcrypt.hashSync('antonio',12),
        isAdmin : false
    },
    {
        name : 'Dante',
        email : 'gew@example.com',
        password : bcrypt.hashSync('dante',12),
        isAdmin : false
    },
    {
        name : 'John Doe',
        email : 'aas@example.com',
        password : bcrypt.hashSync('doe2020',12),
        isAdmin : false
    }
    
]
export default Users