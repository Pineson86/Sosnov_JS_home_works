function task(name, familyname, login = '472514') {
    this.name = name;
    this.familyname = familyname;
    this.login = login;
}

task.prototype.getFullName = function () {
    return this.name + this.familyname + '!';
};