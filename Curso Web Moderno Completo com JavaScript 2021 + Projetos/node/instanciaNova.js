// uma factory renova um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}