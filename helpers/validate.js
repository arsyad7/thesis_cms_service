module.exports = {
  password: values => {
    if (!values) throw { status: 400, message: 'mohon masukkan password' };
    if (values.length < 8) throw { status: 400, message: 'password minimal 8 karakter' };
    if (!/[a-z]/.test(values)) throw { status: 400, message: 'password harus memiliki huruf kecil' };
    if (!/[A-Z]/.test(values)) throw { status: 400, message: 'password harus memiliki huruf besar' };
    if (!/\d/.test(values)) throw { status: 400, message: 'password harus memiliki angka' };
    if (!/[ !@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(values)) throw { status: 400, message: 'password harus memiliki huruf special seperti !@#$%' }
    return
  }
}