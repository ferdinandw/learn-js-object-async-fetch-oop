const manusia = {
    name: 'hartono',
    lastName: 'gokil',
    // getFullName: function (){}
    getFullName(){
        return `${this.name} ${this.lastName}`
    },
    changeName(namaYgDiubah){
        this.name = namaYgDiubah;
    }
}